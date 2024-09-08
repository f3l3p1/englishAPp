import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await this.http.post<{ token: string; user: User }>(
        `${this.apiUrl}/login`, 
        { correo: email, contrasena: password }
      ).toPromise();

      if (response && response.token) {
        const token = response.token;
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  }

  async register(name: string, username: string, email: string, password: string): Promise<boolean | string> {
    try {
      await this.http.post(`${this.apiUrl}/users`, { 
        nombre: name, 
        nombreUsuario: username, 
        correo: email, 
        contrasena: password 
      }).toPromise();
      return true;
    } catch (error: any) {
      console.error('Registration error', error);
      return error.error?.message || 'Registration failed. Please try again.';
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  updateUser(updatedUserData: any) {
    const formData = new FormData();
    formData.append('name', updatedUserData.name);
    formData.append('username', updatedUserData.username);
    formData.append('email', updatedUserData.email);
    
    if (updatedUserData.profilePicture) {
      formData.append('profilePicture', updatedUserData.profilePicture);
    }

    return this.http.post(`${this.apiUrl}/update-user`, formData, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Update user error', error);
          return throwError(() => new Error('Error updating user'));
        })
      );
  }

  sendRecoveryEmail(email: string): Promise<boolean> {
    return this.http.post(`${this.apiUrl}/send-recovery-email`, { correo: email }, { headers: this.getHeaders() }).toPromise()
      .then(() => true)
      .catch(error => {
        console.error('Error sending recovery email:', error);
        return false;
      });
  }

  getCurrentCourse(): any | null {
    return null;
  }

  getPastSessions(): any[] {
    return [];
  }
}
