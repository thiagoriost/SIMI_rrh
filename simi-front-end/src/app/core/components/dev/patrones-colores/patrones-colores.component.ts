import { Component } from '@angular/core';

// MATERIAL COMPONENTS
import {MatCardModule} from '@angular/material/card';

/**
 * @description Componente que muestra los colores configurados en la aplicación de Angular Material
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrones-colores',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './patrones-colores.component.html',
  styleUrl: './patrones-colores.component.scss'
})
export class PatronesColoresComponent {


  // Listado de colores disponibles
  colors: Array<{name:string,variable:string,classBg:string,classText:string,description:string}> = [
    {
      name: 'Primary',
      variable: '--primary-color',
      classBg: 'bg-primary',
      classText: 'text-primary',
      description: 'Principal'
    },
    {
      name: 'Secondary',
      variable: '--secondary-color',
      classBg: 'bg-secondary',
      classText: 'text-secondary',
      description: 'Secundario'
    },
    {
      name: 'Green Light',
      variable: '--green-light-color',
      classBg: 'bg-green-light',
      classText: 'text-green-light',
      description: 'Verde claro'
    },
    {
      name: 'Black',
      variable: '--black-color',
      classBg: 'bg-black',
      classText: 'text-black',
      description: 'Negro',
    },
    {
      name: 'White',
      variable: '--white-color',
      classBg: 'bg-white',
      classText: 'text-white',
      description: 'Blanco'
    },
    {
      name: 'Grey',
      variable: '--grey-color',
      classBg: 'bg-grey',
      classText: 'text-grey',
      description: 'Gris'
    },
    {
      name: 'Grey Light 1',
      variable: '--grey-light1-color',
      classBg: 'bg-grey-light1',
      classText: 'text-grey-light1',
      description: 'Gris claro 1'
    },
    {
      name: 'Grey Light 2',
      variable: '--grey-light2-color',
      classBg: 'bg-grey-light2',
      classText: 'text-grey-light2',
      description: 'Gris claro 2'
    },
    {
      name: 'Grey Light 3',
      variable: '--grey-light3-color',
      classBg: 'bg-grey-light3',
      classText: 'text-grey-light3',
      description: 'Gris claro 3'
    },
    {
      name: 'Green Status',
      variable: '--green-status-color',
      classBg: 'bg-green-status',
      classText: 'text-green-status',
      description: 'Verde estado'
    },
    {
      name: 'Orange Status',
      variable: '--orange-status-color',
      classBg: 'bg-orange-status',
      classText: 'text-orange-status',
      description: 'Naranja estado'
    },
    {
      name: 'Light Red Status',
      variable: '--lightred-status-color',
      classBg: 'bg-lightred-status',
      classText: 'text-lightred-status',
      description: 'Rojo claro estado'
    },
    {
      name: 'Blue Status',
      variable: '--blue-status-color',
      classBg: 'bg-blue-status',
      classText: 'text-blue-status',
      description: 'Azul estado'
    },
    {
      name: 'Red Status',
      variable: '--red-status-color',
      classBg: 'bg-red-status',
      classText: 'text-red-status',
      description: 'Rojo estado'
    },
  ]
}
