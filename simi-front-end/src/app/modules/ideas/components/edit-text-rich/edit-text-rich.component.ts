import { Component, Input } from '@angular/core';
import { intf_camposFieldEditText } from '../../../../share/interface/interfaces';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-text-rich',
  standalone: true,
  imports: [MatDividerModule, MatFormFieldModule],
  templateUrl: './edit-text-rich.component.html',
  styleUrl: './edit-text-rich.component.scss'
})
export class EditTextRichComponent {
  @Input() formulario: any;
  @Input() modoVer: boolean = false;
  @Input() camposFieldEditText: intf_camposFieldEditText[] = []


}
