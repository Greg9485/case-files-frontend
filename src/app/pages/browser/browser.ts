import {
  Component,
  inject
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  NgComponentOutlet
} from '@angular/common';

import { BrowserService } from '../../core/services/browser';
import { FakeInternetService } from '../../core/services/fake-internet';
import { FakePage } from '../../core/models/fake-page';
import { FakeSite } from '../../core/models/fake-site';
import { AccessService } from '../../core/services/access';
import {
  BookmarksService,
  Bookmark
} from '../../core/services/bookmarks';

import { FAKE_SITES } from '../../core/data/fake-sites';

import {
  AmherstBoardComponent
} from '../../core/data/sites/amherst-board/amherst-board.component';

import {
  AmherstExchangeComponent
} from '../../core/data/sites/amherst-exchange/amherst-exchange.component';

import {
  AmherstPdComponent
} from '../../core/data/sites/amherst-pd/amherst-pd.component';
import { TorBrowserComponent } from '../../core/data/sites/tor/tor-browser.component';

@Component({
  selector: 'app-browser',
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './browser.html',
  styleUrl: './browser.scss'
})
export class BrowserComponent {

  private bookmarksService =
    inject(BookmarksService);

  private browserService =
    inject(BrowserService);

  private internet =
    inject(FakeInternetService);

  private accessService =
    inject(AccessService);

  private router =
    inject(Router);

  private route =
    inject(ActivatedRoute);


  bookmarks: Bookmark[] = [];

  currentDomain = 'amherstboard.local';

  currentPage!: FakePage;

  currentPath = '/';

  currentSite!: FakeSite;


  history: string[] = [];

  historyIndex = -1;

  showBookmarks = false;


  private requiresTor = false;

  private requiresDarkWebAuth = false;

  private initialDomain = 'amherstboard.local';


  constructor() {

    const routeData =
      this.route.snapshot.data;


    this.initialDomain =
      routeData['initialDomain']
      ?? 'amherstboard.local';


    this.requiresTor =
      routeData['requiresTor']
      ?? false;


    this.requiresDarkWebAuth =
      routeData['requiresDarkWebAuth']
      ?? false;


    if (
      this.requiresTor &&
      !this.accessService.isTorBrowserUnlocked()
    ) {

      this.router.navigate(['/case']);

      return;
    }


    if (
      this.requiresDarkWebAuth &&
      !this.accessService.isDarkWebAuthenticated()
    ) {

      this.router.navigate(['/dark-web-login']);

      return;
    }


    const initialPath =
      this.route.snapshot
        .queryParamMap
        .get('page')
      ?? '/';


    this.navigate(
      initialPath,
      this.initialDomain
    );


    this.loadBookmarks();
  }


  // ==========================================================
  // PAGE RENDERER
  // ==========================================================

  get pageRenderer(): any {

    switch (this.currentPage?.domain) {

      case 'amherstboard.local':
        return AmherstBoardComponent;

      case 'amherst-exchange.local':
        return AmherstExchangeComponent;

      case 'amherstpd.local':
        return AmherstPdComponent;

      case 'undernet.local':
        return TorBrowserComponent;

      default:
        return null;
    }
  }


  get pageRendererInputs(): Record<string, unknown> {
    return {
      page: this.currentPage,
      site: this.currentSite,
      navigate: this.navigate.bind(this),
      openExternalRoute: this.openExternalRoute.bind(this)
    };
  }


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  navigate(
    path: string,
    domain?: string
  ): void {

    const targetDomain =
      domain ??
      this.currentPage?.domain ??
      this.initialDomain;


    if (
      this.currentPage &&
      targetDomain !== this.currentDomain
    ) {

      const siteRoute =
        this.getSiteRoute(targetDomain);


      if (siteRoute) {

        this.router.navigate(
          [siteRoute],
          {
            queryParams: {
              page: path
            }
          }
        );

        return;
      }
    }


    const page =
      this.internet.getPage(
        targetDomain,
        path
      );


    if (!page) {
      return;
    }


    this.setCurrentPage(
      page,
      true
    );
  }


  private setCurrentPage(
    page: FakePage,
    addToHistory: boolean
  ): void {

    this.currentSite =
      FAKE_SITES.find(
        site =>
          site.domain === page.domain
      )
      ?? FAKE_SITES[0];


    this.currentPage = page;

    this.currentDomain = page.domain;

    this.currentPath = page.path;


    this.browserService.visitPage(
      page.domain,
      page.path
    );


    if (!addToHistory) {
      return;
    }


    this.history =
      this.history.slice(
        0,
        this.historyIndex + 1
      );


    this.history.push(
      `${page.domain}${page.path}`
    );


    this.historyIndex++;
  }


  goBack(): void {

    if (this.historyIndex <= 0) {
      return;
    }


    this.historyIndex--;

    this.loadHistoryLocation();
  }


  goForward(): void {

    if (
      this.historyIndex >=
      this.history.length - 1
    ) {

      return;
    }


    this.historyIndex++;

    this.loadHistoryLocation();
  }


  private loadHistoryLocation(): void {

    const location =
      this.history[this.historyIndex];


    const slashIndex =
      location.indexOf('/');


    const domain =
      location.substring(
        0,
        slashIndex
      );


    const path =
      location.substring(
        slashIndex
      );


    const page =
      this.internet.getPage(
        domain,
        path
      );


    if (!page) {
      return;
    }


    this.setCurrentPage(
      page,
      false
    );
  }


  reload(): void {

    if (!this.currentPage) {
      return;
    }


    this.browserService.visitPage(
      this.currentPage.domain,
      this.currentPage.path
    );
  }


  // ==========================================================
  // BOOKMARKS
  // ==========================================================

  toggleBookmark(): void {

    if (!this.currentPage) {
      return;
    }


    this.bookmarksService.toggleBookmark({
      title: this.currentPage.title,
      domain: this.currentPage.domain,
      path: this.currentPage.path
    });


    this.loadBookmarks();
  }


  isCurrentPageBookmarked(): boolean {

    if (!this.currentPage) {
      return false;
    }


    return this.bookmarks.some(
      bookmark =>
        bookmark.domain ===
          this.currentPage.domain &&
        bookmark.path ===
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


  openBookmark(
    bookmark: Bookmark
  ): void {

    this.navigate(
      bookmark.path,
      bookmark.domain
    );


    this.showBookmarks = false;
  }


  // ==========================================================
  // CROSS-SITE ROUTING
  // ==========================================================

  private getSiteRoute(
    domain: string
  ): string | null {

    switch (domain) {

      case 'amherstboard.local':
        return '/amherst-board';

      case 'amherst-exchange.local':
        return '/amherst-exchange';

      case 'amherstpd.local':
        return '/amherst-public-records';

      case 'undernet.local':
        return '/browser';

      default:
        return null;
    }
  }


  openExternalRoute(
    route: string
  ): void {

    this.router.navigateByUrl(route);
  }


}