import { Component, Input } from '@angular/core';
import { intf_camposFieldEditText } from '../../../../share/interface/interfaces';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';

/**
 * componente para renderizar los campos de tipo texto enrriquezido
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-edit-text-rich',
  standalone: true,
  imports: [MatDividerModule, MatFormFieldModule],
  templateUrl: './edit-text-rich.component.html',
  styleUrl: './edit-text-rich.component.scss'
})
export class EditTextRichComponent {
  @Input({required:true}) formulario: FormGroup | undefined
  @Input() modoVer: boolean = false;
  @Input() camposFieldEditText: intf_camposFieldEditText[] = []


}
