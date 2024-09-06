import { TestBed } from '@angular/core/testing';

import { SqlapirestService } from './sqlapirest.service';

describe('SqlapirestService', () => {
  let service: SqlapirestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlapirestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
