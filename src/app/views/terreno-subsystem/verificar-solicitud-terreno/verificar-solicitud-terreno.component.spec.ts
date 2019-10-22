import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarSolicitudTerrenoComponent } from './verificar-solicitud-terreno.component';

describe('VerificarSolicitudTerrenoComponent', () => {
  let component: VerificarSolicitudTerrenoComponent;
  let fixture: ComponentFixture<VerificarSolicitudTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarSolicitudTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarSolicitudTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
