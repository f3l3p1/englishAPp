import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // Ensure this matches your User model
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Course {
  name: string;
  description: string;
  enrolled: number;
  image: string;
}

interface NewsItem {
  title: string;
  summary: string;
  image: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: User | null = null; // Explicitly typed user variable
  users: User[] = []; // List to hold all users
  error: string | null = null; // To hold error messages if fetching fails

  courses: Course[] = [
    {
      name: 'New Comers',
      description: 'Primera etapa donde podrás comenzar mejorando tu vocabulario',
      enrolled: 256,
      image: 'assets/images/newcommers.webp',
    },
    {
      name: 'Novices',
      description: 'Segunda etapa que consta de tres pasos...',
      enrolled: 128,
      image: 'assets/images/novices.jpg',
    },
    {
      name: 'Transitionals',
      description: 'Tercera etapa llena de conversación...',
      enrolled: 74,
      image: 'assets/images/transitionals.jpg',
    },
    {
      name: 'Skilled',
      description: 'Cuarta etapa para especialización...',
      enrolled: 35,
      image: 'assets/images/skilled.webp',
    },
  ];

  news: NewsItem[] = [
    {
      title: 'English Tea',
      summary: 'Estudiantes de English Tea realizan primera "Students’ Meeting".',
      image: 'assets/images/news1.jpg',
      id: 1,
    },
    {
      title: 'New Classes Available',
      summary: 'Check out the new classes available in the English Tea program.',
      image: 'assets/images/news2.jpg',
      id: 2,
    },
    {
      title: 'Achievement Unlocked',
      summary: 'Students have unlocked a new achievement this week!',
      image: 'assets/images/news3.jpg',
      id: 3,
    },
  ];

  slideOptions = {
    slidesPerView: 1.2,
    spaceBetween: 10,
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loadUserData(); // Fetch the logged-in user data
    this.loadUsers(); // Fetch all users
  }

  loadUserData() {
    this.authService.getCurrentUser().pipe(
      catchError(error => {
        console.error('Error fetching user data:', error);
        return of(null); // Fallback to null on error
      })
    ).subscribe(user => {
      if (user) {
        this.user = user;
        console.log('User loaded:', this.user);
      } else {
        console.log('No user found or user is null');
      }
    });
  }

  loadUsers() {
    this.authService.getUsers().pipe(
      catchError(error => {
        console.error('Error loading users:', error); // Log the error
        this.error = 'Failed to load users'; // Set an error message for UI feedback
        return of([]); // Return an empty array to keep the app running
      })
    ).subscribe(users => {
      this.users = users;
      console.log('Users loaded:', this.users);
    });
  }

  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }

  viewCourse(course: Course) {
    this.router.navigate(['/current-course'], { queryParams: { course: JSON.stringify(course) } });
  }
}
