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
  course: Course | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.loadCourseData();
  }

  loadCourseData() {
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
    this.router.navigate(['/courses']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  enrollCourse() {
    if (this.course) {
      console.log(`Enrolling in course: ${this.course.name}`);
      // Navigate to detalle-curso after enrolling
      this.router.navigate(['/detalle-curso'], { queryParams: { course: JSON.stringify(this.course) } });
    }
  }
}
