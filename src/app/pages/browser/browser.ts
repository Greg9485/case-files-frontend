import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserService } from '../../core/services/browser';
import { FakeInternetService } from '../../core/services/fake-internet';
import { FakePage } from '../../core/models/fake-page';
import { AccessService } from '../../core/services/access';
import {
  BookmarksService,
  Bookmark
} from '../../core/services/bookmarks';
import { FAKE_SITES } from '../../core/data/fake-sites';
import { FakeSite } from '../../core/models/fake-site';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {

  private bookmarksService = inject(BookmarksService);
  private browserService = inject(BrowserService);
  private internet = inject(FakeInternetService);
  private accessService = inject(AccessService);
  private router = inject(Router);


  bookmarks: Bookmark[] = [];
  currentDomain = 'hollowcreekboard.local';
  currentPage!: FakePage;
  currentPath = '/';
  currentSite!: FakeSite;
  history: string[] = [];
  historyIndex = -1;
  showBookmarks = false;



  constructor() {

    if (!this.accessService.isAuthenticated()) {

      this.router.navigate(['/dark-web-login']);

      return;
    }

    this.navigate('/');

    this.loadBookmarks();

  }


  navigate(path: string, domain?: string): void {

    const targetDomain = domain ?? this.currentPage?.domain ?? 'hollowcreekboard.local';

    const page = this.internet.getPage(targetDomain, path);

    if (!page) {
      return;
    }

    this.currentSite =
      FAKE_SITES.find(site => site.domain === page.domain)
      ?? FAKE_SITES[0];

    this.currentPage = page;

    this.currentDomain = targetDomain;
    this.currentPath = path;

    this.browserService.visitPage(
      page.domain,
      page.path
    );


    // Remove anything after the current history position.
    this.history =
      this.history.slice(0, this.historyIndex + 1);

    this.history.push(
      `${targetDomain}${path}`
    );

    this.historyIndex++;

  }


  goBack(): void {

    if (this.historyIndex <= 0) {
      return;
    }

    this.historyIndex--;

    const location =
      this.history[this.historyIndex];

    const [domain, ...pathParts] =
      location.split('/');

    const path =
      '/' + pathParts.join('/');

    const page =
      this.internet.getPage(
        domain,
        path
      );

    if (page) {

      this.currentPage = page;

      this.currentDomain = domain;
      this.currentPath = path;

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

    const location =
      this.history[this.historyIndex];

    const [domain, ...pathParts] =
      location.split('/');

    const path =
      '/' + pathParts.join('/');

    const page =
      this.internet.getPage(
        domain,
        path
      );

    if (page) {

      this.currentPage = page;

      this.currentDomain = domain;
      this.currentPath = path;

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


  toggleBookmark(): void {

    this.bookmarksService.toggleBookmark({
      title: this.currentPage.title,
      domain: this.currentPage.domain,
      path: this.currentPage.path
    });

    this.loadBookmarks();

  }


  isCurrentPageBookmarked(): boolean {

    return this.bookmarksService.isBookmarked(
      this.currentPage.path
    );

  }


  loadBookmarks(): void {

    this.bookmarks =
      this.bookmarksService.getBookmarks();

  }


  toggleBookmarksMenu(): void {

    this.loadBookmarks();

    this.showBookmarks =
      !this.showBookmarks;

  }


  openBookmark(path: string): void {

    this.navigate(path);

    this.showBookmarks = false;

  }

}