import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopBannerComponent } from '../../components/top-banner/top-banner.component';
import { ListIdeasComponent } from '../../components/list-ideas/list-ideas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BaseComponent } from '../../../../share/components/base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [TopBannerComponent, ListIdeasComponent, MatGridListModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent extends BaseComponent implements OnInit{

  constructor(router: Router, _snackBar: MatSnackBar){
    super(router, _snackBar);
  }

  ngOnInit(): void {
    this.validateSesionTime(); // valida si la sesion esta activa
  }

}
