import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NavBarSmallComponent } from '../../components/nav-bar-small/nav-bar-small.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreApp } from '../../../../core/store/storeApp';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, NavBarSmallComponent, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent implements OnInit{

  /**
   * Instacianción del store
   * para:
   *  activar el snackBar
   *  Traer data del usuario logueado
   */
  store = inject(StoreApp)

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

      this._snackBar.open(`Bienvenido ${this.store.usuario().first_name}`, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        direction:'ltr',
        data:{
          message:''
        }
      });

  }


}
