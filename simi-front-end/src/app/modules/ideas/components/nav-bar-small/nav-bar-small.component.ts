import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-small',
  standalone: true,
  imports: [NavBarComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './nav-bar-small.component.html',
  styleUrl: './nav-bar-small.component.scss'
})
export class NavBarSmallComponent {

  constructor(private router: Router) { }

  /**
   * Metodo para desloguearse
   * limpia el local storage y redirecciona a la pagina login
   */
  async gologOut() {
    localStorage.clear() // limpia localstorage
    this.router.navigate(['/login']); //redirecciona a pagina login
  }

  /**
   * redirecciona a la pagina config-page
   */
  goconfiguraciones() {
    this.router.navigate(['home/config']);//redirecciona a pagina config
  }
  /**
   * redirecciona a la pagina perfil-page
   */
  goPerfil() {
    this.router.navigate(['home/perfil']);//redirecciona a pagina perfil
  }
  /**
   * redirecciona a la pagina dashboard-page
   */
  goDashBoard() {
    this.router.navigate(['home/dashboard']);//redirecciona a pagina dashboard
  }
}
