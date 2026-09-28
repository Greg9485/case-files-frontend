import { FakePage } from '../../../models/fake-page';

export const AMHERST_PD_PAGES: FakePage[] = [

  // ============================================================
  // PUBLIC DATA HOME
  // ============================================================

  {

    id: 'pd-home',

    domain: 'amherstpd.local',

    path: '/',

    title: 'Incident Crime Reports',

    subtitle: 'Amherst Police Department public records',

    category: 'PUBLIC DATA',

    type: 'POLICE_INCIDENT_LIST',

    content: '',

    incidents: [

      {
        id: '24-0952', incidentNumber: '24-0952', date: '09/28/2024',
        time: '09:14 PM', type: 'Suspicious Activity',
        location: 'North Branch watershed access', status: 'Closed',
        disposition: 'No Further Action', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0952'
      },

      {
        id: '24-0964', incidentNumber: '24-0964', date: '09/30/2024',
        time: '08:13 PM', type: 'Suspicious Vehicle',
        location: 'U.S. Route 29', status: 'Closed',
        disposition: 'Unable to Locate', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0964'
      },

      {
        id: '24-0970', incidentNumber: '24-0970', date: '10/02/2024',
        time: '10:38 PM', type: 'Suspicious Activity',
        location: 'North Branch watershed access', status: 'Closed',
        disposition: 'Unable to Locate', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0970'
      },

      {
        id: '24-1004', incidentNumber: '24-1004', date: '10/11/2024',
        time: '09:46 PM', type: 'Suspicious Vehicle',
        location: 'South Main Street', status: 'Closed',
        disposition: 'No Further Action', district: 'Central',
        officer: 'J. Harris', linkPath: '/incidents/24-1004'
      },

      {

        id: '24-1012',

        incidentNumber: '24-1012',

        date: '10/14/2024',

        time: '08:42 AM',

        type: 'Larceny',

        location: '100 block S Main St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1012'

      },

      {

        id: '24-1015',

        incidentNumber: '24-1015',

        date: '10/16/2024',

        time: '06:18 PM',

        type: 'Disorderly Conduct',

        location: 'Town of Amherst',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'R. Miller',

        linkPath: '/incidents/24-1015'

      },

      {

        id: '24-1017',

        incidentNumber: '24-1017',

        date: '10/17/2024',

        time: '10:17 PM',

        type: 'Missing Person',

        location: 'Downtown Amherst',

        status: 'Open',

        disposition: 'Cold Case',

        district: 'Central',

        officer: 'D. Mercer',

        linkPath: '/incidents/24-1017'

      },

      {

        id: '24-1018',

        incidentNumber: '24-1018',

        date: '10/18/2024',

        time: '07:31 AM',

        type: 'Vandalism',

        location: 'Old Mill Rd',

        status: 'Closed',

        disposition: 'Pending',

        district: 'North',

        officer: 'T. Reed',

        linkPath: '/incidents/24-1018'

      },

      {

        id: '24-1020',

        incidentNumber: '24-1020',

        date: '10/18/2024',

        time: '11:46 PM',

        type: 'Suspicious Activity',

        location: 'Lakeview Dr',

        status: 'Closed',

        disposition: 'No Further Action',

        district: 'East',

        officer: 'K. Foster',

        linkPath: '/incidents/24-1020'

      },

      {

        id: '24-1024',

        incidentNumber: '24-1024',

        date: '10/21/2024',

        time: '02:12 PM',

        type: 'Property Damage',

        location: '100 block Church St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1024'

      }

    ]

  },


  // ============================================================
  // INCIDENT TABLE
  // ============================================================

  {

    id: 'pd-incidents',

    domain: 'amherstpd.local',

    path: '/incidents',

    title: 'Incident Crime Reports',

    subtitle: 'Searchable public incident records',

    category: 'PUBLIC DATA',

    type: 'POLICE_INCIDENT_LIST',

    content: '',

    incidents: [

      {
        id: '24-0952', incidentNumber: '24-0952', date: '09/28/2024',
        time: '09:14 PM', type: 'Suspicious Activity',
        location: 'North Branch watershed access', status: 'Closed',
        disposition: 'No Further Action', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0952'
      },

      {
        id: '24-0964', incidentNumber: '24-0964', date: '09/30/2024',
        time: '08:13 PM', type: 'Suspicious Vehicle',
        location: 'U.S. Route 29', status: 'Closed',
        disposition: 'Unable to Locate', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0964'
      },

      {
        id: '24-0970', incidentNumber: '24-0970', date: '10/02/2024',
        time: '10:38 PM', type: 'Suspicious Activity',
        location: 'North Branch watershed access', status: 'Closed',
        disposition: 'Unable to Locate', district: 'North',
        officer: 'T. Reed', linkPath: '/incidents/24-0970'
      },

      {
        id: '24-1004', incidentNumber: '24-1004', date: '10/11/2024',
        time: '09:46 PM', type: 'Suspicious Vehicle',
        location: 'South Main Street', status: 'Closed',
        disposition: 'No Further Action', district: 'Central',
        officer: 'J. Harris', linkPath: '/incidents/24-1004'
      },

      {

        id: '24-1012',

        incidentNumber: '24-1012',

        date: '10/14/2024',

        time: '08:42 AM',

        type: 'Larceny',

        location: '100 block S Main St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1012'

      },

      {

        id: '24-1015',

        incidentNumber: '24-1015',

        date: '10/16/2024',

        time: '06:18 PM',

        type: 'Disorderly Conduct',

        location: 'Town of Amherst',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'R. Miller',

        linkPath: '/incidents/24-1015'

      },

      {

        id: '24-1017',

        incidentNumber: '24-1017',

        date: '10/17/2024',

        time: '10:17 PM',

        type: 'Missing Person',

        location: 'Downtown Amherst',

        status: 'Open',

        disposition: 'Cold Case',

        district: 'Central',

        officer: 'D. Mercer',

        linkPath: '/incidents/24-1017'

      },

      {

        id: '24-1018',

        incidentNumber: '24-1018',

        date: '10/18/2024',

        time: '07:31 AM',

        type: 'Vandalism',

        location: 'Old Mill Rd',

        status: 'Closed',

        disposition: 'Pending',

        district: 'North',

        officer: 'T. Reed',

        linkPath: '/incidents/24-1018'

      },

      {

        id: '24-1020',

        incidentNumber: '24-1020',

        date: '10/18/2024',

        time: '11:46 PM',

        type: 'Suspicious Activity',

        location: 'Lakeview Dr',

        status: 'Closed',

        disposition: 'No Further Action',

        district: 'East',

        officer: 'K. Foster',

        linkPath: '/incidents/24-1020'

      },

      {

        id: '24-1024',

        incidentNumber: '24-1024',

        date: '10/21/2024',

        time: '02:12 PM',

        type: 'Property Damage',

        location: '100 block Church St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1024'

      }

    ]

  },


  // ============================================================
  // EMILY CARTER INCIDENT
  // ============================================================

  {

    id: 'pd-incident-24-1017',

    domain: 'amherstpd.local',

    path: '/incidents/24-1017',

    title: 'Incident #24-1017',

    subtitle: 'Missing Person',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Several portions of the underlying investigative

record are not available through this system.

    `,

    incidents: [

      {

        id: '24-1017',

        incidentNumber: '24-1017',

        date: '10/17/2024',

        time: '10:17 PM',

        type: 'Missing Person',

        location: 'Downtown Amherst',

        status: 'Open',

        disposition: 'Cold Case',

        district: 'Central',

        officer: 'D. Mercer',

        subject: 'Emily Carter',

        linkPath: '/incidents/24-1017'

      }

    ],

    links: [

      {

        label: 'View full case record',

        path: '/incidents/24-1017/case-file'

      },

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  // ============================================================
  // EMILY CARTER CASE FILE
  // ============================================================

  {

    id: 'pd-case-file-24-1017',

    domain: 'amherstpd.local',

    path: '/incidents/24-1017/case-file',

    title: 'Missing Person - Emily Carter',

    subtitle: 'Investigative record',

    category: 'CASE FILE',

    type: 'POLICE_CASE_FILE',

    content: '',

    incidents: [

      {

        id: '24-1017',

        incidentNumber: '24-1017',

        date: '10/17/2024',

        time: '10:17 PM',

        type: 'Missing Person',

        location: 'Downtown Amherst',

        status: 'Open',

        disposition: 'Cold Case',

        district: 'Central',

        officer: 'D. Mercer',

        subject: 'Emily Carter',

        linkPath: '/incidents/24-1017'

      }

    ],

    links: [

      {

        label: 'Back to Incident #24-1017',

        path: '/incidents/24-1017'

      },

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  // ============================================================
  // OTHER INCIDENTS
  // ============================================================

  {

    id: 'pd-incident-24-1012',

    domain: 'amherstpd.local',

    path: '/incidents/24-1012',

    title: 'Incident #24-1012',

    subtitle: 'Larceny',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Case closed.

    `,

    incidents: [

      {

        id: '24-1012',

        incidentNumber: '24-1012',

        date: '10/14/2024',

        time: '08:42 AM',

        type: 'Larceny',

        location: '100 block S Main St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1012'

      }

    ],

    links: [

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  {
    id: 'pd-incident-24-0952',
    domain: 'amherstpd.local',
    path: '/incidents/24-0952',
    title: 'Incident #24-0952',
    subtitle: 'Suspicious Activity',
    category: 'INCIDENT CRIME REPORT',
    type: 'POLICE_INCIDENT',
    content: 'On September 28, 2024, a caller reported two handmade effigies fashioned from cloth and brush and tied near trees along the North Branch watershed access trail. Patrol checked the immediate area and nearby wooded paths; no persons were located. No threats, property damage, or other offense were reported. The area was noted as a place local teenagers sometimes gather. The objects were not collected as evidence. Closed with no further action.',
    incidents: [{
      id: '24-0952', incidentNumber: '24-0952', date: '09/28/2024',
      time: '09:14 PM', type: 'Suspicious Activity',
      location: 'North Branch watershed access', status: 'Closed',
      disposition: 'No Further Action', district: 'North',
      officer: 'T. Reed', linkPath: '/incidents/24-0952'
    }],
    links: [{ label: 'Back to incident records', path: '/incidents' }]
  },

  {
    id: 'pd-incident-24-0970',
    domain: 'amherstpd.local',
    path: '/incidents/24-0970',
    title: 'Incident #24-0970',
    subtitle: 'Suspicious Activity',
    category: 'INCIDENT CRIME REPORT',
    type: 'POLICE_INCIDENT',
    content: 'On October 2, 2024, a caller reported seeing several lights moving along the wooded trail near the North Branch watershed access after dark. The caller thought they may have been flashlights or torches and believed local teenagers sometimes gathered in the area. Officers checked the trail and adjacent roads but found no people, fire, or signs of recent activity. The call was closed as unable to locate; no further action was taken.',
    incidents: [{
      id: '24-0970', incidentNumber: '24-0970', date: '10/02/2024',
      time: '10:38 PM', type: 'Suspicious Activity',
      location: 'North Branch watershed access', status: 'Closed',
      disposition: 'Unable to Locate', district: 'North',
      officer: 'T. Reed', linkPath: '/incidents/24-0970'
    }],
    links: [{ label: 'Back to incident records', path: '/incidents' }]
  },

  {
    id: 'pd-incident-24-0964',
    domain: 'amherstpd.local',
    path: '/incidents/24-0964',
    title: 'Incident #24-0964',
    subtitle: 'Suspicious Vehicle',
    category: 'INCIDENT CRIME REPORT',
    type: 'POLICE_INCIDENT',
    content: 'On September 30, 2024, Emily Carter reported noticing a dark sport utility vehicle behind her while traveling east on U.S. Route 29. She reported no contact, threat, or traffic violation. Patrol checked the route and nearby streets but did not locate a vehicle matching the brief description. The report was recorded for information and closed as unable to locate.',
    incidents: [{
      id: '24-0964', incidentNumber: '24-0964', date: '09/30/2024',
      time: '08:13 PM', type: 'Suspicious Vehicle',
      location: 'U.S. Route 29', status: 'Closed',
      disposition: 'Unable to Locate', district: 'North',
      officer: 'T. Reed', linkPath: '/incidents/24-0964'
    }],
    links: [{ label: 'Back to incident records', path: '/incidents' }]
  },

  {
    id: 'pd-incident-24-1004',
    domain: 'amherstpd.local',
    path: '/incidents/24-1004',
    title: 'Incident #24-1004',
    subtitle: 'Suspicious Vehicle',
    category: 'INCIDENT CRIME REPORT',
    type: 'POLICE_INCIDENT',
    content: 'On October 11, 2024, Emily Carter reported seeing a dark sport utility vehicle traveling on South Main Street. No threatening behavior or contact was reported. An officer checked the area and did not locate a vehicle requiring further investigation. The call was documented; no further action was taken.',
    incidents: [{
      id: '24-1004', incidentNumber: '24-1004', date: '10/11/2024',
      time: '09:46 PM', type: 'Suspicious Vehicle',
      location: 'South Main Street', status: 'Closed',
      disposition: 'No Further Action', district: 'Central',
      officer: 'J. Harris', linkPath: '/incidents/24-1004'
    }],
    links: [{ label: 'Back to incident records', path: '/incidents' }]
  },


  {

    id: 'pd-incident-24-1015',

    domain: 'amherstpd.local',

    path: '/incidents/24-1015',

    title: 'Incident #24-1015',

    subtitle: 'Disorderly Conduct',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Case closed.

    `,

    incidents: [

      {

        id: '24-1015',

        incidentNumber: '24-1015',

        date: '10/16/2024',

        time: '06:18 PM',

        type: 'Disorderly Conduct',

        location: 'Town of Amherst',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'R. Miller',

        linkPath: '/incidents/24-1015'

      }

    ],

    links: [

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  {

    id: 'pd-incident-24-1018',

    domain: 'amherstpd.local',

    path: '/incidents/24-1018',

    title: 'Incident #24-1018',

    subtitle: 'Vandalism',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Disposition: Pending.

    `,

    incidents: [

      {

        id: '24-1018',

        incidentNumber: '24-1018',

        date: '10/18/2024',

        time: '07:31 AM',

        type: 'Vandalism',

        location: 'Old Mill Rd',

        status: 'Closed',

        disposition: 'Pending',

        district: 'North',

        officer: 'T. Reed',

        linkPath: '/incidents/24-1018'

      }

    ],

    links: [

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  {

    id: 'pd-incident-24-1020',

    domain: 'amherstpd.local',

    path: '/incidents/24-1020',

    title: 'Incident #24-1020',

    subtitle: 'Suspicious Activity',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Disposition: No Further Action.

    `,

    incidents: [

      {

        id: '24-1020',

        incidentNumber: '24-1020',

        date: '10/18/2024',

        time: '11:46 PM',

        type: 'Suspicious Activity',

        location: 'Lakeview Dr',

        status: 'Closed',

        disposition: 'No Further Action',

        district: 'East',

        officer: 'K. Foster',

        linkPath: '/incidents/24-1020'

      }

    ],

    links: [

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },


  {

    id: 'pd-incident-24-1024',

    domain: 'amherstpd.local',

    path: '/incidents/24-1024',

    title: 'Incident #24-1024',

    subtitle: 'Property Damage',

    category: 'INCIDENT CRIME REPORT',

    type: 'POLICE_INCIDENT',

    content: `

Public incident record.

Case closed.

    `,

    incidents: [

      {

        id: '24-1024',

        incidentNumber: '24-1024',

        date: '10/21/2024',

        time: '02:12 PM',

        type: 'Property Damage',

        location: '100 block Church St',

        status: 'Closed',

        disposition: 'Cleared',

        district: 'Central',

        officer: 'J. Harris',

        linkPath: '/incidents/24-1024'

      }

    ],

    links: [

      {

        label: 'Back to incident records',

        path: '/incidents'

      }

    ]

  },

  //==========================================
  //    WITNESS PAGES
  //==========================================

  {
    id: 'pd-witness-24-1017-001',

    domain: 'amherstpd.local',

    path:
      '/incidents/24-1017/witness-statements/WS-24-001',

    title: 'Witness Statement #001',

    subtitle:
      'Incident #24-1017',

    category:
      'WITNESS STATEMENT',

    type:
      'POLICE_WITNESS_STATEMENT',

    witnessId:
      'W-001',

    content:
      'Official witness statement associated with Amherst Police Department incident 24-1017.',

    
    links: [
      {
        label: 'Back to Case File',
        path: '/incidents/24-1017/case-file'
      }
    ]
  },



];
