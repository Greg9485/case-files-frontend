import {
  Component,
  inject
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  AccessService
} from '../../core/services/access';


@Component({
  selector: 'app-dark-web-login',

  imports: [
    FormsModule
  ],

  templateUrl:
    './dark-web-login.html',

  styleUrl:
    './dark-web-login.scss'
})
export class DarkWebLoginComponent {

  private accessService =
    inject(AccessService);

  private router =
    inject(Router);


  username = '';

  password = '';


  error = '';

  connecting = false;


  constructor() {

    /*
     * The login page itself is not available
     * until the player has discovered TOR access.
     */

    if (
      !this.accessService
        .isTorBrowserUnlocked()
    ) {

      this.router.navigate([
        '/case'
      ]);

      return;

    }


    /*
     * If they are already authenticated,
     * send them directly into the browser.
     */

    if (
      this.accessService
        .isDarkWebAuthenticated()
    ) {

      this.router.navigate([
        '/browser'
      ]);

    }

  }


  async connect(): Promise<void> {

    if (this.connecting) {
        return;
    }


    this.error = '';


    if (
        !this.username.trim()
        ||
        !this.password
    ) {

        this.error =
        'HANDLE AND PASSCODE REQUIRED.';

        return;

    }


    this.connecting = true;


    try {

        await new Promise(
        resolve =>
            setTimeout(
            resolve,
            650
            )
        );


        const authenticated =
        this.accessService
            .authenticateDarkWeb(
            this.username,
            this.password
            );


        if (!authenticated) {

        this.error =
            'AUTHENTICATION FAILED.';

        this.password = '';

        return;

        }


        await new Promise(
        resolve =>
            setTimeout(
            resolve,
            450
            )
        );


        await this.router.navigate([
        '/browser'
        ]);

    } catch (error) {

        console.error(
        'Dark web authentication error:',
        error
        );


        this.error =
        'CONNECTION ERROR. PLEASE RETRY.';

    } finally {

        this.connecting = false;

    }

    }
}