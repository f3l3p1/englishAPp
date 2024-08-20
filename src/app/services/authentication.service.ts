import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '/Users/user/Documents/Workspace/englishApp/src/app/models/user.model'; // Adjust the path if necessary

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000'; // Your backend API URL

  constructor(private http: HttpClient, private router: Router) {}

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await this.http.post<{ token: string; user: User }>(`${this.apiUrl}/login`, { email, password }).toPromise();
      if (response) { // Check if response is defined
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        return true;
      }
      return false; // Handle the case where response is undefined
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  }

  async register(name: string, username: string, email: string, password: string): Promise<boolean> {
    try {
      await this.http.post(`${this.apiUrl}/register`, { name, username, email, password }).toPromise();
      return true;
    } catch (error) {
      console.error('Registration error', error);
      return false;
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

  // Example methods to be added
  getCurrentCourse(): any | null {
    // Implement your logic here to return the current course
    return null; // Replace with actual implementation
  }

  getPastSessions(): any[] {
    // Implement your logic here to return past sessions
    return []; // Replace with actual implementation
  }
}
