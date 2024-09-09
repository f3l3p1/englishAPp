import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  // Method to handle user registration
  register(form: NgForm) {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.name, this.username, this.email, this.password)
      .subscribe(
        (result: boolean | string) => {
          if (result === true) {
            alert('Registration successful! You can now log in.');
            this.router.navigate(['/login']);
          } else {
            alert(result); // Show any error message
          }
        },
        (error: any) => {
          console.error('Registration error:', error);
          alert('An error occurred during registration.');
        }
      );
  }

  // Method to navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
