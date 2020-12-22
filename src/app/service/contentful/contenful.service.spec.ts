import { TestBed } from '@angular/core/testing';

import { ContenfulService } from './contenful.service';

describe('ContenfulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContenfulService = TestBed.get(ContenfulService);
    expect(service).toBeTruthy();
  });
});
