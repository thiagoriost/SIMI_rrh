import { Component } from '@angular/core';
// MATERIAL COMPONENTS
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @description Componente con indicaciones para la construcción de una reticula para organizar elementos de una interfaz grafica
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrone-grid',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './patrone-grid.component.html',
  styleUrl: './patrone-grid.component.scss'
})
export class PatroneGridComponent {

}
