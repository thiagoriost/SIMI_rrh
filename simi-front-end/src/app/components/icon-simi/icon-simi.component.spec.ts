import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSIMIComponent } from './icon-simi.component';

describe('IconSIMIComponent', () => {
  let component: IconSIMIComponent;
  let fixture: ComponentFixture<IconSIMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSIMIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconSIMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
