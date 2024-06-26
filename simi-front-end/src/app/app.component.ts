import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { StoreApp } from './core/store/storeApp';

// SERVICES
import { directus } from '@app/core/services/directus';

// COMPONENTS 
import { LoginPageComponent } from "@app/modules/auth/pages/login-page/login-page.component";
import { DefaultLayoutComponent } from '@app/core/layout/default-layout/default-layout.component';
// == MATERIAL COMPONENTS ==
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginPageComponent, MatProgressSpinnerModule, DefaultLayoutComponent]
})
export class AppComponent implements OnInit {

  /**
   * Instanciación del store
   * para:
   *  activar el spinner del loading
   */
  store = inject(StoreApp)

  isAuthenticated:boolean = false

  constructor(private router: Router, private matIconRegistry:MatIconRegistry ) {
    // Registrar iconos personalizados
    this.matIconRegistry.registerFontClassAlias('simi', 'icon-simi');
  }

  /**
   * @description Metodo que se ejecuta al iniciar la aplicación y valida si el usuario esta logeado
   */
  async ngOnInit() {
    // Obtener token para identificar si el usuario esta logeado
    const token = await directus.auth.token;
    if (token) { // Token existe - redireccionar a pagina principal
      this.isAuthenticated = true  
      
    }else{  // No existe token - redireccionar a pagina de autenticacion
      this.router.navigate(['/login']);
    }
  }
}
