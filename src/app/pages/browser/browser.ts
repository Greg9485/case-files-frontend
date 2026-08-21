import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserService } from '../../core/services/browser';
import { FakeInternetService } from '../../core/services/fake-internet';
import { FakePage } from '../../core/models/fake-page';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {

  private browserService = inject(BrowserService);
  private internet = inject(FakeInternetService);
  private accessService = inject(AccessService);
  private router = inject(Router);

  currentPage!: FakePage;

  history: string[] = [];
  historyIndex = -1;


  constructor() {

    if (!this.accessService.isAuthenticated()) {

      this.router.navigate(['/dark-web-login']);

      return;
    }

    this.navigate('/');

  }


  navigate(path: string): void {

    const page = this.internet.getPage(path);

    if (!page) {
      return;
    }

    this.currentPage = page;

    this.browserService.visitPage(
      page.domain,
      page.path
    );


    // Remove anything after the current history position.
    this.history =
      this.history.slice(0, this.historyIndex + 1);

    this.history.push(path);

    this.historyIndex++;

  }


  goBack(): void {

    if (this.historyIndex <= 0) {
      return;
    }

    this.historyIndex--;

    const path =
      this.history[this.historyIndex];

    const page = this.internet.getPage(path);

    if (page) {

      this.currentPage = page;

      this.browserService.visitPage(
        page.domain,
        page.path
      );

    }

  }

  goForward(): void {

    if (this.historyIndex >= this.history.length - 1) {
      return;
    }

    this.historyIndex++;

    const path =
      this.history[this.historyIndex];

    const page = this.internet.getPage(path);

    if (page) {

      this.currentPage = page;

      this.browserService.visitPage(
        page.domain,
        page.path
      );

    }

  }


  reload(): void {

    this.browserService.visitPage(
      this.currentPage.domain,
      this.currentPage.path
    );

  }

}