import { Component, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  protected router: Router;
  protected _snackBar: MatSnackBar;
  constructor(router: Router, _snackBar: MatSnackBar ){
    this.router = router
    this._snackBar = _snackBar
  }

  validateSesionTime(){
    const auth_token = localStorage.getItem("auth_token");
    // console.log({auth_token});
    let isSigIn = true;
    if (!auth_token) {
      this.router.navigate(['/login']);
      isSigIn = false;
      this.rederMensajeToast("Sesion expirada")
    }
    return isSigIn
  }

  rederMensajeToast(mensaje: string){
    this._snackBar.open(mensaje, '', {
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
