import { FakePage } from '../../../models/fake-page';

export const AMHERST_PD_PAGES: FakePage[] = [
   // POLICE RECORDS SITE

    {
  id: 'pd-home',
  domain: 'amherstpd.local',
  path: '/',
  title: 'Amherst Police Department',
  subtitle: 'Public Records Portal',
  category: 'OFFICIAL',
  content: `
Amherst Police Department

Public access portal for selected police records,
incident reports, missing-person cases, and public notices.

Some records may be restricted or unavailable.
  `,
  links: [
    {
      label: 'Missing Persons',
      path: '/missing-persons'
    },
    {
      label: 'Incident Records',
      path: '/incidents'
    },
    {
      label: 'Emily Carter Case',
      path: '/missing-persons/emily-carter'
    }
  ]
},

{
  id: 'pd-missing-persons',
  domain: 'amherstpd.local',
  path: '/missing-persons',
  title: 'Missing Persons',
  category: 'PUBLIC RECORDS',
  content: `
Current and historical missing-person cases
maintained by the Amherst Police Department.
  `,
  links: [
    {
      label: 'Emily Carter',
      path: '/missing-persons/emily-carter'
    },
    {
      label: 'Michael Reeves',
      path: '/missing-persons/michael-reeves'
    }
  ]
},

{
  id: 'pd-emily',
  domain: 'amherstpd.local',
  path: '/missing-persons/emily-carter',
  title: 'Emily Carter',
  category: 'MISSING PERSON',
  content: `
CASE STATUS: COLD

Emily Carter was reported missing on October 18, 2024.

The investigation remains open.

Last known location:
Amherst, Virginia.

Additional information is restricted.
  `,
  links: [
    {
      label: 'View incident records',
      path: '/incidents'
    },
    {
      label: 'Return to Amherst Community Board',
      domain: 'amherstboard.local',
      path: '/missing-persons'
    }
  ]
},

{
  id: 'pd-incidents',
  domain: 'amherstpd.local',
  path: '/incidents',
  title: 'Incident Records',
  category: 'PUBLIC RECORDS',
  content: `
Selected incident records are available to the public.

Several records have been withheld or restricted
under applicable investigative exemptions.
  `,
  links: [
    {
      label: 'Incident #24-1017 — Emily Carter',
      path: '/incidents/24-1017'
    }
  ]
},

{
  id: 'pd-incident-24-1017',
  domain: 'amherstpd.local',
  path: '/incidents/24-1017',
  title: 'Incident #24-1017',
  category: 'INCIDENT RECORD',
  content: `
    DATE:
    October 17, 2024

    LOCATION:
    Amherst

    SUBJECT:
    Emily Carter

    STATUS:
    OPEN / COLD

    Several portions of this report have been withheld.
    `,
        links: [
            {
                label: 'Related missing-person case',
                path: '/missing-persons/emily-carter'
            },
            {
                label: 'Related investigation material',
                domain: 'backroom.local',
                path: '/thread/emily'
            }
        ]
    },
];