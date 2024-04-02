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




  constructor(private router: Router){
  }


  goDashBoard() {

    this.router.navigate(['/home/dashboard']);

  }



}
