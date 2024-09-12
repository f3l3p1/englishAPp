// src/app/user-information/user-information.component.ts
import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  user: any = null;  // Replace with a specific User type if defined
  currentCourse: any = null;  // Define types as needed
  pastSessions: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      this.user = {
        id: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        profilePicture: currentUser.photoURL || ''
      };
      this.loadCurrentCourse();  // Load current course
      this.loadPastSessions();  // Load past sessions
    }
  }

  loadCurrentCourse() {
    // Implement logic to load the current course
  }

  loadPastSessions() {
    // Implement logic to load past sessions
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
