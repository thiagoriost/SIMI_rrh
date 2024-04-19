import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router} from '@angular/router';

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
   */
  async gologOut() {
    localStorage.clear() // limpia localstorage
    this.router.navigate(['/login']); //redirecciona a pagina login
  }
  goconfiguraciones() {
    this.router.navigate(['home/config']);//redirecciona a pagina config
  }
  goPerfil() {
    this.router.navigate(['home/perfil']);//redirecciona a pagina perfil
  }
  goDashBoard() {
    this.router.navigate(['home/dashboard']);//redirecciona a pagina dashboard
  }
}
