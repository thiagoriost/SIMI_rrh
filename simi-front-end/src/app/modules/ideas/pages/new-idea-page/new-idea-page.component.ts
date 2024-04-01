import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../../../../share/utils/complements';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import jsonDoc from './doc';



@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    NgxEditorModule],
  templateUrl: './new-idea-page.component.html',
  styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent implements OnInit, OnDestroy{


  /**
   * Propiedades para el campo editor menu
   */
  editor!: Editor;
  html = '';
  // editordoc = jsonDoc;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
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


  constructor(private router: Router){
  }


  goDashBoard(where: string) {
    console.log({where});

    // this.router.navigate(['/home/dashboard']);

  }



}
