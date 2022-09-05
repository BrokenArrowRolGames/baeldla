import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Licencia01Component } from './licencia01.component';

describe('Licencia01Component', () => {
  let component: Licencia01Component;
  let fixture: ComponentFixture<Licencia01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Licencia01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Licencia01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
