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
  course: Course = { name: '', description: '', enrolled: 0, image: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['course']) {
        this.course = JSON.parse(params['course']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  enrollCourse() {
    console.log('Enrolling in course:', this.course);
    // Add additional enrollment logic here
  }
}
