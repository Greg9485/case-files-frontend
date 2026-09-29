import { Injectable, inject } from '@angular/core';
import { InvestigationService } from './investigation';
import { EvidenceService } from './evidence';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  private investigation = inject(InvestigationService);
  private evidence = inject(EvidenceService);


  visitPage(domain: string, path: string): void {
    this.evidence.discoverFromPage(domain, path);

    this.investigation.recordEvent(
      'PAGE_VIEWED',
      `${domain}${path}`,
      {
        domain,
        path
      }
    );

  }

}
