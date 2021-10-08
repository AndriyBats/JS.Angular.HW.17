import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework17Component } from './homework17.component';

describe('Homework17Component', () => {
  let component: Homework17Component;
  let fixture: ComponentFixture<Homework17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
