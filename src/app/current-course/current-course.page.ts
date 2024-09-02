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
  course!: Course; // Using the non-null assertion operator to assure TypeScript the variable will be initialized

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Parse the course data from the query parameters
    const courseData = this.route.snapshot.queryParamMap.get('course');
    if (courseData) {
      this.course = JSON.parse(courseData);
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
    console.log(`Enrolling in course: ${this.course.name}`);
    // Optionally, navigate to a confirmation page or display a success message
  }
}
