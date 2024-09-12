// src/app/services/course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = environment.apiUrl; // Access apiUrl from environment

  constructor(private http: HttpClient) {}

  // Example method to get courses
  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  // Example method to enroll in a course
  enrollInCourse(courseId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/enroll`, { cursoID: courseId, usuarioID: userId });
  }
}
