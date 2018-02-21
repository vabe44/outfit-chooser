import { TestBed, inject } from '@angular/core/testing';

import { WardrobeService } from './wardrobe.service';

describe('WardrobeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WardrobeService]
    });
  });

  it('should be created', inject([WardrobeService], (service: WardrobeService) => {
    expect(service).toBeTruthy();
  }));
});
