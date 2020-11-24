import { TestBed } from '@angular/core/testing';

import { CanLoadSecuredService } from './can-load-secured.service';

describe('CanLoadSecuredService', () => {
  let service: CanLoadSecuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadSecuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
