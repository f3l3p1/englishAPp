// src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

// Define interfaces for Course and NewsItem
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
  user: any;

  // Define the list of courses with their respective details
  courses: Course[] = [
    {
      name: 'New Comers',
      description: 'Primera etapa donde podrás comenzar mejorando tu vocabulario',
      enrolled: 256,
      image: 'assets/newcommers.webp', // Ensure the correct image path
    },
    {
      name: 'Novices',
      description: 'Segunda etapa que consta de tres pasos...',
      enrolled: 128,
      image: 'assets/novices.jpg',
    },
    {
      name: 'Transitionals',
      description: 'Tercera etapa llena de conversación...',
      enrolled: 74,
      image: 'assets/transitionals.jpg',
    },
    {
      name: 'Skilled',
      description: 'Cuarta etapa para especialización...',
      enrolled: 35,
      image: 'assets/skilled.webp',
    },
  ];

  // Define the list of news items
  news: NewsItem[] = [
    {
      title: 'English Tea',
      summary: 'Estudiantes de English Tea realizan primera "Students’ Meeting".',
      image: 'assets/news1.jpg',
      id: 1,
    },
    {
      title: 'New Classes Available',
      summary: 'Check out the new classes available in the English Tea program.',
      image: 'assets/news2.jpg',
      id: 2,
    },
    {
      title: 'Achievement Unlocked',
      summary: 'Students have unlocked a new achievement this week!',
      image: 'assets/news3.jpg',
      id: 3,
    },
  ];

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser(); // Fetch user data on component initialization
  }

  // Method to check if the current page is active
  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }

  // Method to handle viewing a course
  viewCourse(course: Course) {
    this.router.navigate(['/current-course'], { queryParams: { course: JSON.stringify(course) } });
  }
}
