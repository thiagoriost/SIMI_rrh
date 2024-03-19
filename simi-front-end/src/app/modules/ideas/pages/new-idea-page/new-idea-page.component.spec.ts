import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaPageComponent } from './new-idea-page.component';

describe('NewIdeaPageComponent', () => {
  let component: NewIdeaPageComponent;
  let fixture: ComponentFixture<NewIdeaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIdeaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewIdeaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
