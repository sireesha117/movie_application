import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private route: Router,
    private registerservice: RegisterService
  ) {}
  registerObj: Register = new Register();
  data: {} | any;
  registerarr: Array<Register> = [];
  register() {
    this.registerservice.addUser(this.registerObj).subscribe(
      (data) => {
        console.log(this.registerObj);
        this.data = JSON.stringify;
        this.registerarr.push(this.data);
      },
      (error) => {
        console.log();
      }
    );

    this.route.navigate(['login']);
  }
  blogin() {
    this.route.navigate(['login']);
  }
}
