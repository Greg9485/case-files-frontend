import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  AccessService
} from '../../core/services/access';


@Component({
  selector: 'app-sidebar',

  imports: [
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './sidebar.html',

  styleUrl: './sidebar.scss'
})
export class SidebarComponent {

  private accessService =
    inject(AccessService);


  isPolicePortalUnlocked =
    this.accessService
      .policePortalUnlockedSignal;


  isWitnessesUnlocked =
    this.accessService
      .witnessesUnlockedSignal;


  isTorBrowserUnlocked =
    this.accessService
      .torBrowserUnlockedSignal;


  publicAccessExpanded =
    signal(true);


  togglePublicAccess(): void {

    this.publicAccessExpanded.update(
      expanded => !expanded
    );

  }

}