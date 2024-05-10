import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProponenteComponent } from './general-proponente.component';

describe('GeneralProponenteComponent', () => {
  let component: GeneralProponenteComponent;
  let fixture: ComponentFixture<GeneralProponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralProponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
