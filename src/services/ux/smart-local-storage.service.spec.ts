import { TestBed } from '@angular/core/testing';

import { SmartLocalStorageService } from './smart-local-storage.service';

describe('SmartLocalStorageService', () => {
  let service: SmartLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
