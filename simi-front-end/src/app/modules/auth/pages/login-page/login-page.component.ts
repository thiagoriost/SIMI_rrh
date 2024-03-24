import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { directus } from '../../../../core/services/directus';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  email = 'rigoberto.rios@igac.gov.co';
  passw = '123456';
  authenticated = false;

  constructor(private router: Router) { }

  async goHome() {

    console.log("goHome");
        // this.router.navigate(['/home']);

    if (this.validarCredenciales()) {
      await directus.auth
        .login({ 'email': this.email, password: this.passw })
        .then((resp) => {
          console.log({resp});
          this.authenticated = true;
          // sessionStorage.setItem('usuario', JSON.stringify(resp));
        })
        .catch((e) => {
          if (e.parent.code == 'ERR_NETWORK') {
            window.alert('Fallo de conexión');
          } else {
            window.alert('Credenciales invalidas');
          }
        });
      if (this.authenticated) {
        this.router.navigate(['/home']);
      } else {
        console.log("Credencailes erroneas");
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


