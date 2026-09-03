import { FakeSite } from '../models/fake-site';

export const FAKE_SITES: FakeSite[] = [

  // {
  //   domain: 'amherstboard.local',
  //   name: 'AMHERST COMMUNITY BOARD',
  //   tagline: 'EST. 2016',
  //   accountLabel: 'COMMUNITY MEMBER',

  //   navigation: [
  //     { label: 'HOME', path: '/' },
  //     { label: 'LOCAL', path: '/local' },
  //     { label: 'NEWS', path: '/news' },
  //     { label: 'DISCUSSION', path: '/discussion' },
  //     { label: 'MISSING PERSONS', path: '/missing-persons' },
  //     { label: 'ARCHIVE', path: '/archive' }
  //   ]
  // },

  {
    name: 'Amherst Community Board',
    domain: 'amherstboard.local',
    tagline: 'Your independent source for local information.',
    accountLabel: 'COMMUNITY ACCESS',
    navigation: [
      { label: 'HOME', path: '/' },
      { label: 'LOCAL', path: '/local' },
      { label: 'NEWS', path: '/news' },
      { label: 'DISCUSSION', path: '/discussion' },
      { label: 'MISSING PERSONS', path: '/missing-persons' },
      { label: 'ARCHIVE', path: '/archive' },
      { label: 'EXCHANGE', domain: 'amherst-exchange.local', path: '/' },
      { label: 'POLICE RECORDS', domain: 'amherstpd.local', path: '/' }
    ]
  },

  {
    domain: 'amherstnews.local',
    name: 'AMHERST NEWS',
    tagline: 'INDEPENDENT REPORTING',
    accountLabel: 'READER',

    navigation: [
      { label: 'HOME', path: '/' },
      { label: 'PATROLS', path: '/stories/patrols' },
      { label: 'OLD MILL', path: '/stories/old-mill' }
    ]
  },

  {
    domain: 'amherstpd.local',
    name: 'AMHERST POLICE DEPARTMENT',
    tagline: 'PUBLIC RECORDS PORTAL',
    accountLabel: 'PUBLIC ACCESS',

    navigation: [
      { label: 'HOME', path: '/' },
      { label: 'MISSING PERSONS', path: '/missing-persons' },
      { label: 'INCIDENT RECORDS', path: '/incidents' }
    ]
  },

  {
    domain: 'amherst-exchange.local',
    name: 'AMHERST EXCHANGE',
    tagline: 'BUY • SELL • TRADE',
    accountLabel: 'MEMBER',

    navigation: [
      { label: 'HOME', path: '/' },
      { label: 'VEHICLES', path: '/category/vehicles' },
      { label: 'ELECTRONICS', path: '/category/electronics' },
      { label: 'MISCELLANEOUS', path: '/category/misc' },
      { label: 'USERS', path: '/user/nightshift84' }
    ]
  },

  {
    domain: 'backroom.local',
    name: 'THE BACKROOM',
    tagline: 'PRIVATE DISCUSSION NETWORK',
    accountLabel: 'VERIFIED MEMBER',

    navigation: [
      { label: 'HOME', path: '/' },
      { label: 'DISCUSSIONS', path: '/forums' },
      { label: 'MARKETPLACE', path: '/market' },
      { label: 'USERS', path: '/users' }
    ]
  },

  // ==========================================================
  // UNDERNET
  // ==========================================================

    {
      domain: 'undernet.local',
      name: 'UNDERNET',
      tagline: 'ANONYMOUS DISCUSSION NETWORK',
      accountLabel: 'UNVERIFIED USER',
      navigation: [
        { label: 'HOME', path: '/' },
        { label: 'BOARDS', path: '/boards' },
        { label: 'MARKET', path: '/market' },
        { label: 'SERVICES', path: '/services' },
        { label: 'STRANGE', path: '/board/strange-unexplained' },
        { label: 'USERS', path: '/users' },
        { label: 'ARCHIVES', path: '/archives' }
      ]
    }

];