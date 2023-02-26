import { TestBed } from '@angular/core/testing';

import { FlightOperationsService } from './flight-operations.service';

describe('FlightOperationsService', () => {
  let service: FlightOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
