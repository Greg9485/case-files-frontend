import { Component, inject } from '@angular/core';

import { AccessService } from '../../core/services/access';

@Component({

  selector: 'app-case-file',

  imports: [],

  templateUrl: './case-file.html',

  styleUrl: './case-file.scss'

})

export class CaseFileComponent {

  private accessService = inject(AccessService);


  witnessesUnlocked =
    this.accessService.isWitnessesUnlocked();


  metadataVisible = false;

  portalUnlockedToast = false;


  revealWitness(): void {

    this.accessService.unlockWitnesses();

    this.witnessesUnlocked = true;

  }


  viewMetadata(): void {

    this.metadataVisible = true;

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