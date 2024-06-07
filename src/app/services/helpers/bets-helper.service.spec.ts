import { TestBed } from '@angular/core/testing';

import { BetsHelperService } from './bets-helper.service';

describe('BetsService', () => {
  let service: BetsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
