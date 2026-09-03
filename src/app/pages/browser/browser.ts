import {
  Component,
  inject
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  AMHERST_BOARD_FORUM_POSTS
} from '../../core/data/sites/amherst-board/amherst-board.forum';

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
  ForumPost
} from '../../core/models/forum-post';


@Component({
  selector: 'app-browser',

  imports: [],

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


  currentDomain =
    'amherstboard.local';


  currentPage!: FakePage;


  currentPath =
    '/';


  currentSite!: FakeSite;


  history: string[] = [];


  historyIndex =
    -1;


  showBookmarks =
    false;


  currentForumPosts:
    ForumPost[] = [];


  private requiresTor =
    false;


  private requiresDarkWebAuth =
    false;


  private initialDomain =
    'amherstboard.local';


  constructor() {

    /*
     * ========================================================
     * READ ROUTE CONFIGURATION
     * ========================================================
     */

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


    /*
     * ========================================================
     * ACCESS CHECKS
     * ========================================================
     *
     * Amherst Community Board:
     *
     *   No access requirements.
     *
     * TOR Browser:
     *
     *   Requires TOR unlock and authentication.
     */

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

      this.router.navigate([
        '/dark-web-login'
      ]);

      return;

    }


    /*
     * ========================================================
     * INITIAL PAGE
     * ========================================================
     */

    this.navigate(
      '/',
      this.initialDomain
    );


    this.loadBookmarks();

  }


  /*
   * ==========================================================
   * NAVIGATION
   * ==========================================================
   */

  navigate(
    path: string,
    domain?: string
  ): void {

    const targetDomain =
      domain
      ?? this.currentPage?.domain
      ?? this.initialDomain;


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


  /*
   * ==========================================================
   * SET CURRENT PAGE
   * ==========================================================
   */

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


    this.currentPage =
      page;


    this.currentDomain =
      page.domain;

    this.currentPath =
      page.path;


    this.currentForumPosts =
      AMHERST_BOARD_FORUM_POSTS[
        page.path
      ] ?? [];

    this.browserService.visitPage(
      page.domain,
      page.path
    );


    if (!addToHistory) {
      return;
    }


    /*
     * Remove forward history.
     */

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


  /*
   * ==========================================================
   * BACK
   * ==========================================================
   */

  goBack(): void {

    if (
      this.historyIndex <= 0
    ) {
      return;
    }


    this.historyIndex--;


    this.loadHistoryLocation();

  }


  /*
   * ==========================================================
   * FORWARD
   * ==========================================================
   */

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


  /*
   * ==========================================================
   * LOAD HISTORY LOCATION
   * ==========================================================
   */

  private loadHistoryLocation(): void {

    const location =
      this.history[
        this.historyIndex
      ];


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


  /*
   * ==========================================================
   * RELOAD
   * ==========================================================
   */

  reload(): void {

    this.browserService.visitPage(
      this.currentPage.domain,
      this.currentPage.path
    );

  }


  /*
   * ==========================================================
   * BOOKMARKS
   * ==========================================================
   */

  toggleBookmark(): void {

    this.bookmarksService.toggleBookmark({
      title:
        this.currentPage.title,

      domain:
        this.currentPage.domain,

      path:
        this.currentPage.path
    });


    this.loadBookmarks();

  }


  isCurrentPageBookmarked(): boolean {

    return this.bookmarks.some(
      bookmark =>
        bookmark.domain ===
          this.currentPage.domain
        &&
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


    this.showBookmarks =
      false;

  }


  /*
   * ==========================================================
   * FORUM
   * ==========================================================
   */

  isForumThread(): boolean {

    return (
      this.currentPage.type ===
      'FORUM_THREAD'
    );

  }


  openForumUser(
    userPath?: string
  ): void {

    if (!userPath) {
      return;
    }


    this.navigate(
      userPath,
      this.currentPage.domain
    );

  }


  /*
   * ==========================================================
   * SITE TYPE
   * ==========================================================
   */

  isDarkWebSite(): boolean {

    return (
      this.currentDomain ===
      'undernet.local'
    );

  }

}