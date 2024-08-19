import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  user: any; // Replace with User type if you have it defined
  currentCourse: any; // Current course details
  pastSessions: any[] = []; // Initialize with an empty array

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // Fetch user data on component initialization
    this.user = this.authService.getCurrentUser(); // Get current user data
    this.currentCourse = this.authService.getCurrentCourse(); // Fetch the current course details
    this.pastSessions = this.authService.getPastSessions(); // Fetch the user's past sessions
  }

  // Optional: Navigate to a specific course detail page
  goToCourseDetails(courseId: string) {
    this.router.navigate([`/courses/${courseId}`]); // Adjust route as necessary
  }

  // Optional: Navigate to comments for a specific session
  goToComments(sessionId: string) {
    this.router.navigate([`/comments/${sessionId}`]); // Adjust route as necessary
  }

  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }
  
}

