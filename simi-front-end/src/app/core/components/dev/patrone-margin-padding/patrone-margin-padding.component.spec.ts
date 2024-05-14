import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneMarginPaddingComponent } from './patrone-margin-padding.component';

describe('PatroneMarginPaddingComponent', () => {
  let component: PatroneMarginPaddingComponent;
  let fixture: ComponentFixture<PatroneMarginPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneMarginPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneMarginPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
