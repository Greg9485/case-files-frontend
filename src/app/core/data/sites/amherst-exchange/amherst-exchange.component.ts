import {
  Component,
  Input
} from '@angular/core';

import {
  FakePage
} from '../../../models/fake-page';

import {
  FakeSite
} from '../../../models/fake-site';


@Component({
  selector: 'app-amherst-exchange',
  standalone: true,
  imports: [],
  templateUrl: './amherst-exchange.component.html',
  styleUrl: './amherst-exchange.component.scss'
})
export class AmherstExchangeComponent {

  @Input()
  page!: FakePage;


  @Input()
  site!: FakeSite;


  @Input()
  navigate!: (
    path: string,
    domain?: string
  ) => void;


  get listing() {

    return this.page.listings?.[0];
  }


  isListing(): boolean {

    return this.page.type === 'EXCHANGE_LISTING';
  }

}