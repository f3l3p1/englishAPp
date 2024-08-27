import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user: any; // Replace with User type if you have it defined
  newProfilePicture: File | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newProfilePicture = file;
    }
  }

  updateUserInfo() {
    const updatedUserData = {
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      profilePicture: this.newProfilePicture,
    };
    
    this.authService.updateUser(updatedUserData).subscribe((response: any) => {
      // Handle successful update response
      console.log('User information updated successfully:', response);
    }, (error: any) => {
      console.error('Error updating user information:', error);
    });
  }
}
