// src/app/current-course/current-course.page.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Course {
  name: string;
  description: string;
  enrolled: number;
  image: string;
}

@Component({
  selector: 'app-current-course',
  templateUrl: './current-course.page.html',
  styleUrls: ['./current-course.page.scss'],
})
export class CurrentCoursePage implements OnInit {
  course: Course | null = null; // Initialize as null to handle cases where the course data is not available

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

  enrollCourse() {
    // Perform enrollment logic here
    if (this.course) {
      console.log(`Enrolling in course: ${this.course.name}`);
      // Optionally, navigate to a confirmation page or display a success message
    }
  }
}
