import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // Ensure you have a proper User model defined
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/api'; // Ensure this URL matches your backend API URL

  constructor(private http: HttpClient, private router: Router) {}

  // Method to add JWT token to headers
  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Login method
  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string; user: User }>(
      `${this.apiUrl}/login`, 
      { correo: email, contrasena: password }
    ).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          return true;
        }
        return false;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login error', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }

  // Register method
  register(name: string, username: string, email: string, password: string): Observable<boolean | string> {
    return this.http.post(`${this.apiUrl}/users`, { 
      nombre: name, 
      nombreUsuario: username, 
      correo: email, 
      contrasena: password 
    }).pipe(
      map(() => true),
      catchError((error: HttpErrorResponse) => {
        console.error('Registration error', error);
        return throwError(() => new Error(error.error?.message || 'Registration failed. Please try again.'));
      })
    );
  }

  // Logout method
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // Get the current logged-in user
  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // Update user information, including profile picture
  updateUser(formData: FormData, userId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, formData, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error updating user:', error);
          return throwError(() => new Error('Error updating user information.'));
        })
      );
  }

  // Send recovery email
  sendRecoveryEmail(email: string): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/send-recovery-email`, { correo: email }, { headers: this.getHeaders() })
      .pipe(
        map(() => true),
        catchError((error: HttpErrorResponse) => {
          console.error('Error sending recovery email:', error);
          return throwError(() => new Error('Failed to send recovery email.'));
        })
      );
  }

  // Placeholder methods for additional functionalities
  getCurrentCourse(): any | null {
    return null;
  }

  getPastSessions(): any[] {
    return [];
  }
}
