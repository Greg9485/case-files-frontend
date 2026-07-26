import { Component } from '@angular/core';
import { CaseService } from '../../core/services/case';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {


case;


constructor(
  private caseService:CaseService
){

this.case = this.caseService.getCase();

}


}