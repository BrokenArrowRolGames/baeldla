import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleshomeComponent } from './ruleshome.component';

describe('RuleshomeComponent', () => {
  let component: RuleshomeComponent;
  let fixture: ComponentFixture<RuleshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
