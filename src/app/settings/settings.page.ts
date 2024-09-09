import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  user: any = {}; // Use your User model if defined
  newProfilePicture: File | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user = currentUser;
    } else {
      console.error('No current user found.');
      // Handle the case where user is not available
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newProfilePicture = file;
    }
  }

  updateUserInfo() {
    if (!this.user.usuarioID) {
      alert('User ID is missing. Please refresh the page and try again.');
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.user.nombre);
    formData.append('nombreUsuario', this.user.nombreUsuario);
    formData.append('correo', this.user.correo);
    if (this.newProfilePicture) {
      formData.append('profilePicture', this.newProfilePicture);
    }

    // Call updateUser with formData and user ID
    this.authService.updateUser(formData, this.user.usuarioID).subscribe(
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
