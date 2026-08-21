import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CaseService } from '../../core/services/case';

@Component({
  selector: 'app-case',
  imports: [
    RouterLink
  ],
  templateUrl: './case.html',
  styleUrl: './case.scss'
})
export class CaseComponent {

  private caseService = inject(CaseService);

  case = this.caseService.getCase();

}