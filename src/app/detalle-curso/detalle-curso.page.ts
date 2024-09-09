import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourse(courseId).subscribe(
        (course: Course) => (this.course = course),
        (error: any) => console.error('Error fetching course details:', error)
      );
    }
  }

  goToSettings() {
    // Navigate to the settings page
    this.router.navigate(['/settings']);
  }

  enrollInCourse() {
    if (this.course) {
      // Logic to enroll in the course can go here
      // You may call a method on the CourseService or navigate to another page
      console.log(`Enrolling in course: ${this.course.name}`);
      alert(`You have successfully enrolled in ${this.course.name}`);
      // Optionally, you can redirect to a different page or display a success message
    }
  }
}
