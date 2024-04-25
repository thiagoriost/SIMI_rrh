import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { directus } from '../../../../core/services/directus';
import { Ideas_Investigacion, Response_Ideas_Investigacion } from '../../../../share/interface/interfaces';
import { StoreApp, initConvocatoriaSelected, initDataIdeaSeleccionada } from '../../../../core/store/storeApp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../../../../share/components/base/base.component';
import { get_Estados_Idea } from '../../../../core/api/api';

@Component({
  selector: 'app-list-ideas',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, CommonModule, MatIconModule],
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
  displayedColumns: string[] = ['codigo', 'tituloIdea', 'tipoProyecto', 'anio', 'fechaHoraRegistro', 'estado', 'actions'];

  /**
   * datasource que suministra info al data table
   */
  dataSource: MatTableDataSource<Ideas_Investigacion> = new MatTableDataSource<Ideas_Investigacion>();

  /**
   * controla el paginador de la tabla ideas
   */
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(router: Router, _snackBar: MatSnackBar){
    super(router, _snackBar);
  }

  ngOnInit(): void {
    console.log("ngOnInit ListIdeasComponent");

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
      sort: ['Codigo_Idea'],
      fields:['Codigo_Idea', 'Titulo_Idea', 'estados.*', 'estados.Id_Estado.*', 'tipoProyecto', 'Fecha_Creacion', 'Id_Idea_Investigacion', 'Desarrollo_Tecnologico',
      'Innovacion', 'Investigacion_Cientifica',/*  'Tiempo_Ejecucion_Proyecto',
        'Entidad', 'Fecha_Idea', 'email', 'URL_Cronograma',  'Usuario_Creador', 'Id_Convocatoria',
      'Id_Macroproyecto', 'Id_Dependencia_IGAC', 'Id_Ponente', 'Tiempo_Ejecucion', 'Lugar_Ejecucion', 'Nuevo_Conocimiento', 'Tecnologico_Innovacion',
      'Apropiacion_Conocimiento', 'Formacion_CTEL', 'Problema_Idea', 'Antecedentes', 'Justificacion', 'Descripcion_Idea', 'Bibliografia_Empleada', 'Validada',
      'Fecha_Validacion', 'lineas_investigacion.Id_Linea_Investigacion.*', 'lineas_investigacion.Id_Linea_Investigacion.Id_Grupo_Investigacion.*' */
    ]
    }
    // let publicData: Response_Ideas_Investigacion = await directus.items('Ideas_Investigacion').readByQuery({ sort: ['Codigo_Idea'] })  as Response_Ideas_Investigacion;
    let publicData: Response_Ideas_Investigacion = await directus.items('Ideas_Investigacion').readByQuery(queryParams)  as Response_Ideas_Investigacion;
    console.log(publicData.data);
    this.fixDataToRender(publicData.data)
  }

  fixDataToRender(Ideas_Investigacion: Ideas_Investigacion[]) {
    // ajuste tipo proyecto TIPO DE PROYECTO Tecnologico_Innovacion, Desarrollo_Tecnologico, Innovacion, Investigacion_Cientifica
    console.log({Ideas_Investigacion});

    Ideas_Investigacion.map(idea => {
      idea['tipoProyecto'] = ` ${idea.Desarrollo_Tecnologico == '1' ? 'Desarrollo Tecnologico,' :''} ${idea.Innovacion == '1' ? 'Innovacion,' :''} ${idea.Investigacion_Cientifica == '1' ? 'Investigacion Cientifica' :''}`
    });

    Ideas_Investigacion.forEach(ideaInv => {
      if (ideaInv["estados"].length < 1) {

      } else if (ideaInv["estados"].length < 2) {
          ideaInv['Descripcion_Valor_Estado'] = ideaInv["estados"][0].Id_Estado.Descripcion_Valor
      }else{
          let fechaEstado = Number(new Date(ideaInv["estados"][0].Fecha_Creacion))
          let Descripcion_Valor = ideaInv["estados"][0].Id_Estado.Descripcion_Valor
          ideaInv["estados"].map((estado: typeEstado) => {
              //console.log(estado.Fecha_Creacion)
              estado.Fecha_Creacion = new Date(estado.Fecha_Creacion)
              if (Number(estado.Fecha_Creacion) > fechaEstado) {
                  fechaEstado = Number(estado.Fecha_Creacion)
                  Descripcion_Valor = estado.Id_Estado.Descripcion_Valor
              }else{
              }

          });
          ideaInv['Descripcion_Valor_Estado'] = Descripcion_Valor
      }

  })

    this.dataSource.data = Ideas_Investigacion
  }

  /**
   * Asigna el paginador a la fuente de datos
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   *
   * @param ideaSeleccionanda
   * Toma la idea seleccionada y la envia al store
   * redirecciona a la pagina idea
   */
  goRegistrarIdea(ideaSeleccionanda: Ideas_Investigacion) {
    console.log(ideaSeleccionanda);
    ideaSeleccionanda["nombreProponente"] = this.store.usuario().first_name + " " + this.store.usuario().last_name;
    ideaSeleccionanda["email"] = this.store.usuario().email;
    this.store.setIdeaSeleccionanda(ideaSeleccionanda);// set ideaSeleccionada en el store
    this.router.navigate([`/home/idea/${ideaSeleccionanda.Id_Idea_Investigacion}`])
  }

  /**
   * redireccionaa la pagina nueva idea
   */
  goRegistrarNuevaIdea(){
    this.store.setConvocatoriaSelected(initConvocatoriaSelected); // reset el obj ConvocatoriaSelected
    this.router.navigate(["/home/idea"])
  }


}

