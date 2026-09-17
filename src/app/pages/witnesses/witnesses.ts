import {
  Component,
  inject
} from '@angular/core';

import {
  AccessService
} from '../../core/services/access';

import {
  AMHERST_POLICE_WITNESSES
} from '../../core/data/sites/amherst-pd/amherst-pd-witnesses';

import {
  PoliceWitness
} from '../../core/models/police-witness';

interface WitnessStatementRecord {
  source: string;
  title: string;
  statementId: string;
  date: string;
  time: string;
  witnessName: string;
  statement: string;
}

@Component({
  selector: 'app-witnesses',
  standalone: true,
  imports: [],
  templateUrl: './witnesses.html',
  styleUrl: './witnesses.scss'
})
export class WitnessesComponent {

  accessService = inject(AccessService);

  witnesses =
    AMHERST_POLICE_WITNESSES;

  selectedWitness:
    PoliceWitness | null = null;

  selectedStatement:
    WitnessStatementRecord | null = null;


  get witnessesUnlocked(): boolean {
    return this.accessService.isWitnessesUnlocked();
  }


  isIdentityKnown(
    witness: PoliceWitness
  ): boolean {

    return this.accessService
      .isWitnessIdentityKnown(
        witness.id
      );
  }


  getWitnessDisplayName(
    witness: PoliceWitness
  ): string {

    if (
      this.isIdentityKnown(witness)
    ) {
      return witness.restrictedWitnessName;
    }

    return `Witness #${
      this.getWitnessNumber(witness)
    }`;
  }


  getWitnessNumber(
    witness: PoliceWitness
  ): number {

    const index =
      this.witnesses.findIndex(
        item =>
          item.id === witness.id
      );

    return index + 1;
  }


  getDiscoveredWitnesses(): PoliceWitness[] {

    return this.witnesses.filter(
      witness =>
        this.accessService
          .hasDiscoveredWitness(
            witness.id
          )
    );
  }


  getStatementRecords(
    witness: PoliceWitness
  ): WitnessStatementRecord[] {

    const records:
      WitnessStatementRecord[] = [];

    const discoveries =
      this.accessService
        .getWitnessDiscoveries(
          witness.id
        );


    const publicDiscovery =
      discoveries.some(
        discovery =>
          discovery.source ===
          'PUBLIC POLICE RECORDS'
      );


    const investigationDiscovery =
      discoveries.some(
        discovery =>
          discovery.source ===
          'AMHERST PD INVESTIGATION PORTAL'
      );


    if (publicDiscovery) {

      records.push({
        source:
          'PUBLIC POLICE RECORDS',

        title:
          'Witness Statement #001',

        statementId:
          witness.statementId,

        date:
          witness.date,

        time:
          witness.time,

        witnessName:
          witness.publicWitnessName,

        statement:
          witness.publicStatement
      });

    }


    if (investigationDiscovery) {

      records.push({
        source:
          'AMHERST PD INVESTIGATION PORTAL',

        title:
          'Witness Statement #001',

        statementId:
          witness.statementId,

        date:
          witness.date,

        time:
          witness.time,

        witnessName:
          witness.restrictedWitnessName,

        statement:
          witness.restrictedStatement
      });

    }


    return records;
  }


  getStatementCount(
    witness: PoliceWitness
  ): number {

    return this.getStatementRecords(
      witness
    ).length;
  }


  selectWitness(
    witness: PoliceWitness
  ): void {

    this.selectedWitness =
      witness;

    this.selectedStatement =
      null;
  }


  closeWitnessRecord(): void {

    this.selectedWitness =
      null;

    this.selectedStatement =
      null;
  }


  selectStatement(
    statement: WitnessStatementRecord
  ): void {

    this.selectedStatement =
      statement;
  }


  closeStatement(): void {

    this.selectedStatement =
      null;
  }


  getCurrentWitnessName(): string {

    if (!this.selectedWitness) {
      return '';
    }

    return this.getWitnessDisplayName(
      this.selectedWitness
    );
  }


  getCurrentWitnessStatementName(): string {

    if (!this.selectedStatement) {
      return '';
    }

    return this.selectedStatement
      .witnessName;
  }

}