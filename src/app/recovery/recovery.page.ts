import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service'; // Adjust path as necessary

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage {
  email: string = '';

  constructor(private navCtrl: NavController, private authService: AuthenticationService) {}

  async sendRecoveryEmail() {
    if (this.email) {
      const success = await this.authService.sendRecoveryEmail(this.email);
      if (success) {
        alert('Recovery email sent! Please check your inbox.');
      } else {
        alert('No account found with that email address.');
      }
    } else {
      alert('Please enter your email address.');
    }
  }

  navigateBackToLogin() {
    this.navCtrl.navigateBack('/login'); // Navigate back to Login page
  }
}