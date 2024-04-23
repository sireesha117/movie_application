import { Component, OnInit } from '@angular/core';
import { UserService } from './getallusers.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.css']
})
export class GetallusersComponent implements OnInit {
  users: {} | any;
  isAdmin: boolean | any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.checkUserRole();
    this.getAllUsers();
  }

  checkUserRole(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'customer') {
      this.isAdmin = false;
    }
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      }, error => {
        console.error('Error:', error);
      });
  }
}
