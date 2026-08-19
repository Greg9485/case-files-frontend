import { Injectable } from '@angular/core';
import { FAKE_PAGES } from '../data/fake-pages';
import { FakePage } from '../models/fake-page';

@Injectable({
  providedIn: 'root'
})
export class FakeInternetService {

  getPage(path: string): FakePage | undefined {
    return FAKE_PAGES.find(page => page.path === path);
  }

}