import { Component, OnInit, inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { directus } from '../../../../core/services/directus';
import { StoreApp, initConvocatoriaSelected, initDataIdeaSeleccionada } from '../../../../core/store/storeApp';
import { BaseComponent } from '../../../../share/components/base/base.component';
import { Respons_DB_Ideas_Investigacion, dataIdeaSeleccionada } from '../../../../core/services/db_interfaces/Ideas_Investigacion';
import { constantesNewIdea, modoVistaFormularioIdeaInvestigacion } from '@app/share/utils/constas';
import { MatTableWebComponent } from '@app/share/components/mat-table-web/mat-table-web.component';


/**
 * Componente encargado de renderiza el listado de ideas existentes
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-list-ideas',
  standalone: true,
  imports: [ MatButtonModule, MatTableWebComponent],
  templateUrl: './list-ideas.component.html',
  styleUrl: './list-ideas.component.scss'
})
export class ListIdeasComponent extends BaseComponent implements OnInit {

  /**
   * Instanciación del store
   * para:
   *  guardar idea seleccionada o la reinica
   */
  store = inject(StoreApp)

  /**
   * Columnas para la tabla de ideas
   */
  displayedColumns: string[] = ['Codigo_Idea', 'Titulo_Idea', 'tipoProyecto', 'anio', 'fechaHoraRegistro', 'Descripcion_Valor_Estado', 'actions'];

  /**
   * datasource que suministra info al data table
   */
  dataSource: MatTableDataSource<dataIdeaSeleccionada> = new MatTableDataSource<dataIdeaSeleccionada>();



  modos_VistaFormulario: modoVistaFormularioIdeaInvestigacion = constantesNewIdea.modoVistaFormularioIdeaInvestigacion; // constantes modo ver, nueva o devolución de una nueva idea





  /**
   * Verifica si existe token, de lo contrario redirige a la pagina login
   * si existe token ejecuta logica para traer el listado de ideas
   * para ser renderizadas en el table
   */
  ngOnInit(): void {
    if (localStorage.getItem("auth_token")) { // valida si existe token de sesion
      this.getIdeas_Investigacion();
      this.store.setIdeaSeleccionanda(initDataIdeaSeleccionada) // resetea idea seleccionda
    } else {
      this.rederMensajeToast(`Sesión expirada`);
      this.router.navigate([`/login`]);
    }
  }

  /**
   * Obtiene la data de ideas de investigación y la setea en el data source
   */
  async getIdeas_Investigacion() {
    const queryParams = {
      filter: {
        Usuario_Creador: {
          _eq: "ce694582-c86c-456c-9165-72cfd9865782",
        },
      },
      // sort: ['Codigo_Idea'],
      fields:['Codigo_Idea', 'Titulo_Idea', 'estados.*',  'estados.Usuario_Creador.*', 'estados.Id_Estado.*', 'tipoProyecto', 'Fecha_Creacion', 'Id_Idea_Investigacion', 'Desarrollo_Tecnologico',
      'Innovacion', 'Investigacion_Cientifica','Usuario_Creador.*'/*  'Tiempo_Ejecucion_Proyecto',
        'Entidad', 'Fecha_Idea', 'email', 'URL_Cronograma',  'Usuario_Creador', 'Id_Convocatoria',
      'Id_Macroproyecto', 'Id_Dependencia_IGAC', 'Id_Ponente', 'Tiempo_Ejecucion', 'Lugar_Ejecucion', 'Nuevo_Conocimiento', 'Tecnologico_Innovacion',
      'Apropiacion_Conocimiento', 'Formacion_CTEL', 'Problema_Idea', 'Antecedentes', 'Justificacion', 'Descripcion_Idea', 'Bibliografia_Empleada', 'Validada',
      'Fecha_Validacion', 'lineas_investigacion.Id_Linea_Investigacion.*', 'lineas_investigacion.Id_Linea_Investigacion.Id_Grupo_Investigacion.*' */
    ]
    }
    const publicData: Respons_DB_Ideas_Investigacion = await directus.items('Ideas_Investigacion').readByQuery(queryParams)  as Respons_DB_Ideas_Investigacion;
    this.fixDataToRender(publicData.data)
  }

  /**
   * Metodo para ajustar la data de Ideas_Investigacion, se ajusta
   * tipoProyecto
   * Descripcion_Valor_Estado del estado
   * @param Ideas_Investigacion
   */
  fixDataToRender(Ideas_Investigacion: dataIdeaSeleccionada[]) {

    /**
     *  con este map se crea un string con el tipo o tipos de proyecto para la idea
     */
    Ideas_Investigacion.map(idea => {
      idea['tipoProyecto'] = ` ${idea.Desarrollo_Tecnologico == '1' ? 'Desarrollo Tecnologico,' :''} ${idea.Innovacion == '1' ? 'Innovacion,' :''} ${idea.Investigacion_Cientifica == '1' ? 'Investigacion Cientifica' :''}`
      idea.Fecha_Creacion = new Date(idea.Fecha_Creacion).toLocaleDateString();
      idea.estados.map(estado => {
        estado.Fecha_Creacion = new Date(estado.Fecha_Creacion).toLocaleDateString();
        estado.Fecha_Estado = new Date(estado.Fecha_Estado).toLocaleDateString();
      });
    });

    // logica paa validar el último estado de la idea
    Ideas_Investigacion.forEach(ideaInv => {
      if (ideaInv["estados"].length < 2 && ideaInv["estados"].length > 0) {
          ideaInv['Descripcion_Valor_Estado'] = ideaInv["estados"][0].Id_Estado.Descripcion_Valor
        }else if(ideaInv["estados"].length > 0){
            let fechaEstado = Number(new Date(ideaInv["estados"][0].Fecha_Creacion))
            let Descripcion_Valor = ideaInv["estados"][0].Id_Estado.Descripcion_Valor
            ideaInv["estados"].map((estado: typeEstado) => {
                estado.Fecha_Creacion = new Date(estado.Fecha_Creacion)
                if (Number(estado.Fecha_Creacion) > fechaEstado) {
                    fechaEstado = Number(estado.Fecha_Creacion)
                    Descripcion_Valor = estado.Id_Estado.Descripcion_Valor
                }
                estado.Fecha_Creacion = new Date(estado.Fecha_Creacion).toLocaleDateString();
            });
            ideaInv['Descripcion_Valor_Estado'] = Descripcion_Valor
        }

    })
    this.dataSource.data = Ideas_Investigacion
  }

  /**
   * redireccionaa la pagina nueva idea
   */
  goRegistrarNuevaIdea(){
    this.store.set_tipoVistaFormularioIdeaInvestigacion(this.modos_VistaFormulario.modo_nueva_idea)
    this.store.setConvocatoriaSelected(initConvocatoriaSelected); // reset el obj ConvocatoriaSelected
    this.router.navigate(["/home/idea"])
  }

}

export type typeEstado = {
  Fecha_Creacion: string | number | Date;
  Id_Estado: {
    Descripcion_Valor: string;
  };
}


