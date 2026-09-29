import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccessService } from '../../core/services/access';
import { EvidenceService } from '../../core/services/evidence';

@Component({
  selector: 'app-case-file',
  imports: [],
  templateUrl: './case-file.html',
  styleUrl: './case-file.scss'
})
export class CaseFileComponent {

  private accessService = inject(AccessService);
  private evidenceService = inject(EvidenceService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  witnessesUnlocked =
    this.accessService.isWitnessesUnlocked();

  metadataVisible = this.route.snapshot.queryParamMap.get('source') === 'attachment-metadata';

  portalUnlockedToast = false;


  revealWitness(): void {

    this.accessService.unlockWitnesses();

    this.witnessesUnlocked = true;

  }


  viewMetadata(): void {

    this.metadataVisible = true;

  }


  closeMetadata(): void {

    this.metadataVisible = false;
    this.evidenceService.discover('attachment-metadata');
    if (this.route.snapshot.queryParamMap.has('source')) {
      void this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { source: null },
        queryParamsHandling: 'merge',
        replaceUrl: true
      });
    }

    if (!this.accessService.isPolicePortalUnlocked()) {

      this.accessService.unlockPolicePortal();

      this.showPortalUnlockedToast();

    }

  }


  private showPortalUnlockedToast(): void {

    this.portalUnlockedToast = true;

    setTimeout(() => {

      this.portalUnlockedToast = false;

    }, 3000);

  }

}
