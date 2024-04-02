import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toast-msg',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './toast-msg.component.html',
  styleUrl: './toast-msg.component.scss'
})
export class ToastMsgComponent {

  @Input() mensaje: string = '';

}
