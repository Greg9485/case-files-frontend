import { Injectable, inject } from '@angular/core';
import { InvestigationService } from './investigation';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  private investigation = inject(InvestigationService);


  visitPage(domain: string, path: string): void {

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