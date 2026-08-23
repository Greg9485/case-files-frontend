import { Component, inject } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AccessService } from '../../core/services/access';

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

  private accessService = inject(AccessService);


  isBrowserUnlocked =
    this.accessService.browserUnlockedSignal;


  isWitnessesUnlocked =
    this.accessService.witnessesUnlockedSignal;

}