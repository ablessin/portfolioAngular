import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentesComponent } from './attentes.component';

describe('AttentesComponent', () => {
  let component: AttentesComponent;
  let fixture: ComponentFixture<AttentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
