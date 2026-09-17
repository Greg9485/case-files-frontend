import {
  Component,
  inject
} from '@angular/core';

import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-police-portal',

  imports: [],

  templateUrl:
    './police-portal.html',

  styleUrl:
    './police-portal.scss'
})
export class PolicePortalComponent {

  private router =
    inject(Router);


  openEmilyCase(): void {

    this.router.navigate([
      '/police-portal/case/24-1017'
    ]);

  }

}