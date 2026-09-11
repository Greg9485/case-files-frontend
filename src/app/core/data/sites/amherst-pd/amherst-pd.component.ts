import {
  ChangeDetectorRef,
  Component,
  Input,
  inject
} from '@angular/core';

import {
  FakePage
} from '../../../models/fake-page';

import {
  FakeSite
} from '../../../models/fake-site';

import {
  AccessService
} from '../../../services/access';


@Component({
  selector: 'app-amherst-pd',
  standalone: true,
  imports: [],
  templateUrl: './amherst-pd.component.html',
  styleUrl: './amherst-pd.component.scss'
})
export class AmherstPdComponent {

  private accessService =
    inject(AccessService);

  private cdr =
    inject(ChangeDetectorRef);

  @Input()
  page!: FakePage;


  @Input()
  site!: FakeSite;


  @Input()
  navigate!: (
    path: string,
    domain?: string
  ) => void;


  /*
   * Kept as an input for compatibility with BrowserComponent.
   * Public Amherst PD navigation no longer uses this route.
   */
  @Input()
  openExternalRoute!: (
    route: string
  ) => void;


  witnessesUnlocked =
    this.accessService.isWitnessesUnlocked();


  metadataVisible = false;

  portalUnlockedToast = false;


  get incident() {

    return this.page.incidents?.[0];

  }


  isIncidentList(): boolean {

    return this.page.type === 'POLICE_INCIDENT_LIST';

  }


  isIncident(): boolean {

    return this.page.type === 'POLICE_INCIDENT';

  }


  isCaseFile(): boolean {

    return this.page.type === 'POLICE_CASE_FILE';

  }


  revealWitness(): void {

    this.accessService.unlockWitnesses();

    this.witnessesUnlocked = true;

  }


  viewMetadata(): void {

    this.metadataVisible = true;

  }


  closeMetadata(): void {

    this.metadataVisible = false;


    if (
      !this.accessService.isPolicePortalUnlocked()
    ) {

      this.accessService.unlockPolicePortal();

      this.showPortalUnlockedToast();

    }

  }


  private showPortalUnlockedToast(): void {

    this.portalUnlockedToast = true;


    setTimeout(() => {

      this.portalUnlockedToast = false;

      this.cdr.detectChanges();

    }, 3000);

  }


  navigateBackToIncident(): void {

    this.navigate(
      '/incidents/24-1017',
      'amherstpd.local'
    );

  }


  navigateToIncidentList(): void {

    this.navigate(
      '/incidents',
      'amherstpd.local'
    );

  }

}