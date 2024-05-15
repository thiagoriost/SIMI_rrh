import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuLateralBotonComponent } from '@app/core/components/layout/menu-lateral-boton/menu-lateral-boton.component';


/**
 * @description Plantilla de diseño por defecto - interfaz grafica
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [MatSidenavModule, MenuLateralBotonComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
