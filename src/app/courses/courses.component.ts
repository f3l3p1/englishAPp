// src/app/courses/courses.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  name: string;
  description: string;
  enrolled: number;
  image: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      name: 'New Comers',
      description: 'Primera etapa donde podrás comenzar mejorando tu vocabulario',
      enrolled: 256,
      image: 'assets/images/newcommers.webp',  // Corrected path
    },
    {
      name: 'Novices',
      description: 'Segunda etapa que consta de tres pasos...',
      enrolled: 128,
      image: 'assets/images/novices.jpg',  // Corrected path
    },
    {
      name: 'Transitionals',
      description: 'Tercera etapa llena de conversación...',
      enrolled: 74,
      image: 'assets/images/transitionals.jpg',  // Corrected path
    },
    {
      name: 'Skilled',
      description: 'Cuarta etapa para especialización...',
      enrolled: 35,
      image: 'assets/images/skilled.webp',  // Corrected path
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Method to handle viewing a course
  viewCourse(course: Course) {
    this.router.navigate(['/current-course'], { queryParams: { course: JSON.stringify(course) } });
  }
}
