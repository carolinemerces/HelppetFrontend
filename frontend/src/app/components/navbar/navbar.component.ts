import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUser,
  faCartPlus,
  faBars,
  faUserCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faCartPlus = faCartPlus;
  faBars = faBars;
  faUserCog = faUserCog;
  faSignOutAlt = faSignOutAlt;

  constructor(public authService: AuthService, private router: Router) {}
  user: string;

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
