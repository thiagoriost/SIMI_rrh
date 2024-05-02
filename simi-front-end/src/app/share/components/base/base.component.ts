import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Comoponente que se empleara de forma transversal en varios componentes
 * para reutilizar los metodos de esta clase
 * @author Rigoberto Rios - rigoriosh@gmail.com
 */
@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  protected router: Router; // instacia del router
  protected _snackBar: MatSnackBar; // instancia del snackBar

  constructor(router: Router, _snackBar: MatSnackBar ){
    this.router = router
    this._snackBar = _snackBar
  }

  /**
   * funcion que valida si se encuentra en sesion
   * @returns boolean si esta en sesion o no
   */
  validateSesionTime(){
    const auth_token = localStorage.getItem("auth_token");
    let isSigIn = true;
    if (!auth_token) {
      this.router.navigate(['/login']);
      isSigIn = false;
      this.rederMensajeToast("Sesion expirada")
    }
    return isSigIn
  }

  /**
   * Funcion que e encarga de recibir un string como mensaje para ser renderizado
   * por el _snackBar
   * @param mensaje string a mostrat mensaje
   */
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
