// src/app/recovery/recovery.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage {
  email: string = '';

  constructor(private navCtrl: NavController) {}

  async sendRecoveryEmail() {
    if (this.email) {
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, this.email);
        alert('Recovery email sent! Please check your inbox.');
      } catch (error) {
        alert('No account found with that email address.');
        console.error('Error sending recovery email:', error);
      }
    } else {
      alert('Please enter your email address.');
    }
  }

  navigateBackToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
