import { FakePage } from '../models/fake-page';

export const FAKE_PAGES: FakePage[] = [

  {
    id: 'home',
    domain: 'hollowcreekboard.local',
    path: '/',
    title: 'Hollow Creek Community Board',

    content: `
      Local news, discussion, and community information.
    `,

    links: [
      {
        label: 'Missing Persons',
        path: '/missing-persons'
      }
    ]
  },

  {
    id: 'missing-persons',
    domain: 'hollowcreekboard.local',
    path: '/missing-persons',
    title: 'Missing Persons',

    content: `
      Community discussion surrounding unresolved
      missing-person cases in Hollow Creek.
    `,

    links: [
      {
        label: 'Emily Carter — Missing Since 2024',
        path: '/thread/emily-carter'
      }
    ]
  },

  {
    id: 'emily-thread',
    domain: 'hollowcreekboard.local',
    path: '/thread/emily-carter',
    title: 'Does anyone remember Emily Carter?',

    content: `
      It's been almost two years.

      I know everyone wants to move on,
      but something about the official story
      never made sense to me.

      If anyone knows what actually happened
      that night, maybe it's time someone
      started asking questions again.
    `,

    links: [
      {
        label: 'View ghostwriter47 profile',
        path: '/user/ghostwriter47'
      }
    ]
  },

  {
    id: 'ghostwriter-profile',
    domain: 'hollowcreekboard.local',
    path: '/user/ghostwriter47',
    title: 'ghostwriter47',

    content: `
      Member since 2018.

      Posts: 47
      Reputation: 812

      Last active: 2 hours ago.

      "Some things are better left buried."
    `
  }

];