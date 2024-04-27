import { Component } from '@angular/core';
import { ForgotpasswordService } from './forgotpassword.service';
import { user } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent {
  public userObj: user = new user();
  constructor(private fp: ForgotpasswordService, private route: Router) {}
  data: {} | any;
  forgotpassword() {
    this.fp.forgotpassword(this.userObj).subscribe(
      (data) => {
        alert("Password Updated Sucessfully")
        this.route.navigate(['login']);
      },
      (error) => {
        alert('Invalid Credentials');
      }
    );
  }
  blogin() {
    this.route.navigate(['login']);
  }
}
