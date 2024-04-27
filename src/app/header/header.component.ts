import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginJService } from '../login-j.service';
import { RoleService } from '../role.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin: boolean | any;
  isCustomer: boolean | any;
  isGuest: boolean | any;
  private logoutSubscription!: Subscription;


  constructor(private route: Router, public loginService:LoginJService, private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleService.currentRole.subscribe(role => {
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
    });

    this.logoutSubscription = this.loginService.onLogout.subscribe(() => {
      this.roleService.changeRole('guest');
    });
  }

  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  logout() {
    localStorage.clear();
    this.loginService.onLogout.emit();
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
