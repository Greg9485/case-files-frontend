import {
  FakePage,
  PoliceIncident
} from '../../../models/fake-page';

export const AMHERST_POLICE_INCIDENTS: PoliceIncident[] = [

  // ==========================================================
  // EMILY CARTER — PRIMARY STORY CLUE
  // ==========================================================

  {
    id: '24-1017',
    incidentNumber: '24-1017',
    date: '10/17/2024',
    time: '10:17 PM',
    type: 'Missing Person',
    location: 'Downtown Amherst',
    status: 'Open',
    disposition: 'Active Investigation',
    officer: 'Criminal Investigations',
    subject: 'Emily Carter',
    linkPath: '/incidents/24-1017'
  },

  // ==========================================================
  // SURROUNDING INCIDENTS
  // ==========================================================

  {
    id: '24-1008',
    incidentNumber: '24-1008',
    date: '10/14/2024',
    time: '8:42 PM',
    type: 'Disturbance',
    location: 'Main Street',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-1008'
  },

  {
    id: '24-0994',
    incidentNumber: '24-0994',
    date: '10/09/2024',
    time: '6:18 PM',
    type: 'Vandalism',
    location: 'Old Mill Road',
    status: 'Closed',
    disposition: 'Under Review',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0994'
  },

  {
    id: '24-0977',
    incidentNumber: '24-0977',
    date: '10/04/2024',
    time: '1:26 AM',
    type: 'Suspicious Activity',
    location: 'Mill District',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0977'
  },

  {
    id: '24-0961',
    incidentNumber: '24-0961',
    date: '09/30/2024',
    time: '11:54 PM',
    type: 'DUI',
    location: 'S Main Street',
    status: 'Closed',
    disposition: 'Arrest',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0961'
  },

  {
    id: '24-0948',
    incidentNumber: '24-0948',
    date: '09/27/2024',
    time: '3:12 PM',
    type: 'Welfare Check',
    location: 'Oak Ridge Road',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0948'
  },

  {
    id: '24-0935',
    incidentNumber: '24-0935',
    date: '09/23/2024',
    time: '7:41 PM',
    type: 'Suspicious Person',
    location: 'Depot Street',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0935'
  },

  {
    id: '24-0918',
    incidentNumber: '24-0918',
    date: '09/18/2024',
    time: '9:06 AM',
    type: 'Larceny',
    location: 'W Amherst Avenue',
    status: 'Closed',
    disposition: 'Report Filed',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0918'
  },

  {
    id: '24-0899',
    incidentNumber: '24-0899',
    date: '09/12/2024',
    time: '10:31 PM',
    type: 'Noise Complaint',
    location: 'Downtown Amherst',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0899'
  },

  {
    id: '24-0876',
    incidentNumber: '24-0876',
    date: '09/05/2024',
    time: '6:27 PM',
    type: 'Property Damage',
    location: 'Old Mill Road',
    status: 'Closed',
    disposition: 'No Further Action',
    officer: 'Patrol',
    subject: '',
    linkPath: '/incidents/24-0876'
  }

];

export const AMHERST_POLICE_PAGES: FakePage[] = [

  // ==========================================================
  // PUBLIC RECORDS HOME
  // ==========================================================

  {
    id: 'pd-home',
    domain: 'amherstpd.local',
    path: '/',
    title: 'Incident Crime Reports',
    subtitle:
      'Amherst Police Department public records',
    category: 'PUBLIC POLICE DATA',
    type: 'POLICE_INCIDENT_LIST',
    content: '',
    incidents: AMHERST_POLICE_INCIDENTS
  },

  // ==========================================================
  // INCIDENT SEARCH / TABLE
  // ==========================================================

  {
    id: 'pd-incidents',
    domain: 'amherstpd.local',
    path: '/incidents',
    title: 'Incident Crime Reports',
    subtitle:
      'Selected incident records available for public review.',
    category: 'PUBLIC POLICE DATA',
    type: 'POLICE_INCIDENT_LIST',
    content: '',
    incidents: AMHERST_POLICE_INCIDENTS
  },

  // ==========================================================
  // MISSING PERSONS
  // ==========================================================

  {
    id: 'pd-missing-persons',
    domain: 'amherstpd.local',
    path: '/missing-persons',
    title: 'Missing Persons',
    subtitle:
      'Publicly available missing-person records.',
    category: 'PUBLIC POLICE DATA',
    type: 'POLICE_INCIDENT_LIST',
    content: '',
    incidents: [
      AMHERST_POLICE_INCIDENTS[0]
    ]
  },

  // ==========================================================
  // EMILY CARTER PUBLIC RECORD
  // ==========================================================

  {
    id: 'pd-emily',
    domain: 'amherstpd.local',
    path: '/missing-persons/emily-carter',
    title: 'Emily Carter',
    category: 'MISSING PERSON',
    type: 'POLICE_INCIDENT',
    content:
      'CASE STATUS: COLD\n\n' +
      'Emily Carter was reported missing on October 18, 2024.\n\n' +
      'The investigation remains open.\n\n' +
      'Last known location: Amherst, Virginia.\n\n' +
      'Additional information is restricted.',
    links: [
      {
        label: 'View incident records',
        path: '/incidents'
      }
    ]
  },

  // ==========================================================
  // EMILY CARTER INCIDENT — PRIMARY DISCOVERY POINT
  // ==========================================================

  {
    id: 'pd-incident-24-1017',
    domain: 'amherstpd.local',
    path: '/incidents/24-1017',
    title: 'Incident #24-1017',
    category: 'INCIDENT RECORD',
    type: 'POLICE_INCIDENT',
    content: '',
    incidents: [
      AMHERST_POLICE_INCIDENTS[0]
    ],
    links: [
      {
        label: 'Return to incident records',
        path: '/incidents'
      },
      {
        label: 'View public missing-person record',
        path: '/missing-persons/emily-carter'
      }
    ]
  }

];