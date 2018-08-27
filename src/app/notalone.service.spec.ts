import { TestBed, inject } from '@angular/core/testing';

import { NotaloneService } from './notalone.service';

describe('NotaloneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotaloneService]
    });
  });

  it('should be created', inject([NotaloneService], (service: NotaloneService) => {
    expect(service).toBeTruthy();
  }));
});
