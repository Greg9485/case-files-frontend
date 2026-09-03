import { FakePage } from '../../../models/fake-page';


export const AMHERST_BOARD_PAGES: FakePage[] = [

  // ==========================================================
  // HOME
  // ==========================================================

  {
    id: 'home',
    domain: 'amherstboard.local',
    path: '/',
    title: 'Amherst Community Board',
    subtitle: 'Your independent source for local information.',
    content:
      'Welcome to the Amherst Community Board. Local news, neighborhood discussion, community information, and archived records from around Amherst.',
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
        label: 'Amherst Exchange',
        domain: 'amherst-exchange.local',
        path: '/'
      }
    ]
  },


  // ==========================================================
  // LOCAL
  // ==========================================================

  {
    id: 'local',
    domain: 'amherstboard.local',
    path: '/local',
    title: 'Local',
    subtitle: 'What is happening around Amherst.',
    content:
      'Community notices, neighborhood announcements, local events, and information submitted by residents.',
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


  // ==========================================================
  // NEWS
  // ==========================================================

  {
    id: 'news',
    domain: 'amherstboard.local',
    path: '/news',
    title: 'News',
    subtitle: 'Local reporting and community updates.',
    content:
      'Independent reporting from around Amherst. Some stories are submitted by community members. Others are compiled from public records and local sources.',
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


  // ==========================================================
  // DISCUSSION INDEX
  // ==========================================================

  {
    id: 'discussion',
    domain: 'amherstboard.local',
    path: '/discussion',
    title: 'Discussion',
    subtitle: 'Community discussion and speculation.',
    content:
      'Open discussion between Amherst residents. Posts are not verified and opinions expressed here belong to individual users.',
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


  // ==========================================================
  // MISSING PERSONS
  // ==========================================================

  {
    id: 'missing-persons',
    domain: 'amherstboard.local',
    path: '/missing-persons',
    title: 'Missing Persons',
    subtitle: 'Unresolved disappearances in Amherst.',
    content:
      'This section contains community discussion surrounding missing-person cases in and around Amherst. Information posted here has not been verified by law enforcement.',
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


  // ==========================================================
  // ARCHIVE
  // ==========================================================

  {
    id: 'archive',
    domain: 'amherstboard.local',
    path: '/archive',
    title: 'Archive',
    subtitle: 'Archived community posts and records.',
    content:
      'Older discussions and community records are maintained here for reference. Some archived material may have been removed or restricted.',
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


  // ==========================================================
  // NEWS ARTICLES
  // ==========================================================

  {
    id: 'council-meeting',
    domain: 'amherstboard.local',
    path: '/news/council-meeting',
    title: 'Council meeting moved to Thursday',
    category: 'NEWS',
    content:
      'The Amherst Town Council has announced that this week\'s regular meeting will be moved from Wednesday to Thursday due to scheduling conflicts. The meeting will begin at 7:00 PM at Town Hall.'
  },

  {
    id: 'patrol-increase',
    domain: 'amherstboard.local',
    path: '/news/patrol-increase',
    title: 'Police announce downtown patrol increase',
    category: 'NEWS',
    content:
      'The Amherst Police Department announced an increase in overnight patrols throughout the downtown district. Officials cited several recent reports of vandalism and suspicious activity. No connection between the incidents has been established.'
  },

  {
    id: 'old-mill-news',
    domain: 'amherstboard.local',
    path: '/news/old-mill',
    title: 'Old mill redevelopment approved',
    category: 'NEWS',
    content:
      'The town council has approved preliminary plans to redevelop the abandoned Amherst Mill property. The site has remained unused since the mill closed in 1998.',
    links: [
      {
        label: 'Related vehicle listing',
        domain: 'amherst-exchange.local',
        path: '/listing/black-suv'
      }
    ]
  },


  // ==========================================================
  // FORUM THREADS
  // ==========================================================

  {
    id: 'helicopters',
    domain: 'amherstboard.local',
    path: '/discussion/helicopters',
    title: 'Anyone else hear helicopters last night?',
    category: 'DISCUSSION',
    subtitle: '3 posts',
    type: 'FORUM_THREAD',
    content: ''
  },

  {
    id: 'old-mill-discussion',
    domain: 'amherstboard.local',
    path: '/discussion/old-mill',
    title: 'Strange vehicle parked behind the old mill',
    category: 'DISCUSSION',
    subtitle: '3 posts',
    type: 'FORUM_THREAD',
    content: ''
  },

  {
    id: 'marina',
    domain: 'amherstboard.local',
    path: '/discussion/marina',
    title: 'Anyone know what happened at the marina?',
    category: 'DISCUSSION',
    subtitle: '3 posts',
    type: 'FORUM_THREAD',
    content: ''
  },


  // ==========================================================
  // EMILY CARTER
  // ==========================================================

  {
    id: 'emily-thread',
    domain: 'amherstboard.local',
    path: '/thread/emily-carter',
    title: 'Does anyone remember Emily Carter?',
    category: 'MISSING PERSONS',
    subtitle: 'Started by quietstatic',
    type: 'FORUM_THREAD',
    content: '',
    links: [
      {
        label: 'View discussion replies',
        path: '/thread/emily-carter/replies'
      },
      {
        label: 'View Amherst Police Records',
        domain: 'amherstpd.local',
        path: '/missing-persons/emily-carter'
      }
    ]
  },

  {
    id: 'amherst-emily-replies',
    domain: 'amherstboard.local',
    path: '/thread/emily-carter/replies',
    title: 'Re: Does anyone remember Emily Carter?',
    category: 'DISCUSSION',
    subtitle: '5 posts',
    type: 'FORUM_THREAD',
    content: '',
    links: [
      {
        label: '← Back to Emily Carter discussion',
        path: '/thread/emily-carter'
      },
      {
        label: 'View Amherst Police Records',
        domain: 'amherstpd.local',
        path: '/missing-persons/emily-carter'
      }
    ]
  },


  // ==========================================================
  // USER PROFILE
  // ==========================================================

  {
    id: 'quietstatic-profile',
    domain: 'amherstboard.local',
    path: '/user/quietstatic',
    title: 'quietstatic',
    category: 'USER PROFILE',
    content:
      'Member since: 2018\n\nPosts: 47\nReputation: 812\n\nLast active: 2 hours ago\n\n"Some things are better left buried."'
  },


  // ==========================================================
  // OTHER MISSING PERSONS
  // ==========================================================

  {
    id: 'michael-reeves',
    domain: 'amherstboard.local',
    path: '/missing-persons/michael-reeves',
    title: 'Michael Reeves',
    category: 'MISSING PERSONS',
    content:
      'Michael Reeves disappeared in October 2019. The case remains unresolved. No recent activity.'
  },

  {
    id: 'sarah-whitmore',
    domain: 'amherstboard.local',
    path: '/missing-persons/sarah-whitmore',
    title: 'Sarah Whitmore',
    category: 'MISSING PERSONS',
    content:
      'Sarah Whitmore was reported missing in June 2021. She was located three days later and returned home.'
  },


  // ==========================================================
  // SYSTEM PAGES
  // ==========================================================

  {
    id: 'removed-page',
    domain: 'amherstboard.local',
    path: '/archive/2019',
    title: 'Content Removed',
    category: 'CONTENT REMOVED',
    status: 'REMOVED',
    content:
      'This content has been removed by the site administrator.'
  },

  {
    id: 'restricted-page',
    domain: 'amherstboard.local',
    path: '/archive/2020',
    title: 'Access Restricted',
    category: 'ACCESS RESTRICTED',
    status: 'RESTRICTED',
    content:
      'You do not have permission to access this resource.'
  },

  {
    id: 'offline-page',
    domain: 'amherstboard.local',
    path: '/archive/2021',
    title: 'Server Unavailable',
    category: 'SERVER OFFLINE',
    status: 'OFFLINE',
    content:
      'The requested resource is temporarily unavailable.'
  }

];