/* export interface PeriodicElement {
  tituloIdea: string;
  codigo: number;
  tipoProyecto: number;
  anio: string;
  fechaHoraRegistro: string;
  estado: string;
} */

/* const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, tituloIdea: 'Hydrogen', tipoProyecto: 1.0079, anio: 'H', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 2, tituloIdea: 'Helium', tipoProyecto: 4.0026, anio: 'He', fechaHoraRegistro: '465456', estado: 'En revisión'},
  {codigo: 3, tituloIdea: 'Lithium', tipoProyecto: 6.941, anio: 'Li', fechaHoraRegistro: '465456', estado: 'Rechazado'},
  {codigo: 4, tituloIdea: 'Beryllium', tipoProyecto: 9.0122, anio: 'Be', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 5, tituloIdea: 'Boron', tipoProyecto: 10.811, anio: 'B', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 6, tituloIdea: 'Carbon', tipoProyecto: 12.0107, anio: 'C', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 7, tituloIdea: 'Nitrogen', tipoProyecto: 14.0067, anio: 'N', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 8, tituloIdea: 'Oxygen', tipoProyecto: 15.9994, anio: 'O', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 9, tituloIdea: 'Fluorine', tipoProyecto: 18.9984, anio: 'F', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 10, tituloIdea: 'Neon', tipoProyecto: 20.1797, anio: 'Ne', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 11, tituloIdea: 'Sodium', tipoProyecto: 22.9897, anio: 'Na', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 12, tituloIdea: 'Magnesium', tipoProyecto: 24.305, anio: 'Mg', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 13, tituloIdea: 'Aluminum', tipoProyecto: 26.9815, anio: 'Al', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 14, tituloIdea: 'Silicon', tipoProyecto: 28.0855, anio: 'Si', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 15, tituloIdea: 'Phosphorus', tipoProyecto: 30.9738, anio: 'P', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 16, tituloIdea: 'Sulfur', tipoProyecto: 32.065, anio: 'S', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 17, tituloIdea: 'Chlorine', tipoProyecto: 35.453, anio: 'Cl', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 18, tituloIdea: 'Argon', tipoProyecto: 39.948, anio: 'Ar', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 19, tituloIdea: 'Potassium', tipoProyecto: 39.0983, anio: 'K', fechaHoraRegistro: '465456', estado: 'Aprobado'},
  {codigo: 20, tituloIdea: 'Calcium', tipoProyecto: 40.078, anio: 'Ca', fechaHoraRegistro: '465456', estado: 'Aprobado'},
]; */



export type typeEstado = {
  Fecha_Creacion: string | number | Date;
  Id_Estado: {
    Descripcion_Valor: string;
  };
}


