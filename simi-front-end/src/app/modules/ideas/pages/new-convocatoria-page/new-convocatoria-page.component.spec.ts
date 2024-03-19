import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConvocatoriaPageComponent } from './new-convocatoria-page.component';

describe('NewConvocatoriaPageComponent', () => {
  let component: NewConvocatoriaPageComponent;
  let fixture: ComponentFixture<NewConvocatoriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewConvocatoriaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewConvocatoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
