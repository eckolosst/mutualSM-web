import { TestBed } from '@angular/core/testing';

import { GaranteService } from './garante.service';

describe('GaranteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaranteService = TestBed.get(GaranteService);
    expect(service).toBeTruthy();
  });
});
