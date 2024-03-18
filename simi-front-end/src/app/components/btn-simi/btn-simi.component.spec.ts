import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSIMIComponent } from './btn-simi.component';

describe('BtnSIMIComponent', () => {
  let component: BtnSIMIComponent;
  let fixture: ComponentFixture<BtnSIMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSIMIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnSIMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
