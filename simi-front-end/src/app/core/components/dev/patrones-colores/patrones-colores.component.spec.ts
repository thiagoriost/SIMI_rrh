import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronesColoresComponent } from './patrones-colores.component';

describe('PatronesColoresComponent', () => {
  let component: PatronesColoresComponent;
  let fixture: ComponentFixture<PatronesColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatronesColoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatronesColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
