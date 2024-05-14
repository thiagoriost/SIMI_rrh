import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneGridComponent } from './patrone-grid.component';

describe('PatroneGridComponent', () => {
  let component: PatroneGridComponent;
  let fixture: ComponentFixture<PatroneGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
