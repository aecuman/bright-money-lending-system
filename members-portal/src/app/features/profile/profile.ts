import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatDividerModule],
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
