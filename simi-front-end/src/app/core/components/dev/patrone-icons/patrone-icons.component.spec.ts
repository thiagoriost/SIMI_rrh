import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneIconsComponent } from './patrone-icons.component';

describe('PatroneIconsComponent', () => {
  let component: PatroneIconsComponent;
  let fixture: ComponentFixture<PatroneIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
