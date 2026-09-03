import {
  MessageBoardCategory,
  MessageBoardThread
} from '../../../models/message-board';


export const AMHERST_BOARD_CATEGORIES: MessageBoardCategory[] = [
  {
    id: 'local',
    name: 'Local',
    description: 'Community events, local businesses, roads, and neighborhood information.',
    path: '/local'
  },
  {
    id: 'news',
    name: 'News',
    description: 'Local news and community updates.',
    path: '/news'
  },
  {
    id: 'discussion',
    name: 'Discussion',
    description: 'General discussion between Amherst residents.',
    path: '/discussion'
  },
  {
    id: 'missing-persons',
    name: 'Missing Persons',
    description: 'Discussion surrounding unresolved disappearances in and around Amherst.',
    path: '/missing-persons'
  },
  {
    id: 'archive',
    name: 'Archive',
    description: 'Older discussions and community records.',
    path: '/archive'
  }
];


export const AMHERST_BOARD_THREADS: MessageBoardThread[] = [

  {
    id: 'helicopters',
    categoryId: 'discussion',
    title: 'Anyone else hear helicopters last night?',
    author: {
      username: 'riverwalk'
    },
    createdAt: '2026-08-30 08:14 PM',
    updatedAt: '2026-08-31 09:02 AM',
    replyCount: 4,

    posts: [
      {
        id: 'helicopters-1',
        author: {
          username: 'riverwalk'
        },
        postedAt: '2026-08-30 08:14 PM',
        content: `Heard helicopters around 2 AM near the river.

Anyone know what was going on?

Probably nothing, but it sounded like they were circling for a pretty long time.`
      },
      {
        id: 'helicopters-2',
        author: {
          username: 'southridge'
        },
        postedAt: '2026-08-30 09:02 PM',
        content: `I heard them too. Sounded like they were somewhere north of downtown.`
      },
      {
        id: 'helicopters-3',
        author: {
          username: 'amherstnative'
        },
        postedAt: '2026-08-30 10:41 PM',
        content: `Probably related to whatever was going on near the marina.`
      },
      {
        id: 'helicopters-4',
        author: {
          username: 'riverwalk'
        },
        postedAt: '2026-08-31 08:17 AM',
        content: `Police scanner people said there was a search operation, but I haven't seen anything official.`
      }
    ]
  },


  {
    id: 'old-mill',
    categoryId: 'discussion',
    title: 'Strange vehicle parked behind the old mill',
    author: {
      username: 'millroad'
    },
    createdAt: '2026-08-28 06:42 PM',
    updatedAt: '2026-08-30 11:13 PM',
    replyCount: 5,

    posts: [
      {
        id: 'old-mill-1',
        author: {
          username: 'millroad'
        },
        postedAt: '2026-08-28 06:42 PM',
        content: `There has been a dark SUV parked behind the old mill for the last three nights.

No plates that I could see.

Probably construction workers, but figured I would mention it.`
      },
      {
        id: 'old-mill-2',
        author: {
          username: 'oldtimer'
        },
        postedAt: '2026-08-28 07:10 PM',
        content: `People have been going back there for years. Nothing new.`
      },
      {
        id: 'old-mill-3',
        author: {
          username: 'millroad'
        },
        postedAt: '2026-08-29 09:33 PM',
        content: `This one has been there overnight though. That's what seemed unusual.`
      },
      {
        id: 'old-mill-4',
        author: {
          username: 'observer26'
        },
        postedAt: '2026-08-30 11:13 PM',
        content: `The vehicle isn't the interesting part.

Look at the dates connected to the property.`
      }
    ]
  },


  {
    id: 'emily-carter',
    categoryId: 'missing-persons',
    title: 'Does anyone remember Emily Carter?',
    author: {
      username: 'ghostwriter47'
    },
    createdAt: '2026-08-29 07:32 PM',
    updatedAt: '2026-08-31 02:18 PM',
    replyCount: 4,
    sticky: true,

    posts: [
      {
        id: 'emily-1',
        author: {
          username: 'ghostwriter47'
        },
        postedAt: '2026-08-29 07:32 PM',
        content: `It has been almost two years.

I know everyone wants to move on, but something about the official story never made sense to me.

If anyone knows what actually happened that night, maybe it is time someone started asking questions again.`
      },
      {
        id: 'emily-2',
        author: {
          username: 'michael_r'
        },
        postedAt: '2026-08-30 09:14 AM',
        content: `What exactly doesn't make sense?`
      },
      {
        id: 'emily-3',
        author: {
          username: 'ghostwriter47'
        },
        postedAt: '2026-08-30 10:02 AM',
        content: `Start with the timeline.

People keep treating October 18 as the night she disappeared.

It wasn't.`
      },
      {
        id: 'emily-4',
        author: {
          username: 'observer26'
        },
        postedAt: '2026-08-31 02:18 PM',
        content: `He's right about the date.

The missing-person report and the disappearance are not the same event.

That's where the records start getting interesting.`
      }
    ]
  },


  {
    id: 'marina',
    categoryId: 'discussion',
    title: 'Anyone know what happened at the marina?',
    author: {
      username: 'lakeview'
    },
    createdAt: '2026-08-27 03:18 PM',
    replyCount: 2,

    posts: [
      {
        id: 'marina-1',
        author: {
          username: 'lakeview'
        },
        postedAt: '2026-08-27 03:18 PM',
        content: `There were police boats at the marina Sunday night.

Anyone know what happened?`
      },
      {
        id: 'marina-2',
        author: {
          username: 'dockside'
        },
        postedAt: '2026-08-27 05:42 PM',
        content: `Medical call, apparently.`
      }
    ]
  },


  {
    id: 'council-meeting',
    categoryId: 'news',
    title: 'Council meeting moved to Thursday',
    author: {
      username: 'board-admin'
    },
    createdAt: '2026-08-26 11:04 AM',
    replyCount: 0,
    sticky: true,

    posts: [
      {
        id: 'council-1',
        author: {
          username: 'board-admin'
        },
        postedAt: '2026-08-26 11:04 AM',
        content: `The Amherst Town Council has announced that this week's regular meeting will be moved from Wednesday to Thursday due to scheduling conflicts.

The meeting will begin at 7:00 PM at Town Hall.`
      }
    ]
  }

];