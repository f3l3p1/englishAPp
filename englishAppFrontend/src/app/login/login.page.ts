// src/app/login/login.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Update the path and service name as per your Firebase service

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  public errorMessage: string = '';

  constructor(private navCtrl: NavController, private authService: AuthenticationService) {}

  ngOnInit() {
    // Clear any previous user data when loading the login page
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  async login() {
    this.errorMessage = ''; // Clear any previous error message

    try {
      const isAuthenticated = await this.authService.login(this.email, this.password).toPromise();
      if (isAuthenticated) {
        this.navCtrl.navigateForward('/home');
      } else {
        this.errorMessage = 'Invalid credentials';
        alert(this.errorMessage);
      }
    } catch (error) {
      this.errorMessage = 'Login failed. Please try again.';
      console.error('Login error:', error);
    }
  }

  forgotPassword() {
    // Navigate to the recovery page
    this.navCtrl.navigateForward('/recovery');
  }

  navigateToRegister() {
    // Navigate to the register page
    this.navCtrl.navigateForward('/register');
  }
}
