import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private navCtrl: NavController, private authService: AuthenticationService) {}

  async onRegister() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const isRegistered = await this.authService.register(this.name, this.username, this.email, this.password);
    if (isRegistered) {
      alert('Registration successful! You can now log in.');
      this.navCtrl.navigateBack('/login');
    } else {
      alert('Registration failed. Please try again.');
    }
  }

  navigateToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
