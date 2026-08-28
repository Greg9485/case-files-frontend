import { Component } from '@angular/core';

@Component({
  selector: 'app-police-case-file',
  imports: [],
  templateUrl: './police-case-file.html',
  styleUrl: './police-case-file.scss'
})
export class PoliceCaseFileComponent {

  activeTab = 'CASE SUMMARY';

  tabs = [
    'CASE SUMMARY',
    'INCIDENT REPORTS',
    'WITNESS STATEMENTS',
    'EVIDENCE',
    'INVESTIGATION NOTES',
    'RELATED RECORDS'
  ];

  witnessStatementOpen = false;

  setActiveTab(tab: string): void {

    this.activeTab = tab;

  }

  openWitnessStatement(): void {

    this.witnessStatementOpen = true;

  }

  closeWitnessStatement(): void {

    this.witnessStatementOpen = false;

  }

}