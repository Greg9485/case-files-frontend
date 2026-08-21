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
    content: 'The town council has approved preliminary plans to redevelop the abandoned Hollow Creek Mill property. The site has remained unused since the mill closed in 1998.'
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
  }

];