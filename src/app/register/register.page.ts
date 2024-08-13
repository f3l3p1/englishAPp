import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service'; // Adjust path as necessary

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

  constructor(private navCtrl: NavController, private authService: AuthenticationService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Call the authentication service to register the user
    const isRegistered = this.authService.register(this.name, this.username, this.email, this.password);
    if (isRegistered) {
      alert('Registration successful! You can now log in.');
      this.navCtrl.navigateBack('/login');
    } else {
      alert('Registration failed. Please try again.');
    }
  }

  navigateToLogin() {
    this.navCtrl.navigateBack('/login'); // Navigate back to login page
  }
}
