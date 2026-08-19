import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { EvidenceService } from '../../core/services/evidence';
import { Evidence } from '../../core/models/evidence';

@Component({
  selector: 'app-evidence',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './evidence.html',
  styleUrl: './evidence.scss'
})
export class EvidenceComponent {

  private evidenceService = inject(EvidenceService);

  evidence: Evidence[] = this.evidenceService.getEvidence();

  selectedEvidence: Evidence | null = null;


  selectEvidence(evidence: Evidence): void {

    if (!evidence.discovered) {
      return;
    }

    this.selectedEvidence = evidence;

  }


  closeEvidence(): void {
    this.selectedEvidence = null;
  }

}