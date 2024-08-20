import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; // Adjusted import to point to the correct User model file
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthenticationService {
  private users: User[] = []; // Array to hold registered users

  constructor() {}

  register(name: string, username: string, email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const existingUser = this.users.find(user => user.email === email);
      if (existingUser) {
        console.error('User already exists');
        observer.next(false); // Registration failed
      } else {
        const newUser: User = { name, username, email, password }; // Create new user object
        this.users.push(newUser); // Add the new user to the mock array
        observer.next(true); // Registration successful
      }
      observer.complete();
    });
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const user = this.users.find(user => user.email === email && user.password === password);
      observer.next(!!user); // Returns true if user is found, false otherwise
      observer.complete();
    });
  }

  logout(): void {
    // No action needed for mock service
  }

  getCurrentUser(): User | null {
    return this.users.length > 0 ? this.users[0] : null; // Return the first user or null if no users exist
  }
}

