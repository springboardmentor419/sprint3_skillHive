import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileModalComponent } from '../edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, EditProfileModalComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isModalOpen = false;
  profileData = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'New York',
    about: 'Passionate developer with expertise in Angular.'
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleSave(updatedProfile: any) {
    this.profileData = updatedProfile;
    this.isModalOpen = false;
  }
}
