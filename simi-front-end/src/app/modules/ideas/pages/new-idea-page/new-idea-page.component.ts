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
import { ToastMsgComponent } from '../../../../components/toast-msg/toast-msg.component';



@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    NgxEditorModule, FieldInputEditTextComponent, ToastMsgComponent],
  templateUrl: './new-idea-page.component.html',
  styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent /* implements OnInit, OnDestroy */{



  textToastMensaje: string = `Velit culpa pariatur fugiat magna cupidatat id irure in deserunt laborum. Elit enim ipsum
  aute exercitation. Sit et ex aliquip do ex veniam nisi veniam ullamco aliqua. In minim voluptate pariatur elit non
  non consectetur incididunt occaecat voluptate. Non aute nulla cillum est ex ut aliqua occaecat in qui aliquip anim
  minim reprehenderit. Anim adipisicing fugiat nostrud irure labore et reprehenderit ut amet dolore veniam.`;


  constructor(private router: Router){
  }


  goDashBoard() {

    this.router.navigate(['/home/dashboard']);

  }



}
