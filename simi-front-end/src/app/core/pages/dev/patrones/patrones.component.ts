import { Component } from '@angular/core';

// MATERIAL COMPONENTS
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
// == COMPONENTS
import { PatroneGridComponent } from '@app/core/components/dev/patrone-grid/patrone-grid.component';
import { PatroneTypographyComponent } from '@app/core/components/dev/patrone-typography/patrone-typography.component';
import { PatronesColoresComponent } from '@app/core/components/dev/patrones-colores/patrones-colores.component';
import { PatroneResponsiveComponent } from '@app/core/components/dev/patrone-responsive/patrone-responsive.component';
import { PatroneMarginPaddingComponent } from '@app/core/components/dev/patrone-margin-padding/patrone-margin-padding.component';
import { PatroneNotesComponent } from '@app/core/components/dev/patrone-notes/patrone-notes.component';
import { PatroneIconsComponent } from '@app/core/components/dev/patrone-icons/patrone-icons.component';

/**
 * @description Pagina que contiene los patrones de diseño a utilizar en la aplicación
 * @author Juan Carlos Valderrama Gonzalez
 */
@Component({
  selector: 'app-patrones',
  standalone: true,
  imports: [ 
    MatGridListModule,
    MatDividerModule,
    PatroneGridComponent,
    PatroneTypographyComponent,
    PatronesColoresComponent,
    PatroneResponsiveComponent,
    PatroneMarginPaddingComponent,
    PatroneNotesComponent,
    PatroneIconsComponent
  ],
  templateUrl: './patrones.component.html',
  styleUrl: './patrones.component.scss'
})
export class PatronesComponent {

}
