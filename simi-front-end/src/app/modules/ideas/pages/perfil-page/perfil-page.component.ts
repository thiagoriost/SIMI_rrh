import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [],
  templateUrl: './perfil-page.component.html',
  styleUrl: './perfil-page.component.scss'
})
export class PerfilPageComponent {


  htmlString: string = `<font face="Arial">
    <p>
     Hi <b> Mundo</b>
    </p>
    eee
    </font>`;

}
