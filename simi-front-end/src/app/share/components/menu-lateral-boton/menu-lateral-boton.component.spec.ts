import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralBotonComponent } from './menu-lateral-boton.component';

describe('MenuLateralBotonComponent', () => {
  let component: MenuLateralBotonComponent;
  let fixture: ComponentFixture<MenuLateralBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralBotonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
