import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { directus } from '../../../../core/services/directus';
import { StoreApp } from '../../../../core/store/storeApp';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  store = inject(StoreApp)
  email = 'rigoberto.rios@igac.gov.co';
  passw = '123456';
  authenticated = false;

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  async goHome() {

      console.log("goHome");
      this.store.changeSpinner(true);

      /* this.store.updateLogin({
        "data": {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMTQ4NjM3OSwiZXhwIjoxNzExNDg3Mjc5LCJpc3MiOiJkaXJlY3R1cyJ9.ZUi1IaFht8JUkMY0YfCb4wd8u7BHLvxnZFon_JvgPFo",
          "expires": 900000
        }
      }) */

      setTimeout(() => {
        this._snackBar.open(`Welcome ${this.email}`, '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          direction:'ltr',
          data:{
            message:'hihihih'
          }
        });
        console.log("spinner off");
        this.store.changeSpinner(false);
        localStorage.setItem("auth_token", JSON.stringify({
          "data": {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMTQ4NjM3OSwiZXhwIjoxNzExNDg3Mjc5LCJpc3MiOiJkaXJlY3R1cyJ9.ZUi1IaFht8JUkMY0YfCb4wd8u7BHLvxnZFon_JvgPFo",
            "expires": 900000
          }
        }));
        this.router.navigate(['/home']);
      }, 3000);


    if (/* this.validarCredenciales() */false) {
      await directus.auth
        .login({ 'email': this.email, password: this.passw })
        .then((resp) => {
          console.log({resp});
          this.authenticated = true;
          alert(`Bienvenid@ ${this.email}`);

        this.router.navigate(['/home']);

        })
        .catch((e) => {
          if (e.parent.code == 'ERR_NETWORK' || e.parent.code == "ERR_BAD_RESPONSE") {
            this._snackBar.open(`Fallo de conexión`, '', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
              duration: 5000,
              direction:'ltr',
              data:{
                message:'hihihih'
              }
            });
          } else {
            alert(`Credenciales invalidas`)
          }
        });
      if (this.authenticated) {
        this.router.navigate(['/home']);
      } else {
        alert("Credencailes erroneas");
      }
    };
  }


  validarCredenciales() {

    // console.log({ user: this.email, passw: this.passw });
    // let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(this.email)) {
    if (this.email.length < 1) {
      // window.alert('Por favor, introduce un correo electrónico válido.');
      window.alert('El campo "Usuario" es obligatorio');
      return false;
    }

    if (this.passw.length < 1) {
      window.alert('El campo "Contraseña" es obligatorio');
      return false;
    }

    return true;
  }
}


