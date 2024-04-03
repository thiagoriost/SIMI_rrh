import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputEditTextComponent } from './field-input-edit-text.component';

describe('FieldInputEditTextComponent', () => {
  let component: FieldInputEditTextComponent;
  let fixture: ComponentFixture<FieldInputEditTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldInputEditTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldInputEditTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
