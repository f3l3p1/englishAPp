import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service'; // Adjust path as necessary

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
    // Any initialization logic can go here
  }

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      this.navCtrl.navigateForward('/home');
    } else {
      this.errorMessage = 'Invalid credentials';
      alert(this.errorMessage);
    }
  }

  navigateToRegister() {
    this.navCtrl.navigateForward('/register'); // Navigate to Register page
  }

  forgotPassword() {
    alert('Password recovery options would go here.');
  }
}
