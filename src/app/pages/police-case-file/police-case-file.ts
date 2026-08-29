import { Component, inject, signal } from '@angular/core';
import { AccessService } from '../../core/services/access';

export interface InvestigatorAccess {
  investigatorId: string;
  caseId: string;
  username: string;
  password: string;
  accessLevel: 'RESTRICTED';
  authenticated: boolean;
  authenticatedAt: Date | null;

  policePortalUnlocked: boolean;
  witnessesUnlocked: boolean;
  hackerEventTriggered: boolean;
  torBrowserUnlocked: boolean;
}

@Component({
  selector: 'app-police-case-file',
  imports: [],
  templateUrl: './police-case-file.html',
  styleUrl: './police-case-file.scss'
})
export class PoliceCaseFileComponent {

  private accessService = inject(AccessService);


  /*
   * =========================
   * CASE NAVIGATION
   * =========================
   */

  activeTab = 'CASE SUMMARY';

  tabs = [
    'CASE SUMMARY',
    'INCIDENT REPORTS',
    'WITNESS STATEMENTS',
    'EVIDENCE',
    'INVESTIGATION NOTES',
    'RELATED RECORDS'
  ];


  /*
   * =========================
   * WITNESS STATEMENT
   * =========================
   */

  witnessStatementOpen = false;


  /*
   * =========================
   * HACKER EVENT
   * =========================
   *
   * These are SIGNALS rather than ordinary
   * class properties.
   *
   * This is important because the hacker event
   * is driven by a series of asynchronous timers.
   */

  pageFrozen = signal(false);

  glitchActive = signal(false);

  hackerModalOpen = signal(false);

  hackerDisplayedMessage = signal('');

  hackerTyping = signal(false);

  hackerComplete = signal(false);

  torRevealPending = signal(false);


  /*
   * =========================
   * HACKER MESSAGES
   * =========================
   */

  private hackerMessages = [
    'There\'s more going on here than you know.',
    'Something in this case doesn\'t add up.',
    'Someone doesn\'t want you looking too closely.',
    'There\'s a place that has the information you\'re looking for.',
    'I\'ve unlocked it for you.',
    'Find me there. We need to talk.'
  ];


  private hackerMessageIndex = 0;

  private eventStarted = false;


  /*
   * =========================
   * CASE NAVIGATION
   * =========================
   */

  setActiveTab(tab: string): void {

    /*
     * During the actual glitch/hacker takeover,
     * navigation should no longer be possible.
     *
     * Before that point, the site remains completely
     * functional.
     */

    if (
      this.glitchActive() ||
      this.hackerModalOpen()
    ) {
      return;
    }

    this.activeTab = tab;

  }


  /*
   * =========================
   * WITNESS STATEMENT
   * =========================
   */

  openWitnessStatement(): void {

    /*
     * Don't allow the witness statement to reopen
     * after the hacker sequence has started.
     */

    if (
      this.glitchActive() ||
      this.hackerModalOpen()
    ) {
      return;
    }

    this.witnessStatementOpen = true;

  }


  closeWitnessStatement(): void {

    /*
     * Only the first genuine closing of the witness
     * statement should trigger the event.
     */

    if (!this.witnessStatementOpen) {
      return;
    }

    this.witnessStatementOpen = false;

    this.startHackerEvent();

  }


  /*
   * =========================
   * HACKER EVENT
   * =========================
   */

  private startHackerEvent(): void {

    /*
     * Never allow the event to run more than once.
     */

    if (this.eventStarted) {
      return;
    }


    /*
     * Check persistent progression state too.
     */

    if (this.accessService.hasHackerEventTriggered()) {
      return;
    }


    this.eventStarted = true;


    /*
     * =========================
     * PHASE 1
     * =========================
     *
     * The website continues functioning normally.
     *
     * This is intentionally a quiet 3-second window.
     */

    setTimeout(() => {

      this.beginGlitchSequence();

    }, 3000);

  }


  /*
   * =========================
   * GLITCH SEQUENCE
   * =========================
   */

  private beginGlitchSequence(): void {

    /*
     * The page is now being hijacked.
     *
     * From this point onward navigation is blocked.
     */

    this.pageFrozen.set(true);

    this.glitchActive.set(true);


    /*
     * Let the glitch run for approximately
     * one second.
     */

    setTimeout(() => {

      this.glitchActive.set(false);

      this.openHackerModal();

    }, 1000);

  }


  /*
   * =========================
   * HACKER MODAL
   * =========================
   */

  private openHackerModal(): void {

    /*
     * Permanently record that the hacker event
     * has occurred.
     */

    this.accessService.triggerHackerEvent();


    this.hackerModalOpen.set(true);

    this.hackerComplete.set(false);

    this.hackerTyping.set(false);

    this.hackerDisplayedMessage.set('');

    this.hackerMessageIndex = 0;


    /*
     * Important:
     *
     * The hacker does NOT immediately start typing.
     *
     * We give the player a short moment of blank
     * terminal before the first message appears.
     */

    setTimeout(() => {

      this.typeNextMessage();

    }, 1500);

  }


  /*
   * =========================
   * TYPE NEXT MESSAGE
   * =========================
   */

  private typeNextMessage(): void {

    /*
     * All messages have been displayed.
     */

    if (
      this.hackerMessageIndex >=
      this.hackerMessages.length
    ) {

      this.finishHackerEvent();

      return;

    }


    const message =
      this.hackerMessages[this.hackerMessageIndex];


    /*
     * Start this message blank.
     */

    this.hackerDisplayedMessage.set('');

    this.hackerTyping.set(true);


    let characterIndex = 0;


    /*
     * =========================
     * CHARACTER TYPING
     * =========================
     */

    const typeCharacter = () => {

      if (characterIndex >= message.length) {

        /*
         * Finished typing this message.
         */

        this.hackerTyping.set(false);


        /*
         * Keep the completed message visible
         * for several seconds before moving on.
         *
         * 6.5 seconds gives the player plenty
         * of time to read it.
         */

        setTimeout(() => {

          this.hackerMessageIndex++;

          this.typeNextMessage();

        }, 6500);


        return;

      }


      /*
       * Add exactly one character.
       */

      this.hackerDisplayedMessage.update(
        current =>
          current + message.charAt(characterIndex)
      );


      characterIndex++;


      /*
       * Human-ish typing speed.
       *
       * Most characters arrive around 35–70ms apart.
       */

      const delay =
        35 +
        Math.floor(Math.random() * 40);


      setTimeout(typeCharacter, delay);

    };


    typeCharacter();

  }


  /*
   * =========================
   * FINISH HACKER EVENT
   * =========================
   */

  private finishHackerEvent(): void {

    this.hackerComplete.set(true);

    this.hackerTyping.set(false);


    /*
     * The final message remains on screen for
     * approximately 10 seconds.
     */

    setTimeout(() => {

      this.closeHackerModal();

    }, 5000);

  }


  /*
   * =========================
   * CLOSE HACKER MODAL
   * =========================
   */

  private closeHackerModal(): void {

    this.hackerModalOpen.set(false);

    this.pageFrozen.set(false);


    /*
     * The website has returned to normal.
     *
     * Three seconds later the new TOR BROWSER
     * access becomes visible.
     */

    setTimeout(() => {

      this.revealTorBrowser();

    }, 3000);

  }


  /*
   * =========================
   * TOR BROWSER REVEAL
   * =========================
   */

  private revealTorBrowser(): void {

    this.torRevealPending.set(true);

    this.accessService.unlockTorBrowser();

  }

}