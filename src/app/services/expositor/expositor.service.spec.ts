import { TestBed, inject } from '@angular/core/testing';

import { ExpositorService } from './expositor.service';

describe('ExpositorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpositorService]
    });
  });

  it('should be created', inject([ExpositorService], (service: ExpositorService) => {
    expect(service).toBeTruthy();
  }));
});
