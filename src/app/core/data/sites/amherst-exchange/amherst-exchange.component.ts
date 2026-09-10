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


  isCategoryActive(
    categoryPath: string
  ): boolean {

    if (this.page.path === categoryPath) {
      return true;
    }


    if (
      categoryPath === '/category/vehicles' &&
      this.isListing() &&
      this.listing?.category === 'Vehicles'
    ) {
      return true;
    }


    return false;
  }

    get listingBackPath(): string {

        return '/';
        // TODO: update below switch to check for path
            // that user entered listing from
            // if entered from ALL return to '/'
            // else return to the category user came from

        // switch (this.listing?.category) {
        // case 'Vehicles':
        //     return '/category/vehicles';

        // case 'Furniture':
        //     return '/category/furniture';

        // case 'Electronics':
        //     return '/category/electronics';

        // default:
        //     return '/category/misc';
        // }
    }
}