import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextRichComponent } from './edit-text-rich.component';

describe('EditTextRichComponent', () => {
  let component: EditTextRichComponent;
  let fixture: ComponentFixture<EditTextRichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTextRichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTextRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
