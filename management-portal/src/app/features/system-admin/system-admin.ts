import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-system-admin',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './system-admin.html',
  styleUrl: './system-admin.scss',
})
export class SystemAdminComponent {}
