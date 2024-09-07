import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {  // Asegúrate de que esta línea esté presente
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  // Método para manejar el registro del usuario
  register(form: NgForm) {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.name, this.username, this.email, this.password)
      .then((result: boolean | string) => {
        if (result === true) {
          alert('Registration successful! You can now log in.');
          this.router.navigate(['/login']);
        } else {
          alert(result); // Mostrar cualquier mensaje de error
        }
      })
      .catch((error: any) => {
        console.error('Registration error:', error);
      });
  }

  // Método para navegar a la página de inicio de sesión
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
