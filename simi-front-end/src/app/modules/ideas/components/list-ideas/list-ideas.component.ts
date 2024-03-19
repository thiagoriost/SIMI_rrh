import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ideas',
  standalone: true,
  imports: [],
  templateUrl: './list-ideas.component.html',
  styleUrl: './list-ideas.component.scss'
})
export class ListIdeasComponent {

  constructor(private router: Router){}

  goIdePage() {
    this.router.navigate(['/home/idea']);
  }

}
