import { TestBed } from '@angular/core/testing';

import { VehiclepageService } from './vehiclepage.service';

describe('VehiclepageService', () => {
  let service: VehiclepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
