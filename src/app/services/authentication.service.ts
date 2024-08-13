import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = [
    { email: 'test@example.com', password: 'password' } // Example user, replace with real data source
  ];

  constructor() { }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    return !!user; // Returns true if user is found, false otherwise
  }

  register(name: string, username: string, email: string, password: string): boolean {
    // In a real application, you'd send this data to a backend server to save it.
    // Here we are just returning true for demonstration purposes.
    this.users.push({ email, password }); // Add the new user to the array
    return true;
  }

  sendRecoveryEmail(email: string): boolean {
    const user = this.users.find(user => user.email === email);
    if (user) {
      // Simulate sending an email (in a real app, you'd call an API here)
      console.log(`Sending recovery email to ${email}`);
      // You can implement an actual email sending service here
      return true; // Return true to indicate success
    } else {
      console.error(`No user found with email: ${email}`);
      return false; // Return false if the email is not found
    }
  }
}
