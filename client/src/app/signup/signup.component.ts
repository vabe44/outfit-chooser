import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signUp(credentials) {
    this.authService.register(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
        } else  {
          this.invalidLogin = true;
        }
      });
  }

}
