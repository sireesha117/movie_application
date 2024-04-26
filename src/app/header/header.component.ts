import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginJService } from '../login-j.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAdmin: boolean | any;
  isCustomer: boolean | any
  isGuest: boolean | any;

  constructor(private route: Router,public loginService:LoginJService) {}
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
      this.isCustomer = false;
      this.isGuest = false;
    } else if (role === 'customer') {
      this.isCustomer = true;
      this.isAdmin = false;
      this.isGuest = false;
    } else {
      this.isGuest = true;
      this.isAdmin = false;
      this.isCustomer = false;
    }

  
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }
  getAllUsers(){
    this.route.navigate(['allusers']);
  }
  
  addMovie(){
    this.route.navigate(['addmovie']);
  }
  displayTicket(){
    this.route.navigate(['displayalltickets']);

  }
  login(){
    this.route.navigate(['login']);
  }
  register(){
    this.route.navigate(['register']);
  }
  
}
