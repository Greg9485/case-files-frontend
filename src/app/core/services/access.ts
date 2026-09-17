import {
  Injectable,
  signal
} from '@angular/core';

export interface WitnessDiscovery {
  source: string;
  identityKnown: boolean;
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
  torBrowserUnlocked: boolean;

  darkWebAuthenticated: boolean;
  darkWebUsername: string | null;
  darkWebAuthenticatedAt: Date | null;

  witnessDiscoveries: Record<
    string,
    WitnessDiscovery[]
  >;
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
    torBrowserUnlocked: false,

    darkWebAuthenticated: false,
    darkWebUsername: null,
    darkWebAuthenticatedAt: null,

    witnessDiscoveries: {}
  };

  policePortalUnlockedSignal =
    signal(false);

  witnessesUnlockedSignal =
    signal(false);

  hackerEventTriggeredSignal =
    signal(false);

  torBrowserUnlockedSignal =
    signal(false);

  darkWebAuthenticatedSignal =
    signal(false);

  witnessDiscoveriesSignal =
    signal<
      Record<string, WitnessDiscovery[]>
    >({});


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

    this.policePortalUnlockedSignal.set(
      true
    );
  }


  isWitnessesUnlocked(): boolean {
    return this.witnessesUnlockedSignal();
  }


  unlockWitnesses(): void {

    this.access = {
      ...this.access,
      witnessesUnlocked: true
    };

    this.witnessesUnlockedSignal.set(
      true
    );
  }


  // ============================================================
  // WITNESS DISCOVERY
  // ============================================================

  discoverWitness(
    witnessId: string,
    source: string,
    identityKnown: boolean
  ): void {

    const existingDiscoveries =
      this.access.witnessDiscoveries[
        witnessId
      ] ?? [];

    const alreadyDiscovered =
      existingDiscoveries.some(
        discovery =>
          discovery.source === source
      );

    if (alreadyDiscovered) {

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
      [witnessId]:
        updatedDiscoveries
    };

    this.access = {
      ...this.access,
      witnessDiscoveries:
        updatedWitnessDiscoveries
    };

    this.witnessDiscoveriesSignal.set(
      updatedWitnessDiscoveries
    );
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

    const updatedDiscoveries =
      discoveries.map(
        discovery => ({
          ...discovery,
          identityKnown: true
        })
      );

    const updatedWitnessDiscoveries = {
      ...this.access.witnessDiscoveries,
      [witnessId]:
        updatedDiscoveries
    };

    this.access = {
      ...this.access,
      witnessDiscoveries:
        updatedWitnessDiscoveries
    };

    this.witnessDiscoveriesSignal.set(
      updatedWitnessDiscoveries
    );
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
      username
        .trim()
        .toLowerCase();

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
