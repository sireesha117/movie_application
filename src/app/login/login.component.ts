import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginJService } from '../login-j.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
    userRole: '',
  };
  isAdmin: boolean = false;
  constructor(private route: Router, private loginservice: LoginJService) {}
  login() {
    this.loginservice.generateToken(this.loginObj).subscribe((data) => {
      if (data.Token == null || data.Token == undefined) {
        alert('invalid Credentails');
      } else {
        localStorage.setItem('Token', data['Token']);
        localStorage.setItem('username', data['username']);

        this.route.navigate([`home`]);
      }
      localStorage.setItem('role', data.userRole);
    
      
    });
    (error: any) => {
      alert('Invalid Crendentials');
    };
  }

  Register() {
    this.route.navigate(['register']);
  }
  forgotpassword() {
    this.route.navigate(['forgotpassword']);
  }
}
