import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-police-portal-login',
  imports: [FormsModule],
  templateUrl: './police-portal-login.html',
  styleUrl: './police-portal-login.scss'
})
export class PolicePortalLoginComponent {

  private accessService = inject(AccessService);
  private router = inject(Router);

  username = '';
  password = '';

  connecting = false;
  connected = false;
  error = '';

  status = 'INVESTIGATION PORTAL ACCESS';

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
        'ESTABLISHING SECURE CONNECTION';

    }, 900);

    setTimeout(() => {

      this.status =
        'VERIFYING INVESTIGATOR CREDENTIALS';

    }, 1800);

    setTimeout(() => {

      this.status =
        'ACCESS AUTHORIZED';

      this.connecting = false;
      this.connected = true;

    }, 2700);

    setTimeout(() => {

      this.router.navigate(['/police-portal']);

    }, 3800);

  }

}