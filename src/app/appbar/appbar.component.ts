import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }
  banner() {
    this.router.navigate(['banner']);
  }
}
