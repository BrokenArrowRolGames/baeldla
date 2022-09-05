import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Licencia02Component } from './licencia02.component';

describe('Licencia02Component', () => {
  let component: Licencia02Component;
  let fixture: ComponentFixture<Licencia02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Licencia02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Licencia02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
