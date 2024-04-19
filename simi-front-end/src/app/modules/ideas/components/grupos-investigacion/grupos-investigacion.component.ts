import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatumGruposInvestigacion, GruposInvestigacion, MocoResponseGruposInvestigacion } from '../../../../core/services/db_interfaces/Grupos_Investigacion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatumLineasInvestigacion, LineasInvestigacion, MocoResponseLineasInvestigacion } from '../../../../core/services/db_interfaces/Lineas_Investigacion';
import { directus } from '../../../../core/services/directus';
import { NewIdeaPageComponent } from '../../pages/new-idea-page/new-idea-page.component';
import { DashboardPageComponent } from '../../pages/dashboard-page/dashboard-page.component';

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
  @Input() formulario: any
  gruposInvestigacion: DatumGruposInvestigacion[] = [];



  override ngOnInit(): void {
    // this.editor = new Editor();
    this.getGruposLineasInvestigacion();
    // this.formulario.controls["Entidad"].setValue("Agustin Codazzi Igac")
  }

  /**
   * Obtiene desde directus las lineas y grupos de investigación para ser renderizadas en el front
   */
  async getGruposLineasInvestigacion() {
    try {
      let responseLineasInvestigacion: LineasInvestigacion = await directus.items('Lineas_Investigacion').readByQuery({ sort: ['Id_Linea_Investigacion'] })  as LineasInvestigacion;
      // let responseLineasInvestigacion: LineasInvestigacion =  MocoResponseLineasInvestigacion;

      let responseGruposInvestigacion: GruposInvestigacion = await directus.items('Grupos_Investigacion').readByQuery({ sort: ['Id_Grupo_Investigacion'] })  as GruposInvestigacion;
      // let responseGruposInvestigacion: GruposInvestigacion = MocoResponseGruposInvestigacion ;
      this.ordenarLineasInvestigacionConGrupos(responseLineasInvestigacion.data, responseGruposInvestigacion.data);
    } catch (error) {
      console.log({error});
      this.validateSesionTime() // de DashboardPageComponent
    }
  }

  /**
   * Ordena las lineas de investigación por grupo de investigación
   * @param LineasInvestigacion
   * @param GruposInvestigacion
   */
  ordenarLineasInvestigacionConGrupos(LineasInvestigacion: DatumLineasInvestigacion[], GruposInvestigacion: DatumGruposInvestigacion[]) {
    console.log(LineasInvestigacion);

    GruposInvestigacion = GruposInvestigacion.map(e => e = {...e, lineasInvestigacion:[]})
    GruposInvestigacion.forEach(GI => {
      LineasInvestigacion.forEach(LI => {
        if (LI.Id_Grupo_Investigacion == GI.Id_Grupo_Investigacion) GI.lineasInvestigacion?.push(LI)
      });
    });

    console.log(GruposInvestigacion);
    this.gruposInvestigacion = GruposInvestigacion;


  }

  /**
   * Metodo para agregar y eliminar linea de investigación seleccionado
   * @param GI grupo de investigación
   * @param LI linea de investigación
   * @param adicionarLineaInv bandera para saber si se debe adicionar o eliminar del array de seleccionados
   */
  checkedLI(GI: DatumGruposInvestigacion, LI: DatumLineasInvestigacion, adicionarLineaInv: any): void {
    console.log(adicionarLineaInv);
    console.log(GI);
    console.log(LI);
    let LineaIvestigacionSelected = this.formulario.value.LineaIvestigacionSelected;
    if (adicionarLineaInv) {
      this.formulario.controls['LineaIvestigacionSelected'].setValue([...LineaIvestigacionSelected, LI.Id_Linea_Investigacion])
    } else {
      LineaIvestigacionSelected = LineaIvestigacionSelected.filter((linInv:  string) => linInv !== LI.Id_Linea_Investigacion)
      this.formulario.controls['LineaIvestigacionSelected'].setValue(LineaIvestigacionSelected)
    }
    console.log(this.formulario.value.LineaIvestigacionSelected.length < 1);
    this.banderaValidacionLineasInvestigacionSeleccionadas = this.formulario.value.LineaIvestigacionSelected.length < 1; // quita el msm de requerimiento del campo
    console.log(this.banderaValidacionLineasInvestigacionSeleccionadas);

  }


}
