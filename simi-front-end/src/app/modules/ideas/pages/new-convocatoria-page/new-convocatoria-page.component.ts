import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-convocatoria-page',
  standalone: true,
  imports: [],
  templateUrl: './new-convocatoria-page.component.html',
  styleUrl: './new-convocatoria-page.component.scss'
})
export class NewConvocatoriaPageComponent {


  goIdePage() {
    this.router.navigate(['/home/idea']);
  }

  constructor(private router: Router){}


}
