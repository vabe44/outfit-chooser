import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardGuest implements CanActivate {

constructor(protected router: Router, protected authService: AuthService) { }

  canActivate(route) {
    if (!this.authService.isLoggedIn()) { return true; }
    this.router.navigate(['/home']);
    return false;
  }
}

