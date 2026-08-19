import { Injectable } from '@angular/core';
import { Evidence } from '../models/evidence';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {

  private evidence: Evidence[] = [

    {
      id: 'police-report',
      title: 'Original Police Report',
      type: 'DOCUMENT',
      description: 'The official report filed after Emily Carter disappeared.',
      content: `
        Hollow Creek Police Department
        Case #001

        Subject: Emily Carter
        Age: 26

        Date Reported Missing: October 15, 2024

        According to the initial investigation, Emily Carter
        was last seen leaving Hollow Creek Legal Services at
        approximately 8:42 PM on October 14, 2024.

        No signs of forced entry were discovered at her residence.

        Investigation status: CLOSED.
      `,
      discovered: true,
      importance: 'medium',
      clues: [
        'Emily left work at approximately 8:42 PM.'
      ]
    },

    {
      id: 'security-photo',
      title: 'Security Camera Photograph',
      type: 'PHOTOGRAPH',
      description: 'A still image recovered from a nearby security camera.',
      content: `
        Camera: Hollow Creek Municipal Building
        Date: October 14, 2024
        Time: 9:17 PM

        A dark sedan can be seen traveling eastbound
        approximately 35 minutes after Emily was last
        officially seen.
      `,
      discovered: true,
      importance: 'high',
      clues: [
        'A vehicle was present near the area shortly after Emily disappeared.'
      ]
    },

    {
      id: 'anonymous-tip',
      title: 'Anonymous Tip',
      type: 'MESSAGE',
      description: 'An anonymous message submitted to the police department.',
      content: `
        "You are looking in the wrong place.

        Stop asking about the river."

        — Anonymous
      `,
      discovered: false,
      importance: 'high',
      clues: [
        'Someone appears to know what investigators were looking for.'
      ]
    }

  ];


  getEvidence(): Evidence[] {
    return this.evidence;
  }


  getEvidenceById(id: string): Evidence | undefined {
    return this.evidence.find(item => item.id === id);
  }


  discoverEvidence(id: string): void {

    const item = this.getEvidenceById(id);

    if (item) {
      item.discovered = true;
    }

  }

}