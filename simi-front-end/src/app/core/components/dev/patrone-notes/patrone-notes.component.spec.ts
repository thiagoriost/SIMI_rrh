import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatroneNotesComponent } from './patrone-notes.component';

describe('PatroneNotesComponent', () => {
  let component: PatroneNotesComponent;
  let fixture: ComponentFixture<PatroneNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatroneNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatroneNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
