import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavBarSmallComponent } from '../../components/nav-bar-small/nav-bar-small.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, NavBarSmallComponent, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {





}
