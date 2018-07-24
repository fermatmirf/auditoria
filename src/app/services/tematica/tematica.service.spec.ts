import { TestBed, inject } from '@angular/core/testing';

import { TematicaService } from './tematica.service';

describe('TematicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TematicaService]
    });
  });

  it('should be created', inject([TematicaService], (service: TematicaService) => {
    expect(service).toBeTruthy();
  }));
});
