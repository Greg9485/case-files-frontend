import { Component, Input } from '@angular/core';

import { FakePage } from '../../../models/fake-page';
import { FakeSite } from '../../../models/fake-site';

@Component({
  selector: 'app-tor-browser',
  standalone: true,
  imports: [],
  templateUrl: './tor-browser.component.html',
  styleUrl: './tor-browser.component.scss'
})
export class TorBrowserComponent {

  @Input() page!: FakePage;
  @Input() site!: FakeSite;
  @Input() navigate!: (path: string, domain?: string) => void;

  navigateTo(
    path: string,
    domain?: string
  ): void {
    this.navigate(path, domain);
  }
}