import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {

  constructor(private router: Router) { }

  gologOut() {
    this.router.navigate(['/login']);
  }
  goconfiguraciones() {
    this.router.navigate(['home/config']);
  }
  goPerfil() {
    this.router.navigate(['home/perfil']);
  }
  goDashBoard() {
    this.router.navigate(['home/dashboard']);
}



}
