import { Component } from '@angular/core';
import { NavBarSmallComponent } from '@app/modules/ideas/components/nav-bar-small/nav-bar-small.component';
import { NavBarComponent } from '@app/modules/ideas/components/nav-bar/nav-bar.component';

/**
 * Componente encargado de renderizar el menu lateral y cambiar a boton de modo movil
 */
@Component({
  selector: 'app-menu-lateral-boton',
  standalone: true,
  imports: [NavBarSmallComponent, NavBarComponent],
  templateUrl: './menu-lateral-boton.component.html',
  styleUrl: './menu-lateral-boton.component.scss'
})
export class MenuLateralBotonComponent {

}
