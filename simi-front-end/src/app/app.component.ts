import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./modules/auth/pages/login-page/login-page.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreApp } from './core/store/storeApp';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginPageComponent, MatProgressSpinnerModule]
})
export class AppComponent {

  /**
   * Instanciación del store
   * para:
   *  activar el spinner del loading
   */
  store = inject(StoreApp)

}
