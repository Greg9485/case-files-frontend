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


interface CaseStatement {
  id: string;
  recordNumber: string;
  subjectName: string;
  recordType: string;
  interviewDate: string;
  interviewLocation: string;
  paragraphs: string[];
}


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

  selectedStatement: CaseStatement | null = null;

  readonly caseStatements: CaseStatement[] = [
    {
      id: 'emily-vehicle-001',
      recordNumber: 'SUPPLEMENTAL-24-0964',
      subjectName: 'Emily Carter',
      recordType: 'REPORTING PARTY STATEMENT',
      interviewDate: 'SEPTEMBER 30, 2024',
      interviewLocation: 'AMHERST POLICE DEPARTMENT',
      paragraphs: [
        'Carter stated that she noticed a dark olive-green, older boxy SUV with a rear-mounted spare tire and a small rust spot above the right rear wheel arch near a gravel pull-off along U.S. Route 29.',
        'She said the SUV entered the road behind her and remained behind her through two turns toward Old Mill Road. She could not see the driver clearly and did not obtain a plate number.',
        'Carter said she felt unsafe and drove to a well-lit business. The SUV continued along the road and did not enter the lot. She requested that the contact be documented.'
      ]
    },
    {
      id: 'emily-vehicle-002',
      recordNumber: 'SUPPLEMENTAL-24-1004',
      subjectName: 'Emily Carter',
      recordType: 'REPORTING PARTY STATEMENT',
      interviewDate: 'OCTOBER 11, 2024',
      interviewLocation: 'AMHERST POLICE DEPARTMENT',
      paragraphs: [
        'Carter reported a second encounter with a dark sport utility vehicle on South Main Street. She described it as a newer, charcoal-black midsize SUV with heavily tinted rear windows and a narrow chrome strip across the grille. It had no rear-mounted spare tire and did not match the older olive-green SUV in her September report.',
        'Carter said the SUV slowed alongside her vehicle. An occupant shouted, “BACK OFF THE DEVELOPMENT.” She was unable to identify the speaker or obtain a license plate before the SUV pulled ahead and turned away.',
        'Carter stated that the encounter made her feel unsafe and asked that the statement be added to the case record.'
      ]
    },
    {
      id: 'martin-hale',
      recordNumber: 'WITNESS-001',
      subjectName: 'Martin Hale',
      recordType: 'WITNESS STATEMENT',
      interviewDate: 'OCTOBER 18, 2024',
      interviewLocation: 'AMHERST POLICE DEPARTMENT',
      paragraphs: [
        'My name is Martin Hale. I was in downtown Amherst during the evening of October 17, 2024. I saw Emily Carter standing beside a dark olive-green SUV near the municipal parking area.',
        'The SUV I noticed was a dark olive-green, older boxy SUV with a rear-mounted spare tire and a small rust spot above the right rear wheel arch.',
        'I heard that SUV start and leave the lot. I did not see Emily get into it, and I did not see her drive away in her own vehicle. Her vehicle was still in the municipal lot when I left. I later learned it had been towed and impounded.'
      ]
    }
  ];


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

  openWitnessStatement(statementId: string): void {

    if (
      this.accessService
        .isApplicationInteractionLocked() ||
      this.glitchActive() ||
      this.hackerModalOpen()
    ) {
      return;
    }

    const statement = this.caseStatements.find(
      item => item.id === statementId
    );

    if (!statement) {
      return;
    }

    this.selectedStatement = statement;

    if (statement.id === 'martin-hale') {
      const witness = AMHERST_POLICE_WITNESSES.find(
        item => item.statementId === 'WS-24-001'
      );

      if (witness) {
        this.accessService.discoverWitness(
          witness.id,
          'AMHERST PD INVESTIGATION PORTAL',
          true
        );
      }

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

    if (this.selectedStatement?.id === 'martin-hale') {
      this.startHackerEvent();
    }
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
