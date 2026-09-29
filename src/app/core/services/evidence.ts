import { Injectable, inject } from '@angular/core';
import { Evidence } from '../models/evidence';
import { AccessService } from './access';

interface EvidenceRecord extends Evidence {
  discoveryOnView?: boolean;
}

const EVIDENCE_POOL: EvidenceRecord[] = [
  {
    id: 'attachment-metadata', group: 'Case File',
    title: 'Case-file image metadata',
    summary: 'The restricted attachment record lists capture time, GPS location, device, and redactions.',
    source: 'Amherst PD Investigative Portal — attachment metadata (ampd_inv_0017.jpg)',
    detail: 'Created October 18, 2024 at 8:43:17 AM; modified at 9:12:04 AM; captured October 17 at 10:17:43 PM. The record lists an Apple iPhone 13 and GPS coordinates 37.5856 N, 79.0514 W in Amherst, Virginia. Image content is unavailable. The uploader is redacted. The displayed portal credentials are access information, not part of this record.',
    sourceLink: { route: '/case-file', query: { source: 'attachment-metadata' }, authentication: 'police' }
  },
  {
    id: 'incident-24-0952', group: 'Public Police Records',
    title: 'Incident #24-0952 — effigies reported',
    summary: 'A caller reported two handmade effigies near the North Branch watershed access trail.',
    source: 'Amherst PD Public Records — Incident #24-0952',
    detail: 'The September 28, 2024 report says patrol found no people, no threats or property damage were reported, and the objects were not collected. The call was closed with no further action.',
    sourceLink: { route: '/amherst-public-records', domain: 'amherstpd.local', path: '/incidents/24-0952' }, discoveryOnView: true
  },
  {
    id: 'incident-24-0970', group: 'Public Police Records',
    title: 'Incident #24-0970 — lights reported',
    summary: 'A caller reported several lights moving along a wooded trail after dark.',
    source: 'Amherst PD Public Records — Incident #24-0970',
    detail: 'The October 2, 2024 caller thought the lights might have been flashlights or torches. Officers found no people, fire, or signs of recent activity. The call was closed as unable to locate.',
    sourceLink: { route: '/amherst-public-records', domain: 'amherstpd.local', path: '/incidents/24-0970' }, discoveryOnView: true
  },
  {
    id: 'emily-september-public', group: 'Public Police Records',
    title: 'September 30 SUV report',
    summary: 'Emily Carter reported a dark SUV following her on U.S. Route 29.',
    source: 'Amherst PD Public Records — Incident #24-0964',
    detail: 'The public report says Carter reported no contact, threat, or traffic violation. Patrol did not locate a matching vehicle; the report was closed as unable to locate.',
    sourceLink: { route: '/amherst-public-records', domain: 'amherstpd.local', path: '/incidents/24-0964' }, discoveryOnView: true
  },
  {
    id: 'emily-september-restricted', group: 'Investigation Portal',
    title: 'September 30 SUV statement',
    summary: 'Carter described an older olive-green SUV following her through two turns.',
    source: 'Amherst PD Investigation Portal — Supplemental #24-0964',
    detail: 'Carter described an older boxy SUV with a rear-mounted spare tire and a small rust spot above the right rear wheel arch. She could not clearly see the driver or obtain a plate. She said she drove to a well-lit business; the SUV continued and did not enter the lot.',
    sourceLink: { route: '/police-portal/case/24-1017', query: { source: 'emily-vehicle-001' }, authentication: 'police' }
  },
  {
    id: 'incident-24-1004', group: 'Public Police Records',
    title: 'Incident #24-1004 — October 11 report',
    summary: 'The public report records no threatening behavior or contact.',
    source: 'Amherst PD Public Records — Incident #24-1004',
    detail: 'On October 11, Emily Carter reported seeing a dark SUV on South Main Street. An officer did not locate a vehicle requiring further investigation. The call was documented with no further action.',
    sourceLink: { route: '/amherst-public-records', domain: 'amherstpd.local', path: '/incidents/24-1004' }, discoveryOnView: true
  },
  {
    id: 'emily-october-restricted', group: 'Investigation Portal',
    title: 'October 11 Emily statement',
    summary: 'Carter described a charcoal SUV and reported an occupant shouting “BACK OFF THE DEVELOPMENT.”',
    source: 'Amherst PD Investigation Portal — Supplemental #24-1004',
    detail: 'Carter described a newer charcoal-black midsize SUV with tinted rear windows and a narrow chrome grille strip, without a rear-mounted spare tire. She said it slowed alongside her vehicle and an occupant shouted “BACK OFF THE DEVELOPMENT.” She could not identify the speaker or obtain a plate.',
    sourceLink: { route: '/police-portal/case/24-1017', query: { source: 'emily-vehicle-002' }, authentication: 'police' }
  },
  {
    id: 'w001-public', group: 'Public Police Records',
    title: 'Witness statement W-001 — public copy',
    summary: 'The redacted account says Emily appeared to leave in her own vehicle.',
    source: 'Amherst PD Public Records — Witness Statement W-001',
    detail: 'The public statement says the witness saw Emily on foot and later saw her leave the area in what appeared to be her own vehicle. The public copy redacts the witness’s identity.',
    sourceLink: { route: '/amherst-public-records', domain: 'amherstpd.local', path: '/incidents/24-1017/witness-statements/WS-24-001' }, discoveryOnView: true
  },
  {
    id: 'w001-restricted', group: 'Investigation Portal',
    title: 'Martin Hale statement — restricted copy',
    summary: 'Hale says he did not see Emily enter a vehicle and her vehicle remained in the lot when he left.',
    source: 'Amherst PD Investigation Portal — Witness Statement W-001',
    detail: 'Hale says he saw Emily standing beside a dark olive-green SUV near the municipal parking area. He heard that SUV start and leave. He did not see Emily get into it or drive away in her own vehicle; her vehicle was still in the lot when he left. He later learned it had been towed and impounded.',
    sourceLink: { route: '/police-portal/case/24-1017', query: { source: 'martin-hale' }, authentication: 'police' }
  },
  {
    id: 'town-record-october-17', group: 'Amherst Community Board',
    title: 'Town Council — October 17, 2024',
    summary: 'Meeting minutes record preliminary wetlands and waterway concerns and possible additional review.',
    source: 'Amherst Community Board archive — October 17 Town Council minutes',
    detail: 'Emily Carter said wetlands and intermittent waterways appeared more extensive than indicated in initial applicant materials. She described the assessment as ongoing and said preliminary findings did not establish a violation. Depending on the completed delineation and agency review, federally regulated waters and additional permitting considerations might be involved. She intended to recommend federal review in her official report.',
    sourceLink: { route: '/amherst-board', domain: 'amherstboard.local', path: '/archive/council-2024/october-17' }, discoveryOnView: true
  },
  {
    id: 'lotline-tool-listing', group: 'Amherst Exchange',
    title: 'Mechanics tool-set listing',
    summary: 'An Amherst Exchange listing offers a used mechanics tool set and provides a direct pickup contact.',
    source: 'Amherst Exchange — Mechanics Tool Set listing by lotline',
    detail: 'The listing describes a complete mechanics tool set with some normal wear. It asks buyers to call Dan Pruitt at 434-555-0148 for pickup.',
    sourceLink: { route: '/amherst-exchange', domain: 'amherst-exchange.local', path: '/listing/tool-set' }, discoveryOnView: true
  },
  {
    id: 'recovered-invoice', group: 'UnderNet Extracted Data',
    title: 'Cedar Trace invoice',
    summary: 'An invoice records a paid $18,500 advisory-work charge from Blue Ridge Advanced Materials to Cedar Trace LLC.',
    source: 'UnderNet Extracted Data — invoice CT-0441',
    detail: 'The August 29, 2024 invoice lists local development advisory, stakeholder research and local conditions review. Recovery note: no contract or supporting work product was included in the recovered set. This record comes from a partial recovery; recovered timestamps have not been independently verified.',
    sourceLink: { route: '/browser', domain: 'undernet.local', path: '/extracted-data/cedar-invoice', authentication: 'undernet' }, discoveryOnView: true
  },
  {
    id: 'account-access-log', group: 'UnderNet Extracted Data',
    title: 'Cedar Trace account access log',
    summary: 'The recovered log records device tokens, account actions, and a browser-profile match.',
    source: 'UnderNet Extracted Data — Cedar Trace account access log',
    detail: 'The same locally generated device token AMH-7C19 appears in account and Amherst Community Board session metadata associated with posts made as amherstforward. A note says the public lotline listing gives the same phone number as a Cedar Trace mobile access record and identifies Dan Pruitt. The source says records do not identify the person using AMH-7C19; a token match indicates a browser or device profile, not a verified person. This record comes from a partial recovery; recovered timestamps have not been independently verified.',
    sourceLink: { route: '/browser', domain: 'undernet.local', path: '/extracted-data/account-access', authentication: 'undernet' }, discoveryOnView: true
  },
  {
    id: 'transfer-record', group: 'UnderNet Extracted Data',
    title: 'Recovered transfer record',
    summary: 'A partial record lists a $4,800 transfer to Rusk Field Services on October 9.',
    source: 'UnderNet Extracted Data — transfer record',
    detail: 'The record lists Cedar Trace Operating as the source, Rusk Field Services as destination, and payment handle ruskfield. A second fragment says payment was marked complete two days later. The surviving record does not establish what Blue Ridge knew or what the payment purchased. This record comes from a partial recovery; recovered timestamps have not been independently verified.',
    sourceLink: { route: '/browser', domain: 'undernet.local', path: '/extracted-data/transfer-record', authentication: 'undernet' }, discoveryOnView: true
  },
  {
    id: 'field-note', group: 'UnderNet Extracted Data',
    title: 'Field note — October 11',
    summary: 'An unsent note includes “Charcoal midsize… She got the point” and the phrase “BACK OFF THE DEVELOPMENT.”',
    source: 'UnderNet Extracted Data — contractor archive field note',
    detail: 'The note is marked closed and has an incomplete author field. It describes a charcoal midsize SUV and includes the attached reminder “BACK OFF THE DEVELOPMENT.” The recovered note does not establish who wrote it. This record comes from a partial recovery; recovered timestamps have not been independently verified.',
    sourceLink: { route: '/browser', domain: 'undernet.local', path: '/extracted-data/field-note', authentication: 'undernet' }, discoveryOnView: true
  },
  {
    id: 'message-fragment', group: 'UnderNet Extracted Data',
    title: 'October 10 message fragment',
    summary: 'A partial message includes “keep Caleb paid” and “do not let this get back to Blue Ridge.”',
    source: 'UnderNet Extracted Data — Cedar Trace message cache',
    detail: 'The cache identifies sender handle amherstforward and recipient handle lotline, with two of four lines recovered. The sender’s legal name is not present. The remaining archive is damaged. This record comes from a partial recovery; recovered timestamps have not been independently verified.',
    sourceLink: { route: '/browser', domain: 'undernet.local', path: '/extracted-data/message-fragment', authentication: 'undernet' }, discoveryOnView: true
  }
];

@Injectable({ providedIn: 'root' })
export class EvidenceService {
  private access = inject(AccessService);
  readonly poolSize = EVIDENCE_POOL.length;

  getDiscoveredEvidence(): Evidence[] {
    const discovered = new Set(this.access.evidenceDiscoveriesSignal());
    return EVIDENCE_POOL.filter(item => discovered.has(item.id));
  }

  discover(id: string): void {
    if (EVIDENCE_POOL.some(item => item.id === id)) {
      this.access.discoverEvidence(id);
    }
  }

  discoverFromPage(domain: string, path: string): void {
    EVIDENCE_POOL.filter(item => item.discoveryOnView && item.sourceLink?.domain === domain && item.sourceLink.path === path)
      .forEach(item => this.discover(item.id));
  }
}
