import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

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
  user: any = {}; // Initialize as an empty object to avoid null errors

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
    spaceBetween: 10
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loadUserData(); // Fetch user data when component initializes
  }

  loadUserData() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user = currentUser; // Assign the user if found
    } else {
      // Handle the case where the user is not found
      console.warn('User not found');
      this.user = {}; // Assign an empty object to prevent null reference errors
    }
  }

  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }

  viewCourse(course: Course) {
    this.router.navigate(['/current-course'], { queryParams: { course: JSON.stringify(course) } });
  }
}
