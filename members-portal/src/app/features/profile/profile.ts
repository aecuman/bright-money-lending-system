import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
  member = {
    name: 'John Mukasa',
    email: 'john.mukasa@example.com',
    phone: '+256 701 234 567',
    nin: 'CM9000000000XXXX',
    memberSince: 'January 2025',
  };
}
