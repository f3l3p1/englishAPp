import { Injectable } from '@angular/core';

interface User {
  name: string;
  username: string;
  email: string;
  password: string; // In a real app, store hashed passwords
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users: User[] = [
    { name: 'Test User', username: 'testuser', email: 'test@example.com', password: 'password' } // Example user
  ];
  
  private currentUser: User | null = null; // To keep track of the logged-in user

  constructor() {}

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.currentUser = user; // Set the current user on successful login
      return true;
    }
    return false; // Returns false if authentication fails
  }

  register(name: string, username: string, email: string, password: string): boolean {
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      console.error('User already exists');
      return false; // User already exists
    }
    this.users.push({ name, username, email, password }); // Add the new user to the array
    return true; // Registration successful
  }

  sendRecoveryEmail(email: string): boolean {
    const user = this.users.find(user => user.email === email);
    if (user) {
      console.log(`Sending recovery email to ${email}`);
      return true; // Return true to indicate success
    } else {
      console.error(`No user found with email: ${email}`);
      return false; // Return false if the email is not found
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser; // Return the current user data
  }

  logout(): void {
    this.currentUser = null; // Clear current user on logout
  }
}
