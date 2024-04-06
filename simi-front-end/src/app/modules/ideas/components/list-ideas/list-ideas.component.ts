import { Component, AfterViewInit, ViewChild, OnInit, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { directus } from '../../../../core/services/directus';
import { Ideas_Investigacion, Response_Ideas_Investigacion } from '../../../../share/interface/interfaces';
import { StoreApp } from '../../../../core/store/storeApp';

@Component({
  selector: 'app-list-ideas',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './list-ideas.component.html',
  styleUrl: './list-ideas.component.scss'
})
export class ListIdeasComponent implements OnInit {

  store = inject(StoreApp)

  displayedColumns: string[] = ['codigo', 'tituloIdea', 'tipoProyecto', 'anio', 'fechaHoraRegistro', 'estado', 'actions'];

  dataSource: MatTableDataSource<Ideas_Investigacion> = new MatTableDataSource<Ideas_Investigacion>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // usuario: any;

  constructor(private router: Router){}

  ngOnInit(): void {
    console.log("ngOnInit ListIdeasComponent");

    if (localStorage.getItem("auth_token")) {
      this.getIdeas_Investigacion()
    } else {
      alert(`Sesión expirada`)
      this.router.navigate([`/login`]);

    }

  }
  async getIdeas_Investigacion() {
    let publicData: Response_Ideas_Investigacion = await directus.items('Ideas_Investigacion').readByQuery({ sort: ['Codigo_Idea'] })  as Response_Ideas_Investigacion;
    console.log(publicData.data);
    /// guardar respuesta en dataStorage

    this.dataSource.data = publicData.data
    // this.fixDataToRender(publicData.data)
  }

  fixDataToRender(publicData: Ideas_Investigacion) {

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Asigna el paginador a la fuente de datos
  }

  goRegistrarIdea() {
    console.log("goRegistrarIdea");
    this.router.navigate(["/home/idea"])
  }


  goIdePage() {
    this.router.navigate(['/home/idea']);
  }

}

export interface PeriodicElement {
  tituloIdea: string;
  codigo: number;
  tipoProyecto: number;
  anio: string;
  fechaHoraRegistro: string;
  estado: string;
}

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

