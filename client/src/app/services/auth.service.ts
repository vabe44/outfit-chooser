import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private router: Router, private http: Http) {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
   return this.http.post(environment.apiUrl + '/login', credentials)
    .map(response => {
      const result = response.json();

      if (result && result.token) {
        localStorage.setItem('token', result.token);

        const jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
        return true;
      }
      return false;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }

  register(credentials) {
    return this.http.post(environment.apiUrl + '/register', credentials)
     .map(response => {
       const result = response.json();

       if (result && result.token) {
         localStorage.setItem('token', result.token);

         const jwt = new JwtHelper();
         this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
         return true;
       }
       return false;
     });
   }
}

