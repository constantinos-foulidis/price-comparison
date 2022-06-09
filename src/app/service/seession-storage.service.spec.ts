import { TestBed } from '@angular/core/testing';

import { SeessionStorageService } from './seession-storage.service';

describe('SeessionStorageService', () => {
  let service: SeessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
