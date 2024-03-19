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
