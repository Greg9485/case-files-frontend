import { Injectable } from '@angular/core';
import { CaseFile } from '../models/case';


@Injectable({
  providedIn:'root'
})
export class CaseService {


private case:CaseFile = {

id:1,

title:'The Disappearance of Emily Carter',

missingPerson:'Emily Carter',

status:'Cold Case',

location:'Hollow Creek, VA',

daysMissing:547,

evidenceCount:0,

witnessCount:0

};


getCase(){

return this.case;

}


}