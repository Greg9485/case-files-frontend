import { FakePage } from '../models/fake-page';

export const FAKE_PAGES: FakePage[] = [

  // HOME
  {
    id: 'home',
    domain: 'hollowcreekboard.local',
    path: '/',
    title: 'Hollow Creek Community Board',
    subtitle: 'Your independent source for local information.',
    content: 'Welcome to the Hollow Creek Community Board. Local news, neighborhood discussion, community information, and archived records from around Hollow Creek.',
    links: [
      {
        label: 'Anyone else hear helicopters last night?',
        path: '/discussion/helicopters'
      },
      {
        label: 'Council meeting moved to Thursday',
        path: '/news/council-meeting'
      },
      {
        label: 'Does anyone remember Emily Carter?',
        path: '/thread/emily-carter'
      },
      {
        label: 'Strange vehicle parked behind the old mill',
        path: '/discussion/old-mill'
      },
      {
        label: 'Hollow Creek Exchange',
        domain: 'hc-exchange.local',
        path: '/'
    }
    ]
  },

  // LOCAL
  {
    id: 'local',
    domain: 'hollowcreekboard.local',
    path: '/local',
    title: 'Local',
    subtitle: 'What is happening around Hollow Creek.',
    content: 'Community notices, neighborhood announcements, local events, and information submitted by residents.',
    links: [
      {
        label: 'Community Events Calendar',
        path: '/local/events'
      },
      {
        label: 'Road Closures & Construction',
        path: '/local/roads'
      },
      {
        label: 'Local Business Directory',
        path: '/local/businesses'
      }
    ]
  },

  // NEWS
  {
    id: 'news',
    domain: 'hollowcreekboard.local',
    path: '/news',
    title: 'News',
    subtitle: 'Local reporting and community updates.',
    content: 'Independent reporting from around Hollow Creek. Some stories are submitted by community members. Others are compiled from public records and local sources.',
    links: [
      {
        label: 'Council meeting moved to Thursday',
        path: '/news/council-meeting'
      },
      {
        label: 'Police announce downtown patrol increase',
        path: '/news/patrol-increase'
      },
      {
        label: 'Old mill redevelopment approved',
        path: '/news/old-mill'
      }
    ]
  },

  // DISCUSSION
  {
    id: 'discussion',
    domain: 'hollowcreekboard.local',
    path: '/discussion',
    title: 'Discussion',
    subtitle: 'Community discussion and speculation.',
    content: 'Open discussion between Hollow Creek residents. Posts are not verified and opinions expressed here belong to individual users.',
    links: [
      {
        label: 'Anyone else hear helicopters last night?',
        path: '/discussion/helicopters'
      },
      {
        label: 'Strange vehicle parked behind the old mill',
        path: '/discussion/old-mill'
      },
      {
        label: 'Anyone know what happened at the marina?',
        path: '/discussion/marina'
      }
    ]
  },

  // MISSING PERSONS
  {
    id: 'missing-persons',
    domain: 'hollowcreekboard.local',
    path: '/missing-persons',
    title: 'Missing Persons',
    subtitle: 'Unresolved disappearances in Hollow Creek.',
    content: 'This section contains community discussion surrounding missing-person cases in and around Hollow Creek. Information posted here has not been verified by law enforcement.',
    links: [
      {
        label: 'Emily Carter — Missing Since 2024',
        path: '/thread/emily-carter'
      },
      {
        label: 'Archived Case — Michael Reeves',
        path: '/missing-persons/michael-reeves'
      },
      {
        label: 'Archived Case — Sarah Whitmore',
        path: '/missing-persons/sarah-whitmore'
      }
    ]
  },

  // ARCHIVE
  {
    id: 'archive',
    domain: 'hollowcreekboard.local',
    path: '/archive',
    title: 'Archive',
    subtitle: 'Archived community posts and records.',
    content: 'Older discussions and community records are maintained here for reference. Some archived material may have been removed or restricted.',
    links: [
      {
        label: '2019 Community Archive',
        path: '/archive/2019'
      },
      {
        label: '2020 Community Archive',
        path: '/archive/2020'
      },
      {
        label: '2021 Community Archive',
        path: '/archive/2021'
      }
    ]
  },

  // NEWS ARTICLES
  {
    id: 'council-meeting',
    domain: 'hollowcreekboard.local',
    path: '/news/council-meeting',
    title: 'Council meeting moved to Thursday',
    category: 'NEWS',
    content: 'The Hollow Creek Town Council has announced that this week\'s regular meeting will be moved from Wednesday to Thursday due to scheduling conflicts. The meeting will begin at 7:00 PM at Town Hall.'
  },

  {
    id: 'patrol-increase',
    domain: 'hollowcreekboard.local',
    path: '/news/patrol-increase',
    title: 'Police announce downtown patrol increase',
    category: 'NEWS',
    content: 'The Hollow Creek Police Department announced an increase in overnight patrols throughout the downtown district. Officials cited several recent reports of vandalism and suspicious activity. No connection between the incidents has been established.'
  },

  {
    id: 'old-mill-news',
    domain: 'hollowcreekboard.local',
    path: '/news/old-mill',
    title: 'Old mill redevelopment approved',
    category: 'NEWS',
    content: 'The town council has approved preliminary plans to redevelop the abandoned Hollow Creek Mill property. The site has remained unused since the mill closed in 1998.',
    links: [
        {
        label: 'Related vehicle listing',
        domain: 'hc-exchange.local',
        path: '/listing/black-suv'
        }
    ]
},

  // DISCUSSION POSTS
  {
    id: 'helicopters',
    domain: 'hollowcreekboard.local',
    path: '/discussion/helicopters',
    title: 'Anyone else hear helicopters last night?',
    category: 'DISCUSSION',
    content: 'Heard helicopters around 2 AM near the river. Anyone know what was going on? Probably nothing, but it sounded like they were circling for a pretty long time.'
  },

  {
    id: 'old-mill-discussion',
    domain: 'hollowcreekboard.local',
    path: '/discussion/old-mill',
    title: 'Strange vehicle parked behind the old mill',
    category: 'DISCUSSION',
    content: 'There has been a dark SUV parked behind the old mill for the last three nights. No plates that I could see. Probably construction workers, but figured I would mention it.'
  },

  {
    id: 'marina',
    domain: 'hollowcreekboard.local',
    path: '/discussion/marina',
    title: 'Anyone know what happened at the marina?',
    category: 'DISCUSSION',
    content: 'There were police boats at the marina Sunday night. Anyone know what happened? EDIT: Never mind. Someone said it was a medical call.'
  },

  // EMILY CARTER
  {
    id: 'emily-thread',
    domain: 'hollowcreekboard.local',
    path: '/thread/emily-carter',
    title: 'Does anyone remember Emily Carter?',
    category: 'MISSING PERSONS',
    content: 'It has been almost two years. I know everyone wants to move on, but something about the official story never made sense to me. If anyone knows what actually happened that night, maybe it is time someone started asking questions again.',
    links: [
        {
            label: 'Posted by ghostwriter47',
            path: '/user/ghostwriter47'
        },
        {
            label: 'View discussion replies',
            path: '/thread/emily-carter/replies'
        },
        {
            label: 'View Hollow Creek Police Records',
            domain: 'hollowcreekpd.local',
            path: '/missing-persons/emily-carter'
        }
    ]
  },

  // USER PROFILE
  {
    id: 'ghostwriter-profile',
    domain: 'hollowcreekboard.local',
    path: '/user/ghostwriter47',
    title: 'ghostwriter47',
    category: 'USER PROFILE',
    content: 'Member since: 2018\n\nPosts: 47\nReputation: 812\n\nLast active: 2 hours ago\n\n"Some things are better left buried."'
  },

  // OTHER MISSING PERSONS
  {
    id: 'michael-reeves',
    domain: 'hollowcreekboard.local',
    path: '/missing-persons/michael-reeves',
    title: 'Michael Reeves',
    category: 'MISSING PERSONS',
    content: 'Michael Reeves disappeared in October 2019. The case remains unresolved. No recent activity.'
  },

  {
    id: 'sarah-whitmore',
    domain: 'hollowcreekboard.local',
    path: '/missing-persons/sarah-whitmore',
    title: 'Sarah Whitmore',
    category: 'MISSING PERSONS',
    content: 'Sarah Whitmore was reported missing in June 2021. She was located three days later and returned home.'
  },

    // REMOVED PAGE
  {
    id: 'removed-page',
    domain: 'hollowcreekboard.local',
    path: '/archive/2019',
    title: 'Content Removed',
    category: 'CONTENT REMOVED',
    status: 'REMOVED',
    content: 'This content has been removed by the site administrator.'
  },

  // RESTRICTED PAGE
  {
    id: 'restricted-page',
    domain: 'hollowcreekboard.local',
    path: '/archive/2020',
    title: 'Access Restricted',
    category: 'ACCESS RESTRICTED',
    status: 'RESTRICTED',
    content: 'You do not have permission to access this resource.'
  },

  // OFFLINE PAGE
  {
    id: 'offline-page',
    domain: 'hollowcreekboard.local',
    path: '/archive/2021',
    title: 'Server Unavailable',
    category: 'SERVER OFFLINE',
    status: 'OFFLINE',
    content: 'The requested resource is temporarily unavailable.'
  },

  // FAKE PAGES

  {
    id: 'news-home',
    domain: 'hollowcreeknews.local',
    path: '/',
    title: 'Hollow Creek News',
    subtitle: 'Independent reporting for Hollow Creek and surrounding communities.',
    category: 'NEWS',
    content: `
        Hollow Creek News has been serving the community since 2003.

        Local government, public safety, community events,
        and investigative reporting.
        `,
        links: [
            {
            label: 'Police increase patrols downtown',
            path: '/stories/patrols'
            },
            {
            label: 'Old Hollow Creek Mill redevelopment',
            path: '/stories/old-mill'
            },
            {
            label: 'Browse public records',
            domain: 'hollowcreekpd.local',
            path: '/'
            }
        ]
    },

    {
        id: 'news-patrols',
        domain: 'hollowcreeknews.local',
        path: '/stories/patrols',
        title: 'Police Increase Overnight Patrols',
        category: 'NEWS',
        content: `
        The Hollow Creek Police Department announced an increase
        in overnight patrols throughout the downtown district.

        Officials cited several recent reports of vandalism
        and suspicious activity.

        No connection between the incidents has been established.
        `,
        links: [
            {
            label: 'Hollow Creek Police Records',
            domain: 'hollowcreekpd.local',
            path: '/'
            }
        ]
    },

    {
        id: 'news-old-mill',
        domain: 'hollowcreeknews.local',
        path: '/stories/old-mill',
        title: 'Old Hollow Creek Mill Redevelopment',
        category: 'NEWS',
        content: `
        The town council has approved preliminary plans to redevelop
        the abandoned Hollow Creek Mill property.

        The site has remained unused since the mill closed in 1998.

        Several residents have raised concerns about activity
        around the property after dark.
        `,
        links: [
            {
            label: 'Discuss this story',
            domain: 'hollowcreekboard.local',
            path: '/discussion/old-mill'
            }
        ]
    },

    // POLICE RECORDS SITE

    {
  id: 'pd-home',
  domain: 'hollowcreekpd.local',
  path: '/',
  title: 'Hollow Creek Police Department',
  subtitle: 'Public Records Portal',
  category: 'OFFICIAL',
  content: `
Hollow Creek Police Department

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
  domain: 'hollowcreekpd.local',
  path: '/missing-persons',
  title: 'Missing Persons',
  category: 'PUBLIC RECORDS',
  content: `
Current and historical missing-person cases
maintained by the Hollow Creek Police Department.
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
  domain: 'hollowcreekpd.local',
  path: '/missing-persons/emily-carter',
  title: 'Emily Carter',
  category: 'MISSING PERSON',
  content: `
CASE STATUS: COLD

Emily Carter was reported missing on October 17, 2024.

The investigation remains open.

Last known location:
Hollow Creek, Virginia.

Additional information is restricted.
  `,
  links: [
    {
      label: 'View incident records',
      path: '/incidents'
    },
    {
      label: 'Return to Hollow Creek Community Board',
      domain: 'hollowcreekboard.local',
      path: '/missing-persons'
    }
  ]
},

{
  id: 'pd-incidents',
  domain: 'hollowcreekpd.local',
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
  domain: 'hollowcreekpd.local',
  path: '/incidents/24-1017',
  title: 'Incident #24-1017',
  category: 'INCIDENT RECORD',
  content: `
    DATE:
    October 17, 2024

    LOCATION:
    Hollow Creek

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

    {
        id: 'exchange-home',
        domain: 'hc-exchange.local',
        path: '/',
        title: 'Hollow Creek Exchange',
        subtitle: 'Buy. Sell. Trade.',
        category: 'CLASSIFIEDS',
        content: `
        Hollow Creek Exchange is a local marketplace for
        buying, selling, and trading goods and services.

        Listings are posted by users and are not verified.
        `,
        links: [
            {
            label: 'Vehicles',
            path: '/category/vehicles'
            },
            {
            label: 'Electronics',
            path: '/category/electronics'
            },
            {
            label: 'Miscellaneous',
            path: '/category/misc'
            },
            {
            label: 'User: nightshift84',
            path: '/user/nightshift84'
            }
        ]
        },

        {
        id: 'exchange-vehicles',
        domain: 'hc-exchange.local',
        path: '/category/vehicles',
        title: 'Vehicles',
        category: 'CLASSIFIEDS',
        content: `
        Vehicles and automotive parts currently listed
        on Hollow Creek Exchange.
        `,
        links: [
            {
            label: '2017 Black SUV — $8,500',
            path: '/listing/black-suv'
            }
        ]
        },

        {
        id: 'exchange-black-suv',
        domain: 'hc-exchange.local',
        path: '/listing/black-suv',
        title: '2017 Black SUV — $8,500',
        category: 'VEHICLE LISTING',
        content: `
        2017 Black SUV.

        Runs well.

        No accidents reported.

        Seller:
        nightshift84

        Pickup available near the old mill.
        `,
        links: [
            {
            label: 'View seller profile',
            path: '/user/nightshift84'
            },
            {
            label: 'Discuss privately',
            domain: 'backroom.local',
            path: '/messages/nightshift84'
            }
        ]
        },

        {
        id: 'exchange-nightshift',
        domain: 'hc-exchange.local',
        path: '/user/nightshift84',
        title: 'nightshift84',
        category: 'USER PROFILE',
        content: `
        Member since: 2022

        Listings: 14

        Reputation: 96%

        Last active: Yesterday

        "I buy and sell whatever people need."
        `,
        links: [
            {
            label: 'View vehicle listing',
            path: '/listing/black-suv'
            }
        ]
    },


    // BACKROOM

    {
        id: 'backroom-home',
        domain: 'backroom.local',
        path: '/',
        title: 'THE BACKROOM',
        subtitle: 'Private discussion network',
        category: 'INVITE ONLY',
        content: `
        You were not supposed to find this.

        This network is not affiliated with Hollow Creek
        Community Board or any recognized organization.

        Users are responsible for their own activity.
        `,
        links: [
            {
            label: 'Recent discussions',
            path: '/forums'
            },
            {
            label: 'Marketplace',
            path: '/market'
            },
            {
            label: 'User directory',
            path: '/users'
            }
        ]
        },

        {
        id: 'backroom-forums',
        domain: 'backroom.local',
        path: '/forums',
        title: 'Recent Discussions',
        category: 'PRIVATE FORUM',
        content: `
        Anonymous discussions between verified members.

        Some posts are automatically removed after 30 days.
        `,
        links: [
            {
            label: 'Anyone asking about Emily Carter?',
            path: '/thread/emily'
            },
            {
            label: 'Old Mill — anyone still using it?',
            path: '/thread/old-mill'
            }
        ]
        },

        {
        id: 'backroom-emily',
        domain: 'backroom.local',
        path: '/thread/emily',
        title: 'Anyone asking about Emily Carter?',
        category: 'PRIVATE DISCUSSION',
        content: `
        USER: hollowman

        Anyone asking about Emily Carter?

        REPLY — nightshift84:

        Drop it.

        REPLY — hollowman:

        Why?

        REPLY — nightshift84:

        Because people who keep asking questions
        eventually become part of the story.
        `,
        links: [
            {
                label: 'View nightshift84 profile',
                path: '/users/nightshift84'
            }, 
  
        ]
        },

        {
        id: 'backroom-old-mill',
        domain: 'backroom.local',
        path: '/thread/old-mill',
        title: 'Old Mill — anyone still using it?',
        category: 'PRIVATE DISCUSSION',
        content: `
        USER: riverghost

        Is anyone still using the old mill?

        REPLY — nightshift84:

        Not after what happened last year.

        REPLY — riverghost:

        What happened?

        REPLY — nightshift84:

        You don't want to know.
        `
        },

        {
        id: 'backroom-users',
        domain: 'backroom.local',
        path: '/users',
        title: 'User Directory',
        category: 'MEMBERS',
        content: `
        Registered users currently active on the network.
        `,
        links: [
            {
            label: 'nightshift84',
            path: '/users/nightshift84'
            },
            {
            label: 'hollowman',
            path: '/users/hollowman'
            },
            {
            label: 'riverghost',
            path: '/users/riverghost'
            }
        ]
        },

        {
        id: 'backroom-nightshift',
        domain: 'backroom.local',
        path: '/users/nightshift84',
        title: 'nightshift84',
        category: 'USER PROFILE',
        content: `
        Member since: 2022

        Status: ACTIVE

        Reputation: 418

        Last seen: 14 minutes ago

        "No questions. No problems."
        `
    },
];