import { Component } from '@angular/core';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';

/**
 * @description Componente que muestra los patrones de diseño responsive de Angular Material
 * @autor Juan Carlos Valderrama Gonzalez
 */
@Component({
  selector: 'app-patrone-responsive',
  standalone: true,
  imports: [],
  templateUrl: './patrone-responsive.component.html',
  styleUrl: './patrone-responsive.component.scss'
})
export class PatroneResponsiveComponent {

  // Mensaje para mostrar al cambiar la resolucion de la vista
  message: string = 'Cambiar resolucion para accionar';

  
  constructor(private breakpointObserver: BreakpointObserver) {
    // Suscribirse a observador de cambios de resolucion y cambiar el mensaje segun la nueva resolucion
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.message = 'Handset - ' + new Date().getMilliseconds();
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.message = 'Small - ' +  new Date().getMilliseconds();
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.message = 'Medium - ' +  new Date().getMilliseconds();
        }
        if (result.breakpoints[Breakpoints.Large]) {
          // Imprimir nombre breakpoint mas fecha y hora del cambio
          this.message = 'Large - ' +  new Date().getMilliseconds();
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.message = 'XLarge - ' +  new Date().getMilliseconds();
        }
      }
    });
  
  }
}
