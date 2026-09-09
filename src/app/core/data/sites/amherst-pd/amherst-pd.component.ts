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
  selector: 'app-amherst-pd',
  standalone: true,
  imports: [],
  templateUrl: './amherst-pd.component.html',
  styleUrl: './amherst-pd.component.scss'
})
export class AmherstPdComponent {

  @Input()
  page!: FakePage;


  @Input()
  site!: FakeSite;


  @Input()
  navigate!: (
    path: string,
    domain?: string
  ) => void;


  @Input()
  openExternalRoute!: (
    route: string
  ) => void;


  get incident() {

    return this.page.incidents?.[0];
  }


  isIncidentList(): boolean {

    return this.page.type === 'POLICE_INCIDENT_LIST';
  }


  isIncident(): boolean {

    return this.page.type === 'POLICE_INCIDENT';
  }

}