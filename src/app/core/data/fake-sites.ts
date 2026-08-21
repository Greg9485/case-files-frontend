import { FakeSite } from '../models/fake-site';

export const FAKE_SITES: FakeSite[] = [

  {
    domain: 'hollowcreekboard.local',
    name: 'HOLLOW CREEK COMMUNITY BOARD',
    tagline: 'EST. 2016',
    accountLabel: 'COMMUNITY MEMBER',

    navigation: [
      {
        label: 'HOME',
        path: '/'
      },
      {
        label: 'LOCAL',
        path: '/local'
      },
      {
        label: 'NEWS',
        path: '/news'
      },
      {
        label: 'DISCUSSION',
        path: '/discussion'
      },
      {
        label: 'MISSING PERSONS',
        path: '/missing-persons'
      },
      {
        label: 'ARCHIVE',
        path: '/archive'
      }
    ]
  },


  {
    domain: 'hollowcreeknews.local',
    name: 'HOLLOW CREEK NEWS',
    tagline: 'INDEPENDENT REPORTING',
    accountLabel: 'READER',

    navigation: [
      {
        label: 'HOME',
        path: '/'
      },
      {
        label: 'PATROLS',
        path: '/stories/patrols'
      },
      {
        label: 'OLD MILL',
        path: '/stories/old-mill'
      }
    ]
  },


  {
    domain: 'hollowcreekpd.local',
    name: 'HOLLOW CREEK POLICE DEPARTMENT',
    tagline: 'PUBLIC RECORDS PORTAL',
    accountLabel: 'PUBLIC ACCESS',

    navigation: [
      {
        label: 'HOME',
        path: '/'
      },
      {
        label: 'MISSING PERSONS',
        path: '/missing-persons'
      },
      {
        label: 'INCIDENT RECORDS',
        path: '/incidents'
      }
    ]
  },


  {
    domain: 'hc-exchange.local',
    name: 'HOLLOW CREEK EXCHANGE',
    tagline: 'BUY • SELL • TRADE',
    accountLabel: 'MEMBER',

    navigation: [
      {
        label: 'HOME',
        path: '/'
      },
      {
        label: 'VEHICLES',
        path: '/category/vehicles'
      },
      {
        label: 'ELECTRONICS',
        path: '/category/electronics'
      },
      {
        label: 'MISCELLANEOUS',
        path: '/category/misc'
      },
      {
        label: 'USERS',
        path: '/user/nightshift84'
      }
    ]
  },


  {
    domain: 'backroom.local',
    name: 'THE BACKROOM',
    tagline: 'PRIVATE DISCUSSION NETWORK',
    accountLabel: 'VERIFIED MEMBER',

    navigation: [
      {
        label: 'HOME',
        path: '/'
      },
      {
        label: 'DISCUSSIONS',
        path: '/forums'
      },
      {
        label: 'MARKETPLACE',
        path: '/market'
      },
      {
        label: 'USERS',
        path: '/users'
      }
    ]
  }

];