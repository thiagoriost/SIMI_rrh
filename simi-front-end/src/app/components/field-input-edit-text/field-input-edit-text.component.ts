import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { intf_camposFieldEditText } from '../../share/interface/interfaces';

@Component({
  selector: 'app-field-input-edit-text',
  standalone: true,
  imports: [NgxEditorModule],
  templateUrl: './field-input-edit-text.component.html',
  styleUrl: './field-input-edit-text.component.scss'
})
export class FieldInputEditTextComponent implements OnInit, OnDestroy{

  @Input() item!: { label: string; SubLabel: string; };

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

  ngOnInit(): void {
    console.log(this.item?.label);

    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}
