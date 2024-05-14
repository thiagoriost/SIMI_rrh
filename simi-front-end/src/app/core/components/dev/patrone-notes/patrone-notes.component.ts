import { Component } from '@angular/core';

// MATERIAL COMPONENTS
import {MatCardModule} from '@angular/material/card';
/**
 * @description Componente que contiene las notas de los patrones de diseño a utilizar en la aplicación
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrone-notes',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './patrone-notes.component.html',
  styleUrl: './patrone-notes.component.scss'
})
export class PatroneNotesComponent {

}
