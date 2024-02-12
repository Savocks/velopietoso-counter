import { TestBed } from '@angular/core/testing';

import { VelopietosoService } from './velopietoso.service';

describe('VelopietosoService', () => {
  let service: VelopietosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelopietosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
