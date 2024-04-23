import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAdmin: boolean | any;
  constructor(private route: Router) {}
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
  
}
