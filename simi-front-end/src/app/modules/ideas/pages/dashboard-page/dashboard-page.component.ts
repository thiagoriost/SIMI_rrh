import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopBannerComponent } from '../../components/top-banner/top-banner.component';
import { ListIdeasComponent } from '../../components/list-ideas/list-ideas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BaseComponent } from '../../../../share/components/base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Componente encargado de renderizar los siguientes componetes:
 * app-top-banner y app-list-ideas
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
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

  /**
   * cada ves que el usuario ingresa a la pagina dashBoard, valida si la sesion esta activa
   */
  ngOnInit(): void {
    this.validateSesionTime(); // valida si la sesion esta activa
  }

}
