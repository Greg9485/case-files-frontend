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
export class AmherstPdComponent implements OnChanges {

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

      this.accessService.unlockWitnesses();

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

    return this.page.type === 'POLICE_INCIDENT_LIST';

  }


  isIncident(): boolean {

    return this.page.type === 'POLICE_INCIDENT';

  }


  isCaseFile(): boolean {

    return this.page.type === 'POLICE_CASE_FILE';

  }


  isWitnessStatement(): boolean {

    return this.page.type === 'POLICE_WITNESS_STATEMENT';

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