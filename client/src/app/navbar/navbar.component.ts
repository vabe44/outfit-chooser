import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuIsActive: boolean;

  constructor(public authService: AuthService ) {
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }
}
