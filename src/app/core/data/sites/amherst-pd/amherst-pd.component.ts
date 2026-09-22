import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
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

import {
  AMHERST_POLICE_WITNESSES
} from './amherst-pd-witnesses';


@Component({
  selector: 'app-amherst-pd',
  standalone: true,
  imports: [],
  templateUrl: './amherst-pd.component.html',
  styleUrl: './amherst-pd.component.scss'
})
export class AmherstPdComponent
  implements OnChanges {

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


  metadataVisible = false;

  portalUnlockedToast = false;


  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (
      changes['page'] &&
      this.isWitnessStatement()
    ) {

      if (this.witness) {

        this.accessService.discoverWitness(
          this.witness.id,
          'PUBLIC POLICE RECORDS',
          this.witness.publicWitnessName !==
            '[REDACTED]'
        );

      }

    }

  }


  get incident() {
    return this.page.incidents?.[0];
  }


  get witness() {
    return AMHERST_POLICE_WITNESSES.find(
      witness =>
        witness.id === this.page.witnessId
    );
  }


  isIncidentList(): boolean {
    return (
      this.page.type ===
      'POLICE_INCIDENT_LIST'
    );
  }


  isIncident(): boolean {
    return (
      this.page.type ===
      'POLICE_INCIDENT'
    );
  }


  isCaseFile(): boolean {
    return (
      this.page.type ===
      'POLICE_CASE_FILE'
    );
  }


  isWitnessStatement(): boolean {
    return (
      this.page.type ===
      'POLICE_WITNESS_STATEMENT'
    );
  }


  viewMetadata(): void {
    this.metadataVisible = true;
  }


  closeMetadata(): void {

    this.metadataVisible = false;


    /*
     * The public metadata event is the
     * moment the player gains access to
     * the Investigation Portal and Notebook.
     *
     * This is intentionally one-time.
     */

    if (
      this.accessService.isPolicePortalUnlocked()
    ) {
      return;
    }


    this.accessService.unlockPolicePortal();

    this.accessService.unlockNotebook();


    /*
     * ==========================================================
     * INITIAL NOTEBOOK CLUES
     * ==========================================================
     */

    this.accessService.addNotebookClue({
      id:
        'public-police-investigation-credentials',

      source:
        'AMHERST PD INVESTIGATION PORTAL',

      content:
        'Amherst PD Investigation Login Credentials Found\n\nUSERNAME: ampd_inv_74291\nPASSWORD: CARTER-74291'
    });


    this.accessService.addNotebookClue({
      id:
        'public-police-metadata-ampd-inv-0017',

      source:
        'PUBLIC POLICE RECORDS',

      content:
        'ampd_inv_0017.jpg was captured October 17, 2024 at 10:17:43 PM in Amherst, Virginia using an Apple iPhone 13. GPS: 37.5856 N, 79.0514 W.'
    });


    this.showPortalUnlockedToast();

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


  navigateBackToCaseFile(): void {

    this.navigate(
      '/incidents/24-1017/case-file',
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