import { Component } from '@angular/core';

// MATERIAL COMPONENTS
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

/**
 * @description Componente con información de la tipografia usada en el proyecto
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrone-typography',
  standalone: true,
  imports: [MatDividerModule,MatCardModule],
  templateUrl: './patrone-typography.component.html',
  styleUrl: './patrone-typography.component.scss'
})
export class PatroneTypographyComponent {

  // Listado de clases de tipografia
  typoClass: Array<Array<string>> = [
    ['Heading 1', 'mat-headline-1'],
    ['Heading 2', 'mat-headline-2'],
    ['Heading 3', 'mat-headline-3'],
    ['Heading 4', 'mat-headline-4'],
    ['Heading 5', 'mat-headline-5'],
    ['Heading 6', 'mat-headline-6'],
    ['Subtitle 1', 'mat-subtitle-1'],
    ['Subtitle 2', 'mat-subtitle-2'],
    ['Body 1', 'mat-body-1'],
    ['Body 2', 'mat-body-2'],
    ['Caption', 'mat-caption'],
  ];
}
