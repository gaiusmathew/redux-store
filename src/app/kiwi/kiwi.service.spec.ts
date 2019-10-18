import { TestBed } from '@angular/core/testing';

import { KiwiService } from './kiwi.service';

describe('KiwiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KiwiService = TestBed.get(KiwiService);
    expect(service).toBeTruthy();
  });
});
