import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeProComponent } from './expe-pro.component';

describe('ExpeProComponent', () => {
  let component: ExpeProComponent;
  let fixture: ComponentFixture<ExpeProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
