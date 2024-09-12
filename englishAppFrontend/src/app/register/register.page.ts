// src/app/register/register.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

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

  constructor(private router: Router) {}

  register(form: NgForm) {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Successfully registered
        updateProfile(userCredential.user, { displayName: this.username });
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Registration error:', error);
        alert('An error occurred during registration.');
      });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
