// src/app/services/authentication.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl; // Use environment variable for API URL

  constructor(private http: HttpClient, private router: Router) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getCurrentUser(): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}/users/current`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching current user:', error);
          return throwError(() => new Error('Failed to fetch current user.'));
        })
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching users:', error);
          return throwError(() => new Error('Failed to fetch users.'));
        })
      );
  }

  getCurrentCourse(): Observable<any> { // Add this method
    return this.http.get<any>(`${this.apiUrl}/current-course`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching current course:', error);
          return throwError(() => new Error('Failed to fetch current course.'));
        })
      );
  }

  getPastSessions(): Observable<any[]> { // Add this method
    return this.http.get<any[]>(`${this.apiUrl}/past-sessions`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching past sessions:', error);
          return throwError(() => new Error('Failed to fetch past sessions.'));
        })
      );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string; user: User }>(
      `${this.apiUrl}/users/login`,
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
        return throwError(() => new Error('Login failed'));
      })
    );
  }

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
        return throwError(() => error.error?.message || 'Registration failed. Please try again.');
      })
    );
  }

  updateUser(updatedUserData: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', updatedUserData.name);
    formData.append('username', updatedUserData.username);
    formData.append('email', updatedUserData.email);

    if (updatedUserData.profilePicture) {
      formData.append('profilePicture', updatedUserData.profilePicture);
    }

    return this.http.put(`${this.apiUrl}/users/${updatedUserData.id}`, formData, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Update user error', error);
          return throwError(() => new Error('Error updating user'));
        })
      );
  }

  sendRecoveryEmail(email: string): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/send-recovery-email`, { correo: email }, { headers: this.getHeaders() })
      .pipe(
        map(() => true),
        catchError((error: HttpErrorResponse) => {
          console.error('Error sending recovery email:', error);
          return throwError(() => new Error('Failed to send recovery email'));
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
