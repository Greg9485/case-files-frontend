import { Component, inject } from '@angular/core';
import { AccessService } from '../../core/services/access';

@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.html',
  styleUrl: './case.scss'
})
export class CaseComponent {

  private accessService = inject(AccessService);

  access = this.accessService.getAccess();

}