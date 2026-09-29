import { Component, inject } from '@angular/core';
import { EvidenceService } from '../../core/services/evidence';
import { Evidence } from '../../core/models/evidence';
import { Router } from '@angular/router';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-evidence',
  imports: [],
  templateUrl: './evidence.html',
  styleUrl: './evidence.scss'
})
export class EvidenceComponent {
  private evidenceService = inject(EvidenceService);
  private router = inject(Router);
  private accessService = inject(AccessService);
  selectedEvidence: Evidence | null = null;

  get evidence(): Evidence[] {
    return this.evidenceService.getDiscoveredEvidence();
  }

  get discoveredPercentage(): number {
    return Math.round(this.evidence.length / this.evidenceService.poolSize * 100);
  }

  get evidenceGroups(): { name: string; entries: Evidence[] }[] {
    const groups = new Map<string, Evidence[]>();
    for (const item of this.evidence) {
      groups.set(item.group, [...(groups.get(item.group) ?? []), item]);
    }
    return [...groups.entries()].map(([name, entries]) => ({ name, entries }));
  }

  selectEvidence(item: Evidence): void {
    this.selectedEvidence = item;
  }

  closeEvidence(): void {
    this.selectedEvidence = null;
  }

  openSource(item: Evidence): void {
    const source = item.sourceLink;
    if (!source) return;

    if (source.authentication) {
      this.accessService.resumeAuthenticationForEvidence(source.authentication);
    }

    const extras = source.path
      ? { queryParams: { page: source.path } }
      : { queryParams: source.query ?? {} };

    void this.router.navigate([source.route], extras).then(() => {
      this.selectedEvidence = null;
    });
  }
}
