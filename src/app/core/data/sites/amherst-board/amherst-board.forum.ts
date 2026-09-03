import { ForumPost } from '../../../models/forum-post';

export const AMHERST_BOARD_FORUM_POSTS:
  Record<string, ForumPost[]> = {

  '/discussion/helicopters': [

    {
      id: 'helicopters-1',
      username: 'riverwatch',
      userPath: '/user/riverwatch',
      timestamp: '10/21/2024 • 8:14 AM',
      content:
        'Heard helicopters around 2 AM near the river. Anyone know what was going on? Probably nothing, but it sounded like they were circling for a pretty long time.',
      isOriginalPoster: true
    },

    {
      id: 'helicopters-2',
      username: 'bluebird',
      userPath: '/user/bluebird',
      timestamp: '10/21/2024 • 8:31 AM',
      content:
        'Heard them too. I was near Main Street and they sounded like they were headed south.'
    },

    {
      id: 'helicopters-3',
      username: 'oldtimer82',
      userPath: '/user/oldtimer82',
      timestamp: '10/21/2024 • 9:02 AM',
      content:
        'Could have been state police. They do training around here sometimes.'
    }

  ],


  '/discussion/old-mill': [

    {
      id: 'old-mill-1',
      username: 'millroad',
      userPath: '/user/millroad',
      timestamp: '10/18/2024 • 6:42 PM',
      content:
        'There has been a dark SUV parked behind the old mill for the last three nights. No plates that I could see. Probably construction workers, but figured I would mention it.',
      isOriginalPoster: true
    },

    {
      id: 'old-mill-2',
      username: 'northside',
      userPath: '/user/northside',
      timestamp: '10/18/2024 • 7:03 PM',
      content:
        'What kind of SUV? There are contractors around the property now.'
    },

    {
      id: 'old-mill-3',
      username: 'millroad',
      userPath: '/user/millroad',
      timestamp: '10/18/2024 • 7:18 PM',
      content:
        'Dark, maybe black. Older model. It was parked farther back than the construction equipment.'
    }

  ],


  '/discussion/marina': [

    {
      id: 'marina-1',
      username: 'dockside',
      userPath: '/user/dockside',
      timestamp: '10/20/2024 • 10:11 PM',
      content:
        'There were police boats at the marina Sunday night. Anyone know what happened?',
      isOriginalPoster: true
    },

    {
      id: 'marina-2',
      username: 'lakehouse',
      userPath: '/user/lakehouse',
      timestamp: '10/20/2024 • 10:36 PM',
      content:
        'I heard it was a medical call.'
    },

    {
      id: 'marina-3',
      username: 'dockside',
      userPath: '/user/dockside',
      timestamp: '10/20/2024 • 11:02 PM',
      content:
        'EDIT: Yeah, sounds like that was it. False alarm.'
    }

  ],


  '/thread/emily-carter': [

    {
      id: 'emily-1',
      username: 'quietstatic',
      userPath: '/user/quietstatic',
      timestamp: '10/22/2024 • 11:47 PM',
      content:
        'It has been almost two years. I know everyone wants to move on, but something about the official story never made sense to me. If anyone knows what actually happened that night, maybe it is time someone started asking questions again.',
      isOriginalPoster: true
    }

  ],


  '/thread/emily-carter/replies': [

    {
      id: 'emily-reply-1',
      username: 'quietstatic',
      userPath: '/user/quietstatic',
      timestamp: '10/22/2024 • 11:47 PM',
      content:
        'If you are actually looking through the records, pay attention to the dates.\n\nThey filed the report the next morning.\n\nThat is not the night she disappeared.\n\nPeople keep mixing those two up.',
      isOriginalPoster: true
    },

    {
      id: 'emily-reply-2',
      username: 'michael_r',
      userPath: '/user/michael_r',
      timestamp: '10/23/2024 • 8:14 AM',
      content:
        'What difference does that make?'
    },

    {
      id: 'emily-reply-3',
      username: 'quietstatic',
      userPath: '/user/quietstatic',
      timestamp: '10/23/2024 • 8:31 AM',
      content:
        'Probably none.\n\nProbably.'
    },

    {
      id: 'emily-reply-4',
      username: 'sarah_w',
      userPath: '/user/sarah_w',
      timestamp: '10/24/2024 • 7:52 PM',
      content:
        'The whole thing felt wrong from the beginning.\n\nThe timeline does not line up with what people were saying around town.'
    },

    {
      id: 'emily-reply-5',
      username: 'northbound',
      userPath: '/user/northbound',
      timestamp: '10/25/2024 • 12:08 AM',
      content:
        'People remember the press conference. They do not remember what happened before it.'
    }

  ]

};