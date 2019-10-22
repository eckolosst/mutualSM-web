import { TestBed } from '@angular/core/testing';

import { SolicitudPrestamoService } from './solicitud-prestamo.service';

describe('SolicitudPrestamoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudPrestamoService = TestBed.get(SolicitudPrestamoService);
    expect(service).toBeTruthy();
  });
});
