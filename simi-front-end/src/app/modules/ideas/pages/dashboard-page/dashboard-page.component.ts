import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  constructor(private router: Router){}

  goRegistrarIdea() {
    this.router.navigate(['/home/idea']);
  }
  goConvocatoria() {
    this.router.navigate(['/home/convocatoria']);
  }

}
