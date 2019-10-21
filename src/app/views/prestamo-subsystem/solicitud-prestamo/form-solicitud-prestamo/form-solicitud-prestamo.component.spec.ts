import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitudPrestamoComponent } from './form-solicitud-prestamo.component';

describe('FormSolicitudPrestamoComponent', () => {
  let component: FormSolicitudPrestamoComponent;
  let fixture: ComponentFixture<FormSolicitudPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSolicitudPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
