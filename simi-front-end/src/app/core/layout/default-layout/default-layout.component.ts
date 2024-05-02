import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarSmallComponent } from '@app/modules/ideas/components/nav-bar-small/nav-bar-small.component';
import { NavBarComponent } from '@app/modules/ideas/components/nav-bar/nav-bar.component';


/**
 * @description Plantilla de diseño por defecto - interfaz grafica
 * @author Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [MatSidenavModule, NavBarSmallComponent, NavBarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
