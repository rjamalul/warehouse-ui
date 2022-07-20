import { TestBed } from '@angular/core/testing';

import { CrateApiService } from './crate-api.service';

describe('CrateApiService', () => {
  let service: CrateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
