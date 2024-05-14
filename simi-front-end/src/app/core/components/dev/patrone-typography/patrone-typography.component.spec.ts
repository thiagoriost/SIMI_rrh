import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneTypographyComponent } from './patrone-typography.component';

describe('PatroneTypographyComponent', () => {
  let component: PatroneTypographyComponent;
  let fixture: ComponentFixture<PatroneTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneTypographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
