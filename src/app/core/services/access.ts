import { Injectable, signal } from '@angular/core';

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
    torBrowserUnlocked: false
  };


  policePortalUnlockedSignal = signal(false);

  witnessesUnlockedSignal = signal(false);

  hackerEventTriggeredSignal = signal(false);

  torBrowserUnlockedSignal = signal(false);


  getAccess(): InvestigatorAccess {
    return this.access;
  }


  /* =========================
     POLICE PORTAL ACCESS
  ========================= */

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


  /* =========================
     WITNESSES ACCESS
  ========================= */

  isWitnessesUnlocked(): boolean {
    return this.witnessesUnlockedSignal();
  }


  unlockWitnesses(): void {

    this.access = {
      ...this.access,
      witnessesUnlocked: true
    };

    this.witnessesUnlockedSignal.set(true);
  }


  /* =========================
     HACKER EVENT
  ========================= */

  hasHackerEventTriggered(): boolean {
    return this.hackerEventTriggeredSignal();
  }


  triggerHackerEvent(): boolean {

    if (this.hackerEventTriggeredSignal()) {
      return false;
    }

    this.access = {
      ...this.access,
      hackerEventTriggered: true
    };

    this.hackerEventTriggeredSignal.set(true);

    return true;
  }


  /* =========================
     TOR BROWSER ACCESS
  ========================= */

  isTorBrowserUnlocked(): boolean {
    return this.torBrowserUnlockedSignal();
  }


  unlockTorBrowser(): void {

    this.access = {
      ...this.access,
      torBrowserUnlocked: true
    };

    this.torBrowserUnlockedSignal.set(true);
  }


  /* =========================
     AUTHENTICATION
  ========================= */

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

}