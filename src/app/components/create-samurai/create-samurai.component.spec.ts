import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSamuraiComponent } from './create-samurai.component';

describe('CreateSamuraiComponent', () => {
  let component: CreateSamuraiComponent;
  let fixture: ComponentFixture<CreateSamuraiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSamuraiComponent]
    });
    fixture = TestBed.createComponent(CreateSamuraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
