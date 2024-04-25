import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar, toDoc } from 'ngx-editor';
import { intf_camposFieldEditText } from '../../interface/interfaces';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field-input-edit-text',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxEditorModule, MatDividerModule],
  templateUrl: './field-input-edit-text.component.html',
  styleUrl: './field-input-edit-text.component.scss'
})
export class FieldInputEditTextComponent implements OnInit, OnDestroy{

  @Input() item!: { label: string; SubLabel: string; nameField: string};
  @Input() formulario: any;

  editor!: Editor;
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
  html: any;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    console.log(this.item?.label);

    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  TestingEditField() {
    debugger
    console.log(this.editor);
    console.log(this.html);
    // console.log(this.editor.view.docView.dom);
    const jsonDoc = toDoc(this.html);
    console.log(jsonDoc);



  }
}
