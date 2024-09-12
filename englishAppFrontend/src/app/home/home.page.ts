import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // Updated model should be used
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
  user: User | null = null; // Current logged-in user
  users: User[] = []; // List of all users
  error: string | null = null; // Error message, if any
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUserData();
    this.loadUsers();
  }

  loadUserData() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = {
          usuarioID: user.uid, // `usuarioID` now correctly typed as a string
          nombre: user.displayName || 'User',
          nombreUsuario: user.displayName || 'User',
          correo: user.email || '',
          completedSessions: 0,
          completedTasks: 0,
          achievements: 0,
          profilePicture: user.photoURL || ''
        };
        console.log('User loaded:', this.user);
      } else {
        console.log('No user is signed in.');
      }
    });
  }

  loadUsers() {
    // Placeholder users; replace with actual logic for fetching users from Firestore or another service
    this.users = [
      { usuarioID: '1', nombre: 'John Doe', nombreUsuario: 'johnd', correo: 'john@example.com' },
      { usuarioID: '2', nombre: 'Jane Doe', nombreUsuario: 'janed', correo: 'jane@example.com' }
    ];
    console.log('Users loaded:', this.users);
  }

  viewCourse(course: Course) {
    this.router.navigate(['/current-course'], { queryParams: { course: JSON.stringify(course) } });
  }
}
