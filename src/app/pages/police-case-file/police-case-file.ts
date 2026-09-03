import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  AccessService
} from '../../core/services/access';


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


  /*
   * ==========================================================
   * CASE NAVIGATION
   * ==========================================================
   */

  activeTab =
    'CASE SUMMARY';


  tabs = [
    'CASE SUMMARY',
    'INCIDENT REPORTS',
    'WITNESS STATEMENTS',
    'EVIDENCE',
    'INVESTIGATION NOTES',
    'RELATED RECORDS'
  ];


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


  /*
   * ==========================================================
   * HACKER MESSAGES
   * ==========================================================
   *
   * The player should understand:
   *
   * 1. Someone is contacting them.
   * 2. The police portal is compromised.
   * 3. There is another network.
   * 4. A new TOR BROWSER option will appear.
   * 5. They need to go there.
   *
   * We are NOT giving away the entire mystery.
   * We are giving the player a clear next action.
   */

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
      this.glitchActive()
      ||
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
      this.glitchActive()
      ||
      this.hackerModalOpen()
    ) {
      return;
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


    setTimeout(
      () => {

        this.revealTorBrowser();

      },
      1000
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