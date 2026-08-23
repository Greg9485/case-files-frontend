import { Injectable, signal } from '@angular/core';

export interface InvestigatorAccess {
  investigatorId: string;
  caseId: string;
  username: string;
  password: string;
  accessLevel: 'RESTRICTED';
  authenticated: boolean;
  authenticatedAt: Date | null;
  browserUnlocked: boolean;
  witnessesUnlocked: boolean;
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
    browserUnlocked: false,
    witnessesUnlocked: false
  };


    browserUnlockedSignal = signal(false);

    witnessesUnlockedSignal = signal(false);
    
  getAccess(): InvestigatorAccess {
    return this.access;
  }


  isAuthenticated(): boolean {
    return this.access.authenticated;
  }


  isBrowserUnlocked(): boolean {
    return this.browserUnlockedSignal();
  }


  unlockBrowser(): void {

    this.access = {
      ...this.access,
      browserUnlocked: true
    };

    this.browserUnlockedSignal.set(true);

  }


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


  authenticate(
    username: string,
    password: string
  ): boolean {

    if (
      username.trim().toLowerCase() === this.access.username.toLowerCase() &&
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