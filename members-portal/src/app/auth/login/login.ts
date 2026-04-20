import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  phone = '';
  password = '';
  hidePassword = true;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}
