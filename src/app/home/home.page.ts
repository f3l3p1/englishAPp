import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any; // Replace with User type if you have it defined

  constructor(private authService: AuthenticationService, private router: Router) {} // Inject Router

  ngOnInit() {
    this.user = this.authService.getCurrentUser(); // Get current user data
  }

  // Method to check if the current page is active
  isActive(page: string): boolean {
    return this.router.url === `/${page}`;
  }    
}
