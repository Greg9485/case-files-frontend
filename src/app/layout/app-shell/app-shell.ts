import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import {
  ToastNotificationComponent
} from '../../shared/toast-notification/toast-notification';

@Component({
  selector: 'app-app-shell',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    ToastNotificationComponent
  ],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss'
})
export class AppShellComponent {

}
