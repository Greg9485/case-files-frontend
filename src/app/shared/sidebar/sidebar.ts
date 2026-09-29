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


  /*
   * ============================================================
   * ACCESS SIGNALS
   * ============================================================
   */

  isPublicAccessUnlocked =
    this.accessService
      .publicAccessUnlockedSignal;


  isPolicePortalUnlocked =
    this.accessService
      .policePortalUnlockedSignal;


  isWitnessesUnlocked =
    this.accessService
      .witnessesUnlockedSignal;

  isEvidenceUnlocked =
    this.accessService.evidenceUnlockedSignal;


  isNotebookUnlocked =
    this.accessService
      .notebookUnlockedSignal;


  isTorBrowserUnlocked =
    this.accessService
      .torBrowserUnlockedSignal;


  /*
   * ============================================================
   * NOTIFICATIONS
   * ============================================================
   */

  witnessesNotification =
    this.accessService
      .witnessesNotificationSignal;


  notebookNotification =
    this.accessService
      .notebookNotificationSignal;

  evidenceNotification =
    this.accessService.evidenceNotificationSignal;


  /*
   * ============================================================
   * SIDEBAR STATE
   * ============================================================
   */

  publicAccessExpanded =
    signal(false);


  sidebarCollapsed =
    signal(false);


  togglePublicAccess():
    void {

    if (
      !this.isPublicAccessUnlocked()
    ) {

      return;

    }


    this.publicAccessExpanded.update(
      expanded =>
        !expanded
    );

  }


  toggleSidebar():
    void {

    this.sidebarCollapsed.update(
      collapsed =>
        !collapsed
    );

  }


  openWitnesses():
    void {

    this.accessService
      .clearWitnessesNotification();

  }


  openNotebook():
    void {

    this.accessService
      .clearNotebookNotification();

  }

  openEvidence(): void {
    this.accessService.clearEvidenceNotification();
  }

}
