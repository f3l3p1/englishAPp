// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';  // To store the user's email input
  password: string = '';  // To store the user's password input
  errorMessage: string | null = null;  // To store error messages

  constructor(private router: Router) {}

  // Method to handle user login
  login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Successful login
        console.log('User logged in:', userCredential.user);
        this.router.navigate(['/home']);  // Redirect to home page after successful login
        this.errorMessage = null;  // Clear any previous error message
      })
      .catch((error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Failed to login. Please check your credentials.';  // Display error message
      });
  }

  // Method for handling forgot password action
  forgotPassword() {
    // Add logic to handle forgot password, e.g., navigate to a forgot password page
    console.log('Forgot password clicked');
    // Example: this.router.navigate(['/forgot-password']);
  }

  // Method to navigate to the register page
  navigateToRegister() {
    this.router.navigate(['/register']);  // Navigate to the registration page
  }
}
