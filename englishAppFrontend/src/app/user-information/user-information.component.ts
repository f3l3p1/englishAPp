// src/app/user-information/user-information.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  user: User | null = null;
  currentCourse: any = null; // Use a more specific type if available
  pastSessions: any[] = []; // Initialize as an empty array

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loadUserData();
    this.loadCurrentCourse();
    this.loadPastSessions();
  }

  loadUserData() {
    this.authService.getCurrentUser().subscribe(
      (user: User | null) => {
        this.user = user;
        console.log('User:', this.user);
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  loadCurrentCourse() {
    this.authService.getCurrentCourse().subscribe(
      (course: any) => {  // Replace 'any' with a specific type if known
        this.currentCourse = course;
        console.log('Current Course:', this.currentCourse);
      },
      (error: any) => {
        console.error('Error fetching current course:', error);
      }
    );
  }

  loadPastSessions() {
    this.authService.getPastSessions().subscribe(
      (sessions: any[]) => { // Use a specific type if available
        this.pastSessions = sessions;
        console.log('Past Sessions:', this.pastSessions);
      },
      (error: any) => {
        console.error('Error fetching past sessions:', error);
      }
    );
  }

  goToCourseDetails(courseId: string) {
    this.router.navigate([`/courses/${courseId}`]);
  }

  goToComments(sessionId: string) {
    this.router.navigate([`/comments/${sessionId}`]);
  }

  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }
}
