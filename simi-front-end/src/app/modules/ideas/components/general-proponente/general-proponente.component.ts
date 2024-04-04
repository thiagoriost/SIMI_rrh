import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MyErrorStateMatcher } from '../../../../share/utils/complements';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-general-proponente',
  standalone: true,
  imports: [MatSelectModule, MatInputModule,  ReactiveFormsModule ],
  templateUrl: './general-proponente.component.html',
  styleUrl: './general-proponente.component.scss'
})
export class GeneralProponenteComponent {

  /**
   * Propiedades para la configuracipon del campo email
   */
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // matcher = new MyErrorStateMatcher();

  /**
   * Parametros de configuración para el campo select
   */
  selected: any = 'option2';
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  @Input() formulario: any


  constructor(private fb: FormBuilder){}
  /**
   * Formulario reactivo
   */
  // public formularioProponente: FormGroup = new FormGroup({
  //   // campoTest: new FormControl('valorInicial', [validacionesSincronas],[validacionesAsincronas])
  //   entida: new FormControl('',[],[]),
  //   fecha: new FormControl('',[],[]),
  //   nombreProponente: new FormControl('',[],[]),
  //   email: new FormControl('',[],[]),
  //   cedula: new FormControl('',[],[]),

  // })






}
