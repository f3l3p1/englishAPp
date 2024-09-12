// src/app/settings/settings.page.ts

import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user: any = {}; // Replace with your User type if defined
  newProfilePicture: File | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newProfilePicture = file;
      this.user.profilePicture = file; // Set the file in the user object
    }
  }

  updateUserInfo() {
    const updatedUserData = {
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      profilePicture: this.newProfilePicture, // Include the profile picture
    };

    // Ensure that updateUser is called with correct number of arguments
    this.authService.updateUser(updatedUserData).subscribe(
      (response: any) => {
        console.log('User information updated successfully:', response);
        alert('User updated successfully');
      },
      (error: any) => {
        console.error('Error updating user information:', error);
        alert('Error updating user');
      }
    );
  }
}
