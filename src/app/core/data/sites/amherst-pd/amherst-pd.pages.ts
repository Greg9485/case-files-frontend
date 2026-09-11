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

        disposition: 'Active Investigation',

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

        disposition: 'Active Investigation',

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

        disposition: 'Active Investigation',

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

    title: 'Case File - Incident #24-1017',

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

        disposition: 'Active Investigation',

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

  }

];