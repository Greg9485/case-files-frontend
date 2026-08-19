import { Component, inject } from '@angular/core';
import { BrowserService } from '../../core/services/browser';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {

  private browser = inject(BrowserService);

  currentUrl = 'hollowcreekboard.local';

  visitSite(): void {

    this.browser.visitPage(
      'hollowcreekboard.local',
      '/'
    );

  }

}