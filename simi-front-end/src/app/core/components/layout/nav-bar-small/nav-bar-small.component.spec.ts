import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSmallComponent } from './nav-bar-small.component';

describe('NavBarSmallComponent', () => {
  let component: NavBarSmallComponent;
  let fixture: ComponentFixture<NavBarSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
