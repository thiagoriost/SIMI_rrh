import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneResponsiveComponent } from './patrone-responsive.component';

describe('PatroneResponsiveComponent', () => {
  let component: PatroneResponsiveComponent;
  let fixture: ComponentFixture<PatroneResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
