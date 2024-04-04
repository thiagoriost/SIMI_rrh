import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxEditorModule } from 'ngx-editor';
import { FieldInputEditTextComponent } from '../../../../components/field-input-edit-text/field-input-edit-text.component';
import { intf_camposFieldEditText } from '../../../../share/interface/interfaces';
import { ToastMsgComponent } from '../../../../components/toast-msg/toast-msg.component';
import { GeneralProponenteComponent } from '../../components/general-proponente/general-proponente.component';



@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    NgxEditorModule, FieldInputEditTextComponent, ToastMsgComponent, GeneralProponenteComponent],
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

  public formulario: FormGroup = this.fb.group({
    entida: ['',[],[]],
    fecha: ['',[],[]],
    nombreProponente: ['',[],[]],
    email: ['',[Validators.required, Validators.email],[]],
    cedula: [,[],[]],
    celular: [,[],[]],
  })




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
      los beneficios que brindará y quienes seran los beneficiados. La justificación puede ser de caracter teórico, práctico o metodológico.
       a) justificación práctica: Cuando su desarrollo ayuda a resolver un problema o por lo menos, propone estrategias que de aplicarlas contribuirían a resolverlo. b) justificación teórica:
       Se desarrolla cuando el propósito de estudio es generar reflexión y debate académico sobre el conocimiento existente, confrontar una teoría, contrastar resultados o hacer epistemología
       del conocimiento. c) justificación metodológica: surge cuando la investigación a desarrollar propone un nuevo método o estrategia para generar conocimiento valido y confiable.`
    },
    {
      label: 'Descripción de la ídea',
      SubLabel:'En este apartado se debe explicar con claridad de que se tratará el proyecto de investigación que se desea hacer. Debe estar redactado en forma clara y coherente para que no haya lugar a dudas'
    },
    {
      label: 'Bibliografía empleada',
      SubLabel: 'Relacione unicamente la referencia en el texto, ya sea en forma de pie de página o como ítem independiente. Utilice normas APA, referidas a este aspecto.'
    }
  ]

  textToastMensaje: string = `Velit culpa pariatur fugiat magna cupidatat id irure in deserunt laborum. Elit enim ipsum
  aute exercitation. Sit et ex aliquip do ex veniam nisi veniam ullamco aliqua. In minim voluptate pariatur elit non
  non consectetur incididunt occaecat voluptate. Non aute nulla cillum est ex ut aliqua occaecat in qui aliquip anim
  minim reprehenderit. Anim adipisicing fugiat nostrud irure labore et reprehenderit ut amet dolore veniam.`;


  constructor(private router: Router, private fb: FormBuilder){
  }


  goDashBoard() {

    this.router.navigate(['/home/dashboard']);

  }
  onSave():void{
    console.log(this.formulario);

  }



}
