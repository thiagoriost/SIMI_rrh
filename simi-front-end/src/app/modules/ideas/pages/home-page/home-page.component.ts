import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


/**
 * Componente que se encarga de renderiza el menu para toda la app
 * y las rutas hijas
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent{



}
