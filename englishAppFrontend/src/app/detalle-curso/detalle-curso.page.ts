// src/app/detalle-curso/detalle-curso.page.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  course: any; // Define your course object type properly

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Parse the course data from the query parameters
    const courseData = this.route.snapshot.queryParamMap.get('course');
    if (courseData) {
      try {
        this.course = JSON.parse(courseData);
      } catch (error) {
        console.error('Failed to parse course data:', error);
        this.course = null;
      }
    }
  }

  goBack() {
    // Navigate back to the previous page
    this.router.navigate(['/courses']);
  }

  goToSettings() {
    // Navigate to the settings page
    this.router.navigate(['/settings']);
  }

  enrollInCourse() {
    // Logic for enrolling in the course
    console.log('Enrolling in course:', this.course);
    // You may navigate to a different page or perform additional actions here
  }
}
