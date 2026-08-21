import { Injectable } from '@angular/core';
import { CaseFile } from '../models/case';


@Injectable({
  providedIn:'root'
})

export class CaseService {

  private case: CaseFile = {
    id: 1,
    caseNumber: '24-1017',
    title: 'The Disappearance of Emily Carter',
    missingPerson: 'Emily Carter',
    status: 'Cold Case',
    location: 'Amherst, VA',
    dateReportedMissing: 'October 17, 2024',
    age: 27,
    hometown: 'Lynchburg, VA',
    summary:
      'Emily Carter was reported missing following an evening in downtown Amherst. The investigation remains open.'
  };

  getCase(){
    return this.case;
  }

}