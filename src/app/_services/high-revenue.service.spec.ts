import { TestBed } from '@angular/core/testing';

import { HighRevenueService } from './high-revenue.service';

describe('HighRevenueService', () => {
  let service: HighRevenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighRevenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
