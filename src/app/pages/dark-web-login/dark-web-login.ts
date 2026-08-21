import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-dark-web-login',
  imports: [FormsModule],
  templateUrl: './dark-web-login.html',
  styleUrl: './dark-web-login.scss'
})
export class DarkWebLoginComponent {

  private accessService = inject(AccessService);
  private router = inject(Router);

  username = '';
  password = '';

  connecting = false;
  connected = false;
  error = '';

  status = 'SECURE DARK WEB CONNECTION';


  connect(): void {

    if (this.connecting || this.connected) {
      return;
    }

    this.error = '';

    if (!this.username || !this.password) {
      this.error = 'INVESTIGATIVE CREDENTIALS REQUIRED';
      return;
    }

    const authenticated =
      this.accessService.authenticate(
        this.username,
        this.password
      );

    if (!authenticated) {

      this.status = 'CONNECTION REFUSED';

      this.error =
        'INVALID INVESTIGATIVE CREDENTIALS';

      return;
    }

    this.connecting = true;

    this.status =
      'INITIALIZING SECURE CONNECTION';


    setTimeout(() => {

      this.status =
        'ESTABLISHING ENCRYPTED CONNECTION';

    }, 900);


    setTimeout(() => {

      this.status =
        'VERIFYING INVESTIGATOR CREDENTIALS';

    }, 1800);


    setTimeout(() => {

      this.status =
        'CONNECTION ESTABLISHED';

      this.connecting = false;
      this.connected = true;

    }, 2700);


    setTimeout(() => {

      this.router.navigate(['/browser']);

    }, 3800);

  }

}