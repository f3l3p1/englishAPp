import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model'; // Ensure the path is correct

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses'; // Adjust the URL to match your backend endpoint

  constructor(private http: HttpClient) {}

  getCourse(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  // Add more methods for CRUD operations if needed
}
