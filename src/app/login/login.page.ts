import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

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
    // Limpiar cualquier usuario previo al cargar la página de login
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  async login() {
    this.errorMessage = ''; // Clear any previous error message

    const isAuthenticated = await this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      this.navCtrl.navigateForward('/home');
    } else {
      this.errorMessage = 'Invalid credentials';
      alert(this.errorMessage);
    }
  }

  navigateToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  forgotPassword() {
    this.navCtrl.navigateForward('/recovery');
  }
}
