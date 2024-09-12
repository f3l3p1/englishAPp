// src/app/settings/settings.page.ts
import { Component } from '@angular/core';
import { getAuth, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user: any = {};  // Modify this if you have a specific User type
  newProfilePicture: File | null = null;

  constructor() {}

  ngOnInit() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      this.user = {
        id: currentUser.uid,
        name: currentUser.displayName || 'User',
        email: currentUser.email,
        profilePicture: currentUser.photoURL || ''
      };
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newProfilePicture = file;
      // Handle the upload of the profile picture
    }
  }

  updateUserInfo() {
    if (!this.user) return;
    const auth = getAuth();
    updateProfile(auth.currentUser!, {
      displayName: this.user.name,
      photoURL: this.newProfilePicture ? URL.createObjectURL(this.newProfilePicture) : this.user.profilePicture
    }).then(() => {
      console.log('User profile updated successfully');
      alert('User updated successfully');
    }).catch((error) => {
      console.error('Error updating user profile:', error);
      alert('Error updating user');
    });
  }
}
