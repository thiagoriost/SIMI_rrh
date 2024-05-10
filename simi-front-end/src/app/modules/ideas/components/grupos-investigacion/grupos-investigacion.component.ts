import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { directus } from '../../../../core/services/directus';
import { FormGroup } from '@angular/forms';
import { DashboardPageComponent } from '../../pages/dashboard-page/dashboard-page.component';
import { DatumGruposInvestigacion, Grupoinvestigacion, GruposInvestigacion, IDGrupoInvestigacion } from '../../../../core/services/db_interfaces/Grupos_Investigacion';
import {  DatumLineasInvestigacion, LineasInvestigacion } from '../../../../core/services/db_interfaces/Lineas_Investigacion';
import { constantesNewIdea, modoVistaFormularioIdeaInvestigacion } from '@app/share/utils/constas';

/**
 * Componente encargado de renderizar los grupos de investigación
 * y las líneas de investigación
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-grupos-investigacion',
  standalone: true,
  imports: [MatFormFieldModule, // MatFormFieldModule lo emplea mat-error entre otros
     MatCheckboxModule],
  templateUrl: './grupos-investigacion.component.html',
  styleUrl: './grupos-investigacion.component.scss'
})
export class GruposInvestigacionComponent extends DashboardPageComponent implements OnInit {

  @Input() banderaValidacionLineasInvestigacionSeleccionadas: boolean = false;//controla el mensaje de error, campo requerido
  @Input({required:true}) formulario: FormGroup | undefined // datos del formulario que viene desde el componente padre
  @Input() modoVista: string = ''; // bandera para saber si estamos en modo ver o nueva idea
  gruposInvestigacion: DatumGruposInvestigacion[] = []; // arreglo para almacenarlos grupos de investigación ordenados para ser renderizados
  modos_VistaFormulario: modoVistaFormularioIdeaInvestigacion = constantesNewIdea.modoVistaFormularioIdeaInvestigacion; // constantes modo ver, nueva o devolución de una nueva idea

  /**
   * En este metodo validamos si estamos en modo ver
   * si es true ajustamos la data que nos llega desde el componente padre
   *  de lo contrario traemos la data desde backend
   */
  override ngOnInit(): void {

    this.gruposInvestigacion = [];
    if (this.modoVista !== this.modos_VistaFormulario.modo_ver) {
      this.getGruposLineasInvestigacion();
    }else{
      this.ajustarDataToRenderGruposInvestigacion();
    }
  }

  /**
   * Cuando esta en modo ver toma la lineas de investigación y las agrupa por grupo de investigacion y por cada grupo adiciona las lineas de Inv que tiene
   */
  ajustarDataToRenderGruposInvestigacion() {
    setTimeout(() => {// este settime es para darle tiempo de que este listo el DOM de html
      const gruposInvestigacion:IDGrupoInvestigacion[] = [];
      this.formulario?.value.lineas_investigacion.forEach((LI: Grupoinvestigacion) => {

          if (gruposInvestigacion.filter(GI => GI.Id_Grupo_Investigacion == LI.Id_Linea_Investigacion.Id_Grupo_Investigacion.Id_Grupo_Investigacion)[0]) {//valida si ya existe el grupo Inv
            gruposInvestigacion.map(e => { // recorre los grupos por id de grupo, cuando lo encuentra adiciona la linea
              if(e.Id_Grupo_Investigacion == LI.Id_Linea_Investigacion.Id_Grupo_Investigacion.Id_Grupo_Investigacion) e.lineasInvestigacion?.push(LI.Id_Linea_Investigacion)
            })
          } else {
            // si no existe el grupo dentro del array de grupos Inv, lo adiciona
            gruposInvestigacion.push(
              {
                ...LI.Id_Linea_Investigacion.Id_Grupo_Investigacion,
                lineasInvestigacion: [
                  {
                    ...LI.Id_Linea_Investigacion
                  }
                ]
              }
            );
          }
      });
      this.gruposInvestigacion = gruposInvestigacion;

    }, 1000);
  }

  /**
   * Obtiene desde directus las lineas y grupos de investigación para ser renderizadas en el front
   */
  async getGruposLineasInvestigacion() {
    try {
      const responseLineasInvestigacion: LineasInvestigacion = await directus.items('Lineas_Investigacion').readByQuery({ sort: ['Id_Linea_Investigacion'] })  as LineasInvestigacion;

      const responseGruposInvestigacion: GruposInvestigacion = await directus.items('Grupos_Investigacion').readByQuery({ sort: ['Id_Grupo_Investigacion'] })  as GruposInvestigacion;
      this.ordenarLineasInvestigacionConGrupos(responseLineasInvestigacion.data, responseGruposInvestigacion.data);
    } catch (error) {
      this.validateSesionTime() // de DashboardPageComponent
    }
  }

  /**
   * Ordena las lineas de investigación por grupo de investigación
   * @param LineasInvestigacion
   * @param GruposInvestigacion
   */
  ordenarLineasInvestigacionConGrupos(LineasInvestigacion: DatumLineasInvestigacion[], GruposInvestigacion: IDGrupoInvestigacion[]) {
    GruposInvestigacion = GruposInvestigacion.map(e => e = {...e, lineasInvestigacion:[]})
    GruposInvestigacion.forEach(GI => {
      LineasInvestigacion.forEach(LI => {
        if (LI['Id_Grupo_Investigacion'] == GI.Id_Grupo_Investigacion) GI.lineasInvestigacion?.push(LI)
      });
    });
    this.gruposInvestigacion = GruposInvestigacion;
  }

  /**
   * Metodo para agregar y eliminar linea de investigación seleccionado
   * @param GI grupo de investigación
   * @param LI linea de investigación
   * @param adicionarLineaInv bandera para saber si se debe adicionar o eliminar del array de seleccionados
   */
  checkedLI(GI: DatumGruposInvestigacion, LI: DatumLineasInvestigacion, adicionarLineaInv: boolean): void {
    if (this.formulario) {
      let LineaIvestigacionSelected = this.formulario.value.LineaIvestigacionSelected;
      if (adicionarLineaInv) {
        this.formulario.controls['LineaIvestigacionSelected'].setValue([...LineaIvestigacionSelected, {Id_Linea_Investigacion:LI.Id_Linea_Investigacion}]);// agrega linea de investigación selecionada
      } else {
        LineaIvestigacionSelected = LineaIvestigacionSelected.filter((linInv: { Id_Linea_Investigacion: string; }) => linInv.Id_Linea_Investigacion !== LI.Id_Linea_Investigacion); // elimina linea de investigación des-selecionada
        this.formulario.controls['LineaIvestigacionSelected'].setValue(LineaIvestigacionSelected)
      }
      this.banderaValidacionLineasInvestigacionSeleccionadas = this.formulario.value.LineaIvestigacionSelected.length < 1; // quita el msm de requerimiento del campo
    }
  }
}
