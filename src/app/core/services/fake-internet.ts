import { Injectable } from '@angular/core';
import { FAKE_PAGES } from '../data/fake-pages';
import { FakePage } from '../models/fake-page';

@Injectable({
  providedIn: 'root'
})
export class FakeInternetService {

  private pages = FAKE_PAGES;

  getPage(path: string): FakePage {

    const page = this.pages.find(
      p => p.path === path
    );

    if (page) {
      return page;
    }

    return {
      id: '404',
      domain: 'hollowcreekboard.local',
      path,
      title: 'Page Not Found',
      category: '404 ERROR',
      status: 'NOT_FOUND',
      content: 'The requested page could not be found on this server.'
    };

  }

}