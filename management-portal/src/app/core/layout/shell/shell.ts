import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { TopbarComponent } from '../topbar/topbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent, MatSidenavModule],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {}
