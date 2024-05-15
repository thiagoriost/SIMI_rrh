import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableWebComponent } from './mat-table-web.component';

describe('MatTableWebComponent', () => {
  let component: MatTableWebComponent;
  let fixture: ComponentFixture<MatTableWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatTableWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
