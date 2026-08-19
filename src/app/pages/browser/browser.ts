import { Component, inject } from '@angular/core';

import { BrowserService } from '../../core/services/browser';
import { FakeInternetService } from '../../core/services/fake-internet';
import { FakePage } from '../../core/models/fake-page';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {

  private browser = inject(BrowserService);
  private internet = inject(FakeInternetService);

  currentPage: FakePage =
    this.internet.getPage('/')!;


  navigate(path: string): void {

    const page = this.internet.getPage(path);

    if (!page) {
      return;
    }

    this.currentPage = page;

    this.browser.visitPage(
      page.domain,
      page.path
    );

  }


  goBack(): void {
    this.navigate('/');
  }

}