import { Component, inject } from '@angular/core';

import { BrowserService } from '../../core/services/browser';
import { FakeInternetService } from '../../core/services/fake-internet';
import { FakePage } from '../../core/models/fake-page';
import { Router } from '@angular/router';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {


  private accessService = inject(AccessService);
  private browser = inject(BrowserService);
  private internet = inject(FakeInternetService);
  private router = inject(Router);

constructor() {

  if (!this.accessService.isAuthenticated()) {

    this.router.navigate(['/dark-web-login']);

    return;
  }

  this.currentPage =
    this.internet.getPage('/')!;
}



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