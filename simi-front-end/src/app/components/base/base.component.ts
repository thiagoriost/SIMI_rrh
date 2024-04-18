import { Component } from '@angular/core';
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
  constructor(router: Router){
    this.router = router
  }

  validateSesionTime(){
    const auth_token = localStorage.getItem("auth_token");
    console.log({auth_token});
    if (!auth_token) {
      this.router.navigate(['/login']);
    }
  }

  redermensajeToast(mensaje: string){

  }

}
