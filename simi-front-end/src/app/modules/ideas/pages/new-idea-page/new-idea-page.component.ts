import { Component/* , OnDestroy, OnInit */} from '@angular/core';
import { FormControl, /* FormGroup, */ FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../../../../share/utils/complements';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { /* Editor,  */NgxEditorModule/* , Toolbar */ } from 'ngx-editor';
// import jsonDoc from './doc';
import { FieldInputEditTextComponent } from '../../../../components/field-input-edit-text/field-input-edit-text.component';
import { intf_camposFieldEditText } from '../../../../share/interface/interfaces';



@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    NgxEditorModule, FieldInputEditTextComponent],
  templateUrl: './new-idea-page.component.html',
  styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent /* implements OnInit, OnDestroy */{


  /**
   * Propiedades para el campo editor menu
   */
  // html = '';
  // editordoc = jsonDoc;
  // editor!: Editor;
  // toolbar: Toolbar = [
  //   ['bold', 'italic'],
  //   ['underline', 'strike'],
  //   ['code', 'blockquote'],
  //   ['ordered_list', 'bullet_list'],
  //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  //   ['link', 'image'],
  //   ['text_color', 'background_color'],
  //   ['align_left', 'align_center', 'align_right', 'align_justify'],
  // ];
  /* ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  } */
  // form = new FormGroup({
  //   editorContent: new FormControl(
  //     { value: jsonDoc, disabled: false },
  //     // Validators.required()
  //   ),
  // });

  /**
   * Propiedades para la configuracipon del campo email
   */
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

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


  camposFieldEditText: intf_camposFieldEditText[] = [
    {
      label: 'Pregunta o problema que origina la ídea',
      SubLabel:'(250 palabras) Identificar de manera sistemática, organizada y objetiva un problema o necesidad y el contexto de su concurrencia con el proposito de responder a una pregunta que aumente el conocimiento y la información sobre algo desconocido, mejorar algun proceso o construir una herramienta tecnológica. Responde a la pregunta ¿Que se quiere saber sobre el problema a analizar? se debe indagar que esta ocurriendo, realizar un diagnostico de lo que esta pasando; en caso de querer comparar, tambien se debe indagar cómo se presenta el problema en varios contextos. Se deben definir si se desea saber las causas del problema, predecir que sucederá en el futuro, o resolverlo.'
    },
    {
      label: 'Antecedentes',
      SubLabel:'(500 palabras) Estado de arte de la información, resumen de la revisión del conocimiento existente.'
    },
    {
      label: 'Justificación',
      SubLabel:`(350 palabras) Exposición de los motivos que merece la investigación, el desarrollo o la innovación,
      los beneficios que brindará y quienes seran los beneficiarios. La justificación puede ser de caracter teórico, práctico o metodológico.
       a) justificación práctica: Cuando su desarrollo ayuda a resolver un problema `
    },
    {
      label: 'Descripción de la ídea',
      SubLabel:'dfsdfsfs'
    },
    {
      label: 'Biblio',
      SubLabel:' ty'
    }
  ]


  constructor(private router: Router){
  }


  goDashBoard(where: string) {
    console.log({where});

    // this.router.navigate(['/home/dashboard']);

  }



}
