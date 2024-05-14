import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { directus } from '../../../../core/services/directus';
import { StoreApp } from '../../../../core/store/storeApp';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataUsuario } from '../../../../core/services/db_interfaces/Usuario';
import { BaseComponent } from '../../../../share/components/base/base.component';

/**
 * Componente encargado de renderizar la pagina de login y ejecutar
 * la lógica de validaciones correspondiente
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent extends BaseComponent{

  store = inject(StoreApp)

  public formulario: FormGroup = this.formBuilder.group({
    email:[ '', [Validators.required, Validators.email],[]],
    passw:[ '', [Validators.required],[]],
  })

  constructor(router: Router, _snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    super(router, _snackBar);
    // alert("Revisar el comportamiento de grupos de investigación en modo devolucion")
  }

  /**
   * Metodo que se encarga de realizar las validaciones del formulario login
   * y si todo ok, envia credenciales para login, si ok pasa a la ruta /home
   */
  async goHome() {
    if (this.formulario.status == "VALID") {
      this.store.changeSpinner(true);
      try {
        const {email, passw} = this.formulario.value
        const respLogin = await directus.auth.login({ 'email': email, password: passw });
        if (respLogin.access_token) {

          const user: DataUsuario = await directus.users.me.read() as DataUsuario;
          this.store.updateLogin(user)
          this.router.navigate(['/home']);
          this.store.changeSpinner(false);
          this.rederMensajeToast(`Bienvenido ${user.first_name} ${user.last_name}`);
        }else{
          this.rederMensajeToast(`Credenciales invalidas`);
          this.store.changeSpinner(false);
        }
      } catch (error:any) {
        this.rederMensajeToast((error.parent.code == 'ERR_NETWORK' || error.parent.code == "ERR_BAD_RESPONSE")?`Fallo de conexión`:`Credenciales invalidas`);
        this.store.changeSpinner(false);

      }

    }
  }


  /**
   * Esta funcion valida si un campo incumple algun requerimiento, si es asi retorna el menaje
   * que se quiere mostrar al usuario
   * @param campo campo al que se quiere validar
   * @returns texto que se quiere renderizar segun requerimiento que incumple
   */
  getErrorCampo(campo: string): string {

    let respuesta = "";
    const errores = this.formulario.controls[campo].errors || {}
    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'required':
          respuesta = 'Este campo es requerido'
        break;

        case 'minlength':
          respuesta = `Mínimo ${errores['minlength'].requiredLength} caracteres.`
        break;

        case 'maxlength':
          respuesta = `Se ha excedido de la longitud maxima requerida.`
        break;

        case 'email':
          respuesta = `Ingrese un correo electrónico valido.`
        break;
        default:
          break;
      }
    }
    return respuesta
  }
}


