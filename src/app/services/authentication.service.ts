import { Injectable } from '@angular/core';

interface User {
  name: string;
  username: string;
  email: string;
  password: string; // In a real app, store hashed passwords
}

interface Course {
  id: string;
  name: string;
  description: string;
  image: string; // URL of the course image
  progress: number; // Progress percentage
}

interface Session {
  id: string;
  name: string; // Name of the session
  date: Date; // Date of the session
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users: User[] = [];
  private currentUser: User | null = null;
  
  // Mock data for courses and sessions
  private courses: Course[] = [
    {
      id: '1',
      name: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      image: 'path/to/course-image.jpg',
      progress: 70
    }
    // Add more courses as needed
  ];

  private sessions: Session[] = [
    {
      id: 's1',
      name: 'Session 1',
      date: new Date('2023-01-01')
    },
    {
      id: 's2',
      name: 'Session 2',
      date: new Date('2023-01-05')
    }
    // Add more sessions as needed
  ];

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

  getCurrentCourse(): Course | null {
    // For simplicity, returning the first course as the current course
    // You can implement your own logic to fetch the relevant course for the user
    return this.courses[0] || null;
  }

  getPastSessions(): Session[] {
    // Return past sessions; you may filter based on the current user in a real app
    return this.sessions.sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date descending
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser'); // Clear from localStorage on logout
  }
}
