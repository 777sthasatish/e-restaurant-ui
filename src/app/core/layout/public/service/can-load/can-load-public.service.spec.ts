import { TestBed } from '@angular/core/testing';

import { CanLoadPublicService } from './can-load-public.service';

describe('CanLoadPublicService', () => {
  let service: CanLoadPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
