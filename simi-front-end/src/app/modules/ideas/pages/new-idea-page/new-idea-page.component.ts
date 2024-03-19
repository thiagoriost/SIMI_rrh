import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [],
  templateUrl: './new-idea-page.component.html',
  styleUrl: './new-idea-page.component.scss'
})
export class NewIdeaPageComponent {

  constructor(private router: Router){}


  goDashBoard(where: string) {
    console.log({where});
    this.router.navigate(['/home/dashboard']);

  }



}
