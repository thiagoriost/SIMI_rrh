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

  gologOut() {
    localStorage.clear()
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
