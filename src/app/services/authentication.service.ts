import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // Adjust the path if necessary
import { jwtDecode } from 'jwt-decode'; // Use the correct named import

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000'; // Your backend API URL

  constructor(private http: HttpClient, private router: Router) {}

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await this.http.post<{ token: string; user: User }>(`${this.apiUrl}/login`, { email, password }).toPromise();
      if (response && response.token) {
        const token = response.token; // Define the token
        const decodedToken: any = jwtDecode(token); // Decode the token
        const tokenExpiry = decodedToken?.exp ? decodedToken.exp * 1000 : 0; // Handle possible undefined 'exp'

        if (tokenExpiry && tokenExpiry < Date.now()) {
          return false; // Token has expired
        }

        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        return true;
      }
      return false; // Handle the case where response is undefined
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  }

  async register(name: string, username: string, email: string, password: string): Promise<boolean | string> {
    try {
      await this.http.post(`${this.apiUrl}/register`, { name, username, email, password }).toPromise();
      return true;
    } catch (error: any) { // Specify type for error
      console.error('Registration error', error);
      return error.error?.message || 'Registration failed'; // Return the error message
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
    
    // Append user data to FormData object
    formData.append('name', updatedUserData.name);
    formData.append('username', updatedUserData.username);
    formData.append('email', updatedUserData.email);
    
    if (updatedUserData.profilePicture) {
      formData.append('profilePicture', updatedUserData.profilePicture);
    }

    // Make HTTP request to update user information on your server
    return this.http.post(`${this.apiUrl}/update-user`, formData); // Adjust endpoint accordingly
  }

  sendRecoveryEmail(email: string): Promise<boolean> {
    return this.http.post(`${this.apiUrl}/send-recovery-email`, { email }).toPromise()
      .then(() => true) // Return true if the email was sent successfully
      .catch(error => {
        console.error('Error sending recovery email:', error);
        return false; // Return false if there was an error
      });
  }

  getCurrentCourse(): any | null {
    // Implement your logic here to return the current course
    return null; // Replace with actual implementation
  }

  getPastSessions(): any[] {
    // Implement your logic here to return past sessions
    return []; // Replace with actual implementation
  }
}
