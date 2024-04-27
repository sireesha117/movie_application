import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginJService } from '../login-j.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean | any;
  isCustomer: boolean | any;
  isGuest: boolean | any;
  


  constructor(private route: Router, public loginService:LoginJService) {}

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'customer') {
      this.isAdmin = false;
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
