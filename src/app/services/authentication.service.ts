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
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    // Load users and current user from localStorage on service initialization
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser)); // Persist to localStorage
      return true;
    }
    return false;
  }

  register(name: string, username: string, email: string, password: string): boolean {
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      console.error('User already exists');
      return false;
    }
    const newUser: User = { name, username, email, password };
    this.users.push(newUser);

    // Persist the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(this.users));

    return true;
  }

  sendRecoveryEmail(email: string): boolean {
    const user = this.users.find(user => user.email === email);
    if (user) {
      console.log(`Sending recovery email to ${email}`);
      return true;
    } else {
      console.error(`No user found with email: ${email}`);
      return false;
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser'); // Clear from localStorage on logout
  }
}
