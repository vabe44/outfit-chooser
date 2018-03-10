import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardGuest } from './auth-guard-guest.service';

describe('AuthGuardGuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuest]
    });
  });

  it('should be created', inject([AuthGuardGuest], (service: AuthGuardGuest) => {
    expect(service).toBeTruthy();
  }));
});
