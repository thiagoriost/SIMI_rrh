import { Component } from '@angular/core';

// MATERIAL COMPONENTS
import {MatCardModule} from '@angular/material/card';

/**
 * @description Componente para explicar el uso de margenes y padding con clases auxiliares
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrone-margin-padding',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './patrone-margin-padding.component.html',
  styleUrl: './patrone-margin-padding.component.scss'
})
export class PatroneMarginPaddingComponent {

}
