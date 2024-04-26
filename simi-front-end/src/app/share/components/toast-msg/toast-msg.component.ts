import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * Componente que renderiza el mensaje en la parte superior del formulario idea investigación
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-toast-msg',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './toast-msg.component.html',
  styleUrl: './toast-msg.component.scss'
})
export class ToastMsgComponent {

  @Input() mensaje: string = ''; // mensaje de a renderizar

}
