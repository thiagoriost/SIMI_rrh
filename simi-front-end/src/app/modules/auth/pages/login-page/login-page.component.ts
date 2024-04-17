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
import { DataUsuario, Usuario } from '../../../../core/services/db_interfaces/Usuario';

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

      /* this.store.updateLogin({
        "data": {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMTQ4NjM3OSwiZXhwIjoxNzExNDg3Mjc5LCJpc3MiOiJkaXJlY3R1cyJ9.ZUi1IaFht8JUkMY0YfCb4wd8u7BHLvxnZFon_JvgPFo",
          "expires": 900000
        }
      }) */

      /* setTimeout(() => {
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
      }, 3000); */


    if (this.validarCredenciales()/* false */) {
      this.store.changeSpinner(true);
      try {

        const respLogin = await directus.auth.login({ 'email': this.email, password: this.passw });

        if (respLogin.access_token) {

          console.log({respLogin});
          // this.authenticated = true;

          const user: DataUsuario = await directus.users.me.read() as DataUsuario;
          console.log({user});
          this.store.updateLogin(user)
          this.router.navigate(['/home']);
          this.store.changeSpinner(false);
        }else{
          this._snackBar.open(`Credenciales invalidas`, '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            direction:'ltr',
            data:{
              message:''
            }
          });
          this.store.changeSpinner(false);
        }
      } catch (error:any) {
        console.log({error});
        this._snackBar.open((error.parent.code == 'ERR_NETWORK' || error.parent.code == "ERR_BAD_RESPONSE")?`Fallo de conexión`:`Credenciales invalidas`, '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          direction:'ltr',
          data:{ message:'' }
        });
        this.store.changeSpinner(false);

      }



        /*

        await directus.auth
      .login({ 'email': this.email, password: this.passw })
      .then(async (resp) => {
        console.log({resp});
        this.authenticated = true;
        this.store.changeSpinner(false);

        const user: Usuario = await directus.users.me.read() as Usuario;
        this._snackBar.open(`Bienvenido ${user.data.first_name}`, '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          direction:'ltr',
          data:{
            message:'hihihih'
          }
        });
        // console.log({user});

        this.router.navigate(['/home']);

      })
      .catch((e) => {
        this._snackBar.open((e.parent.code == 'ERR_NETWORK' || e.parent.code == "ERR_BAD_RESPONSE")?`Fallo de conexión`:`Credenciales invalidas`, '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          direction:'ltr',
          data:{ message:'' }
        });


      });

        */



      if (this.authenticated) {


        // setTimeout(() => {
        //   this._snackBar.open(`Bienvenido ${user.data.first_name}`, '', {
        //     horizontalPosition: 'center',
        //     verticalPosition: 'top',
        //     duration: 5000,
        //     direction:'ltr',
        //     data:{
        //       message:'hihihih'
        //     }
        //   });

        // }, 1000);

      } else {

      }
    };
  }


  validarCredenciales() {

    // console.log({ user: this.email, passw: this.passw });
    // let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(this.email)) {
    let mensaje = null;
    if (this.email.length < 1) {
      // window.alert('Por favor, introduce un correo electrónico válido.');
      mensaje = 'El campo "Usuario" es obligatorio';
    }

    if (this.passw.length < 1) {
      mensaje = 'El campo "Contraseña" es obligatorio';
    }

    if (mensaje) {
      this._snackBar.open(mensaje, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        direction:'ltr',
        data:{
          message:''
        }
      });
      return false;
    }

    return true;
  }
}


