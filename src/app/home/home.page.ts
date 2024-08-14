import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any; // Replace with User type if you have it defined

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser(); // Get current user data
  }
}
