import { Injectable } from '@angular/core';

export interface InvestigatorAccess {
  investigatorId: string;
  caseId: string;
  username: string;
  password: string;
  accessLevel: 'RESTRICTED';
  authenticated: boolean;
  authenticatedAt: Date | null;
  browserUnlocked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private access: InvestigatorAccess = {
    investigatorId: 'INV-74291',
    caseId: 'HC-001',
    username: 'HC_INV_74291',
    password: 'CARTER-74291',
    accessLevel: 'RESTRICTED',
    authenticated: false,
    authenticatedAt: null,
    browserUnlocked: false
  };


  getAccess(): InvestigatorAccess {
    return this.access;
  }


  isAuthenticated(): boolean {
    return this.access.authenticated;
  }


  isBrowserUnlocked(): boolean {
    return this.access.browserUnlocked;
  }


  unlockBrowser(): void {
    this.access = {
      ...this.access,
      browserUnlocked: true
    };
  }


  authenticate(
    username: string,
    password: string
  ): boolean {

    if (
      username === this.access.username &&
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