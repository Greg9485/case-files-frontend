import { DOCUMENT } from '@angular/common';

import {
  Injectable,
  inject,
  signal
} from '@angular/core';

export interface WitnessDiscovery {
  source: string;
  identityKnown: boolean;
}

export interface NotebookClue {
  id: string;
  source: string;
  content: string;
}

export interface PlayerNote {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AccessNotificationType =
  | 'WITNESS'
  | 'NOTEBOOK';

export interface AccessNotification {
  id: number;
  type: AccessNotificationType;
  count: number;
}

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
  notebookUnlocked: boolean;
  torBrowserUnlocked: boolean;

  darkWebAuthenticated: boolean;
  darkWebUsername: string | null;
  darkWebAuthenticatedAt: Date | null;

  witnessDiscoveries: Record<
    string,
    WitnessDiscovery[]
  >;

  notebookClues: NotebookClue[];
  playerNotes: PlayerNote[];
}

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private access: InvestigatorAccess = {
    investigatorId: 'INV-74291',
    caseId: 'AMPD-001',

    username: 'AMPD_INV_74291',
    password: 'CARTER-74291',

    accessLevel: 'RESTRICTED',

    authenticated: false,
    authenticatedAt: null,

    policePortalUnlocked: false,
    witnessesUnlocked: false,
    hackerEventTriggered: false,
    notebookUnlocked: false,
    torBrowserUnlocked: false,

    darkWebAuthenticated: false,
    darkWebUsername: null,
    darkWebAuthenticatedAt: null,

    witnessDiscoveries: {},

    notebookClues: [],
    playerNotes: []
  };

  policePortalUnlockedSignal =
    signal(false);

  witnessesUnlockedSignal =
    signal(false);

  hackerEventTriggeredSignal =
    signal(false);

  notebookUnlockedSignal =
    signal(false);

  torBrowserUnlockedSignal =
    signal(false);

  darkWebAuthenticatedSignal =
    signal(false);

  witnessDiscoveriesSignal =
    signal<Record<string, WitnessDiscovery[]>>({});

  notebookCluesSignal =
    signal<NotebookClue[]>([]);

  playerNotesSignal =
    signal<PlayerNote[]>([]);

  /*
   * ============================================================
   * SIDEBAR NOTIFICATIONS
   * ============================================================
   */

  witnessesNotificationSignal =
    signal(false);

  notebookNotificationSignal =
    signal(false);

  /*
   * ============================================================
   * TOAST NOTIFICATIONS
   * ============================================================
   */

  notificationsSignal =
    signal<AccessNotification[]>([]);

  private notificationId = 0;

  private notify(
    type: AccessNotificationType
  ): void {

    const notification: AccessNotification = {
      id: ++this.notificationId,
      type,
      count: 1
    };

    this.notificationsSignal.update(
      notifications => [
        ...notifications,
        notification
      ]
    );
  }

    /*
   * ============================================================
   * APPLICATION INTERACTION LOCK
   * ============================================================
   *
   * This is a transient gameplay state.
   *
   * When active, the entire Case Files application becomes
   * non-interactive without changing the appearance of the UI.
   *
   * This intentionally lives outside InvestigatorAccess because
   * it is not an investigator permission or persistent unlock.
   */

  applicationInteractionLockedSignal =
    signal(false);

  private document =
    inject(DOCUMENT);

  private readonly blockedInteractionEvents = [
    'pointerdown',
    'mousedown',
    'touchstart',
    'click',
    'keydown',
    'contextmenu'
  ] as const;

  private readonly blockInteraction =
    (event: Event): void => {

      if (
        !this.applicationInteractionLockedSignal()
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    };


  constructor() {

    if (
      typeof window === 'undefined'
    ) {
      return;
    }

    for (
      const eventName of
      this.blockedInteractionEvents
    ) {

      this.document.addEventListener(
        eventName,
        this.blockInteraction,
        true
      );

    }

  }


  isApplicationInteractionLocked(): boolean {

    return this.applicationInteractionLockedSignal();

  }


  lockApplicationInteraction(): void {

    this.applicationInteractionLockedSignal.set(
      true
    );

  }


  unlockApplicationInteraction(): void {

    this.applicationInteractionLockedSignal.set(
      false
    );

  }

  getAccess(): InvestigatorAccess {
    return this.access;
  }

  // ============================================================
  // POLICE PORTAL ACCESS
  // ============================================================

  isPolicePortalUnlocked(): boolean {
    return this.policePortalUnlockedSignal();
  }

  unlockPolicePortal(): void {

    this.access = {
      ...this.access,
      policePortalUnlocked: true
    };

    this.policePortalUnlockedSignal.set(true);
  }

  // ============================================================
  // WITNESSES
  // ============================================================

  isWitnessesUnlocked(): boolean {
    return this.witnessesUnlockedSignal();
  }

  unlockWitnesses(): void {

    if (
      this.witnessesUnlockedSignal()
    ) {
      return;
    }

    this.access = {
      ...this.access,
      witnessesUnlocked: true
    };

    this.witnessesUnlockedSignal.set(true);
  }

  clearWitnessesNotification(): void {
    this.witnessesNotificationSignal.set(false);
  }

  // ============================================================
  // WITNESS DISCOVERY
  // ============================================================

  discoverWitness(
    witnessId: string,
    source: string,
    identityKnown: boolean
  ): void {

    /*
     * Any discovered witness unlocks the Witnesses
     * player-reference system.
     *
     * The source of the discovery does not matter.
     */
    this.unlockWitnesses();

    const existingDiscoveries =
      this.access.witnessDiscoveries[witnessId] ?? [];

    const existingDiscovery =
      existingDiscoveries.find(
        discovery =>
          discovery.source === source
      );

    /*
     * This witness has already been discovered
     * from this source.
     *
     * If the identity is now known, allow the
     * identity-reveal logic to handle it.
     *
     * Do not generate another notification for
     * simply viewing the same information again.
     */
    if (existingDiscovery) {

      if (identityKnown) {
        this.revealWitnessIdentity(
          witnessId
        );
      }

      return;
    }

    const updatedDiscoveries = [
      ...existingDiscoveries,
      {
        source,
        identityKnown
      }
    ];

    const updatedWitnessDiscoveries = {
      ...this.access.witnessDiscoveries,
      [witnessId]: updatedDiscoveries
    };

    this.access = {
      ...this.access,
      witnessDiscoveries:
        updatedWitnessDiscoveries
    };

    this.witnessDiscoveriesSignal.set(
      updatedWitnessDiscoveries
    );

    /*
     * New witness information.
     *
     * This drives both:
     * - the persistent sidebar NEW indicator
     * - the immediate toast notification
     */
    this.witnessesNotificationSignal.set(true);

    this.notify('WITNESS');
  }

  hasDiscoveredWitness(
    witnessId: string
  ): boolean {

    return (
      (
        this.access.witnessDiscoveries[
          witnessId
        ] ?? []
      ).length > 0
    );
  }

  isWitnessIdentityKnown(
    witnessId: string
  ): boolean {

    return (
      this.getWitnessDiscoveries(
        witnessId
      ).some(
        discovery =>
          discovery.identityKnown
      )
    );
  }

  getWitnessDiscoveries(
    witnessId: string
  ): WitnessDiscovery[] {

    return (
      this.witnessDiscoveriesSignal()[
        witnessId
      ] ?? []
    );
  }

  revealWitnessIdentity(
    witnessId: string
  ): void {

    const discoveries =
      this.access.witnessDiscoveries[
        witnessId
      ] ?? [];

    if (!discoveries.length) {
      return;
    }

    /*
     * Only notify if the identity actually
     * changes from unknown to known.
     */
    const identityWasUnknown =
      discoveries.some(
        discovery =>
          !discovery.identityKnown
      );

    if (!identityWasUnknown) {
      return;
    }

    const updatedDiscoveries =
      discoveries.map(
        discovery => ({
          ...discovery,
          identityKnown: true
        })
      );

    const updatedWitnessDiscoveries = {
      ...this.access.witnessDiscoveries,
      [witnessId]: updatedDiscoveries
    };

    this.access = {
      ...this.access,
      witnessDiscoveries:
        updatedWitnessDiscoveries
    };

    this.witnessDiscoveriesSignal.set(
      updatedWitnessDiscoveries
    );

    /*
     * Revealing an identity is new witness
     * information.
     */
    this.witnessesNotificationSignal.set(true);

    this.notify('WITNESS');
  }

  // ============================================================
  // HACKER EVENT
  // ============================================================

  hasHackerEventTriggered(): boolean {
    return this.hackerEventTriggeredSignal();
  }

  triggerHackerEvent(): boolean {

    if (
      this.hackerEventTriggeredSignal()
    ) {
      return false;
    }

    this.access = {
      ...this.access,
      hackerEventTriggered: true
    };

    this.hackerEventTriggeredSignal.set(
      true
    );

    return true;
  }

  completeHackerEvent(): void {

    this.addNotebookClue({
      id: 'hacker-event-username',
      source: 'HACKER EVENT',
      content:
        'Username: observer26.'
    });

    this.addNotebookClue({
      id: 'hacker-event-passcode',
      source: 'HACKER EVENT',
      content:
        'For the passcode: think about who this whole thing started with. No spaces. All lowercase.'
    });
  }

  // ============================================================
  // NOTEBOOK
  // ============================================================

  isNotebookUnlocked(): boolean {
    return this.notebookUnlockedSignal();
  }

  unlockNotebook(): void {

    if (
      this.notebookUnlockedSignal()
    ) {
      return;
    }

    this.access = {
      ...this.access,
      notebookUnlocked: true
    };

    this.notebookUnlockedSignal.set(true);
  }

  clearNotebookNotification(): void {
    this.notebookNotificationSignal.set(false);
  }

  addNotebookClue(
    clue: NotebookClue
  ): void {

    const alreadyExists =
      this.access.notebookClues.some(
        existing =>
          existing.id === clue.id
      );

    if (alreadyExists) {
      return;
    }

    const updatedClues = [
      ...this.access.notebookClues,
      clue
    ];

    this.access = {
      ...this.access,
      notebookClues: updatedClues
    };

    this.notebookCluesSignal.set(
      updatedClues
    );

    /*
     * Every genuinely new notebook clue is
     * new information for the player.
     */
    this.notebookNotificationSignal.set(true);

    this.notify('NOTEBOOK');
  }

  getNotebookClues(): NotebookClue[] {
    return this.notebookCluesSignal();
  }

  // ============================================================
  // PLAYER NOTES
  // ============================================================

  getPlayerNotes(): PlayerNote[] {
    return this.playerNotesSignal();
  }

  addPlayerNote(
    title: string,
    body: string
  ): PlayerNote {

    const now = new Date();

    const note: PlayerNote = {
      id: `note-${Date.now()}`,
      title: title.trim(),
      body,
      createdAt: now,
      updatedAt: now
    };

    const updatedNotes = [
      ...this.access.playerNotes,
      note
    ];

    this.access = {
      ...this.access,
      playerNotes: updatedNotes
    };

    this.playerNotesSignal.set(
      updatedNotes
    );

    return note;
  }

  updatePlayerNote(
    noteId: string,
    title: string,
    body: string
  ): void {

    const updatedNotes =
      this.access.playerNotes.map(
        note =>
          note.id === noteId
            ? {
                ...note,
                title: title.trim(),
                body,
                updatedAt: new Date()
              }
            : note
      );

    this.access = {
      ...this.access,
      playerNotes: updatedNotes
    };

    this.playerNotesSignal.set(
      updatedNotes
    );
  }

  deletePlayerNote(
    noteId: string
  ): void {

    const updatedNotes =
      this.access.playerNotes.filter(
        note =>
          note.id !== noteId
      );

    this.access = {
      ...this.access,
      playerNotes: updatedNotes
    };

    this.playerNotesSignal.set(
      updatedNotes
    );
  }

  // ============================================================
  // TOR BROWSER
  // ============================================================

  isTorBrowserUnlocked(): boolean {
    return this.torBrowserUnlockedSignal();
  }

  unlockTorBrowser(): void {

    this.access = {
      ...this.access,
      torBrowserUnlocked: true
    };

    this.torBrowserUnlockedSignal.set(
      true
    );
  }

  // ============================================================
  // POLICE PORTAL AUTHENTICATION
  // ============================================================

  isAuthenticated(): boolean {
    return this.access.authenticated;
  }

  authenticate(
    username: string,
    password: string
  ): boolean {

    if (
      username.trim().toLowerCase() ===
        this.access.username.toLowerCase() &&
      password === this.access.password
    ) {

      this.access = {
        ...this.access,
        authenticated: true,
        authenticatedAt: new Date()
      };

      return true;
    }

    return false;
  }

  logout(): void {

    this.access = {
      ...this.access,
      authenticated: false,
      authenticatedAt: null
    };
  }

  // ============================================================
  // DARK WEB AUTHENTICATION
  // ============================================================

  isDarkWebAuthenticated(): boolean {
    return this.darkWebAuthenticatedSignal();
  }

  authenticateDarkWeb(
    username: string,
    password: string
  ): boolean {

    const normalizedUsername =
      username.trim().toLowerCase();

    const validUsername =
      'observer26';

    const validPassword =
      'emilycarter';

    if (
      normalizedUsername !==
        validUsername ||
      password !== validPassword
    ) {
      return false;
    }

    this.access = {
      ...this.access,
      darkWebAuthenticated: true,
      darkWebUsername:
        normalizedUsername,
      darkWebAuthenticatedAt:
        new Date()
    };

    this.darkWebAuthenticatedSignal.set(
      true
    );

    return true;
  }
}