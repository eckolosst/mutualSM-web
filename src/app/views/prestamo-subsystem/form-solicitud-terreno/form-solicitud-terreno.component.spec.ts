import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitudTerrenoComponent } from './form-solicitud-terreno.component';

describe('FormSolicitudTerrenoComponent', () => {
  let component: FormSolicitudTerrenoComponent;
  let fixture: ComponentFixture<FormSolicitudTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSolicitudTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSolicitudTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
