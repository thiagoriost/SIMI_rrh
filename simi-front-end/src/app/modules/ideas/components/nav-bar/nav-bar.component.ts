import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router} from '@angular/router';

/**
 * Componente que se encarga de renderizar las opciones del menu y realizar el cambio de ruta
 * para visualizar diferentes paginas
 */
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

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
