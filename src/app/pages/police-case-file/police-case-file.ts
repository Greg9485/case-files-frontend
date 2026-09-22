import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  AccessService
} from '../../core/services/access';

import {
  AMHERST_POLICE_WITNESSES
} from '../../core/data/sites/amherst-pd/amherst-pd-witnesses';


@Component({
  selector: 'app-police-case-file',

  imports: [],

  templateUrl:
    './police-case-file.html',

  styleUrl:
    './police-case-file.scss'
})
export class PoliceCaseFileComponent {

  private accessService =
    inject(AccessService);

  private router =
    inject(Router);


  /*
   * ==========================================================
   * CASE NAVIGATION
   * ==========================================================
   */

  activeTab =
    'CASE SUMMARY';


  tabs = [
    'CASE SUMMARY',
    'WITNESS STATEMENTS',
    'EVIDENCE',
    'INVESTIGATION NOTES',
    'RELATED RECORDS'
  ];


  backToIncidentReports(): void {

    if (
      this.accessService
        .isApplicationInteractionLocked()
    ) {
      return;
    }

    this.router.navigate([
      '/police-portal'
    ]);

  }


  /*
   * ==========================================================
   * WITNESS STATEMENT
   * ==========================================================
   */

  witnessStatementOpen =
    false;


  /*
   * ==========================================================
   * HACKER EVENT
   * ==========================================================
   */

  pageFrozen =
    signal(false);

  glitchActive =
    signal(false);

  hackerModalOpen =
    signal(false);

  hackerDisplayedMessage =
    signal('');

  hackerTyping =
    signal(false);

  hackerComplete =
    signal(false);

  torRevealPending =
    signal(false);


  private hackerMessages = [
    'There\'s more going on here than you know.',
    'Something in this case doesn\'t add up.',
    'You\'ve been looking in the right places. Just not all of them.',
    'There\'s another network. More files. Things they don\'t put in public records.',
    'You\'re going to need an account.',
    'Use observer26.',
    'For the passcode: think about who this whole thing started with. No spaces. All lowercase.',
    'I\'ve unlocked the connection for you.',
    'Find me there.\n\n— quietstatic'
  ];


  private hackerMessageIndex =
    0;

  private eventStarted =
    false;


  /*
   * ==========================================================
   * CASE NAVIGATION
   * ==========================================================
   */

  setActiveTab(
    tab: string
  ): void {

    if (
      this.accessService
        .isApplicationInteractionLocked() ||
      this.glitchActive() ||
      this.hackerModalOpen()
    ) {
      return;
    }

    this.activeTab =
      tab;
  }


  /*
   * ==========================================================
   * WITNESS STATEMENT
   * ==========================================================
   */

  openWitnessStatement(): void {

    if (
      this.accessService
        .isApplicationInteractionLocked() ||
      this.glitchActive() ||
      this.hackerModalOpen()
    ) {
      return;
    }

    const witness =
      AMHERST_POLICE_WITNESSES.find(
        witness =>
          witness.statementId ===
          'WS-24-001'
      );

    if (witness) {

      this.accessService.discoverWitness(
        witness.id,
        'AMHERST PD INVESTIGATION PORTAL',
        true
      );

    }

    this.witnessStatementOpen =
      true;
  }


  closeWitnessStatement(): void {

    if (
      !this.witnessStatementOpen
    ) {
      return;
    }

    this.witnessStatementOpen =
      false;

    this.startHackerEvent();
  }


  /*
   * ==========================================================
   * START HACKER EVENT
   * ==========================================================
   */

  private startHackerEvent(): void {

    if (
      this.eventStarted
    ) {
      return;
    }

    if (
      this.accessService
        .hasHackerEventTriggered()
    ) {
      return;
    }

    this.eventStarted =
      true;


    /*
     * ==========================================================
     * APPLICATION LOCK
     * ==========================================================
     *
     * The player is locked out immediately after closing the
     * witness statement.
     *
     * The UI remains completely normal-looking.
     *
     * The three-second delay happens while the entire
     * application is non-interactive.
     */

    this.accessService
      .lockApplicationInteraction();


    /*
     * Quiet delay before anything happens.
     */

    setTimeout(
      () => {

        this.beginGlitchSequence();

      },
      3000
    );

  }

  /*
   * ==========================================================
   * GLITCH
   * ==========================================================
   */

  private beginGlitchSequence(): void {

    this.pageFrozen.set(
      true
    );

    this.glitchActive.set(
      true
    );

    setTimeout(
      () => {

        this.glitchActive.set(
          false
        );

        this.openHackerModal();

      },
      1000
    );

  }


  /*
   * ==========================================================
   * OPEN HACKER MODAL
   * ==========================================================
   */

  private openHackerModal(): void {

    this.accessService
      .triggerHackerEvent();

    this.hackerModalOpen.set(
      true
    );

    this.hackerComplete.set(
      false
    );

    this.hackerTyping.set(
      false
    );

    this.hackerDisplayedMessage.set(
      ''
    );

    this.hackerMessageIndex =
      0;

    setTimeout(
      () => {

        this.typeNextMessage();

      },
      1500
    );

  }


  /*
   * ==========================================================
   * TYPE NEXT MESSAGE
   * ==========================================================
   */

  private typeNextMessage(): void {

    if (
      this.hackerMessageIndex >=
      this.hackerMessages.length
    ) {

      this.finishHackerEvent();

      return;
    }

    const message =
      this.hackerMessages[
        this.hackerMessageIndex
      ];

    this.hackerDisplayedMessage.set(
      ''
    );

    this.hackerTyping.set(
      true
    );

    let characterIndex =
      0;


    const typeCharacter = () => {

      if (
        characterIndex >=
        message.length
      ) {

        this.hackerTyping.set(
          false
        );

        setTimeout(
          () => {

            this.hackerMessageIndex++;

            this.typeNextMessage();

          },
          4000
        );

        return;
      }


      this.hackerDisplayedMessage.update(
        current =>
          current +
          message.charAt(
            characterIndex
          )
      );

      characterIndex++;


      const delay =
        30 +
        Math.floor(
          Math.random() * 35
        );


      setTimeout(
        typeCharacter,
        delay
      );

    };


    typeCharacter();

  }


  /*
   * ==========================================================
   * FINISH
   * ==========================================================
   */

  private finishHackerEvent(): void {

    this.hackerComplete.set(
      true
    );

    this.hackerTyping.set(
      false
    );

    setTimeout(
      () => {

        this.closeHackerModal();

      },
      2500
    );

  }


  /*
   * ==========================================================
   * CLOSE
   * ==========================================================
   */

  private closeHackerModal(): void {

    this.hackerModalOpen.set(
      false
    );

    this.pageFrozen.set(
      false
    );


    /*
     * The hacker event is complete.
     *
     * Notebook clues are added before gameplay resumes.
     */

    this.accessService
      .completeHackerEvent();


    /*
     * ==========================================================
     * APPLICATION UNLOCK
     * ==========================================================
     *
     * The player immediately regains full application
     * functionality.
     *
     * TOR IS NOT UNLOCKED YET.
     */

    this.accessService
      .unlockApplicationInteraction();


    /*
     * Give the player three seconds of normal gameplay
     * before revealing the TOR Browser.
     */

    setTimeout(
      () => {

        this.revealTorBrowser();

      },
      3000
    );

  }

  /*
   * ==========================================================
   * REVEAL TOR
   * ==========================================================
   */

  private revealTorBrowser(): void {

    this.torRevealPending.set(
      true
    );

    this.accessService
      .unlockTorBrowser();

  }

}