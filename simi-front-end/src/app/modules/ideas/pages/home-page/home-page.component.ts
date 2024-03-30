import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
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
