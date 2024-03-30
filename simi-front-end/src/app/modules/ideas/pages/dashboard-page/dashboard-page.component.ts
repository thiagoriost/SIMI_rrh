import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TopBannerComponent } from '../../components/top-banner/top-banner.component';
import { ListIdeasComponent } from '../../components/list-ideas/list-ideas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreApp } from '../../../../core/store/storeApp';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [TopBannerComponent, ListIdeasComponent, MatGridListModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{

  store = inject(StoreApp)

  constructor(private router: Router){}

  ngOnInit(): void {
    console.log(this.store.login());
  }

  goRegistrarIdea() {
    this.router.navigate(['/home/idea']);
  }
  goConvocatoria() {
    this.router.navigate(['/home/convocatoria']);
  }

}
