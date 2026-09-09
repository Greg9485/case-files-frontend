import {
  ExchangeListing,
  FakePage
} from '../../../models/fake-page';

export const AMHERST_EXCHANGE_LISTINGS: ExchangeListing[] = [

  // ==========================================================
  // BLACK SUV — PRIMARY STORY CLUE
  // ==========================================================

  {
    id: 'black-suv',
    title: '2017 Black SUV',
    price: '$8,500',
    location: 'Amherst, VA',
    seller: 'nightshift84',
    posted: '3 days ago',
    category: 'Vehicles',
    image: 'assets/exchange/black-suv/cover.jpg',
    images: [
      'assets/exchange/black-suv/cover.jpg',
      'assets/exchange/black-suv/1.jpg',
      'assets/exchange/black-suv/2.jpg'
    ],
    description:
      '2017 Black SUV. Runs well. No accidents reported. ' +
      'Pickup available near the old mill.'
  },

  // ==========================================================
  // OTHER LOCAL VEHICLE LISTINGS
  // ==========================================================

  {
    id: '2014-honda-civic',
    title: '2014 Honda Civic LX',
    price: '$7,200',
    location: 'Amherst, VA',
    seller: 'jennifer_m',
    posted: '1 day ago',
    category: 'Vehicles',
    image: 'assets/exchange/honda-civic/cover.jpg',
    images: [
      'assets/exchange/honda-civic/cover.jpg'
    ],
    description:
      'Clean title. 142k miles. New tires. ' +
      'Runs and drives great.'
  },

  {
    id: '2019-ford-ranger',
    title: '2019 Ford Ranger XLT',
    price: '$18,900',
    location: 'Madison Heights, VA',
    seller: 'mike_r',
    posted: '2 days ago',
    category: 'Vehicles',
    image: 'assets/exchange/ford-ranger/cover.jpg',
    images: [
      'assets/exchange/ford-ranger/cover.jpg'
    ],
    description:
      '4x4 pickup. One owner. 92k miles. ' +
      'Some cosmetic wear.'
  },

  {
    id: '2008-jeep-liberty',
    title: '2008 Jeep Liberty',
    price: '$4,800',
    location: 'Amherst, VA',
    seller: 'oldmillman',
    posted: '4 days ago',
    category: 'Vehicles',
    image: 'assets/exchange/jeep-liberty/cover.jpg',
    images: [
      'assets/exchange/jeep-liberty/cover.jpg'
    ],
    description:
      'Runs good. Needs minor interior work. ' +
      'Selling as-is.'
  },

  // ==========================================================
  // ELECTRONICS
  // ==========================================================

  {
    id: 'gaming-pc',
    title: 'Gaming PC — Ryzen 7 / RTX',
    price: '$950',
    location: 'Amherst, VA',
    seller: 'pixelpusher',
    posted: '5 hours ago',
    category: 'Electronics',
    image: 'assets/exchange/gaming-pc/cover.jpg',
    images: [
      'assets/exchange/gaming-pc/cover.jpg'
    ],
    description:
      'Gaming PC in good condition. ' +
      'Includes keyboard and monitor.'
  },

  {
    id: 'sony-tv',
    title: '55" Sony 4K TV',
    price: '$325',
    location: 'Amherst, VA',
    seller: 'cassie84',
    posted: '1 day ago',
    category: 'Electronics',
    image: 'assets/exchange/sony-tv/cover.jpg',
    images: [
      'assets/exchange/sony-tv/cover.jpg'
    ],
    description:
      '55 inch Sony 4K smart TV. ' +
      'Works perfectly. Pickup only.'
  },

  // ==========================================================
  // HOME / MISC
  // ==========================================================

  {
    id: 'solid-oak-table',
    title: 'Solid Oak Dining Table',
    price: '$180',
    location: 'Amherst, VA',
    seller: 'bethsells',
    posted: '2 days ago',
    category: 'Home',
    image: 'assets/exchange/oak-table/cover.jpg',
    images: [
      'assets/exchange/oak-table/cover.jpg'
    ],
    description:
      'Solid oak table with six chairs. ' +
      'Some surface scratches but very sturdy.'
  },

  {
    id: 'fishing-gear',
    title: 'Fishing Gear Lot',
    price: '$120',
    location: 'Madison Heights, VA',
    seller: 'river_rat',
    posted: '3 days ago',
    category: 'Sports & Outdoors',
    image: 'assets/exchange/fishing-gear/cover.jpg',
    images: [
      'assets/exchange/fishing-gear/cover.jpg'
    ],
    description:
      'Several rods, tackle boxes and assorted gear. ' +
      'Selling everything together.'
  }

];

export const AMHERST_EXCHANGE_PAGES: FakePage[] = [

  // ==========================================================
  // MARKETPLACE HOME
  // ==========================================================

  {
    id: 'exchange-home',
    domain: 'amherst-exchange.local',
    path: '/',
    title: 'Amherst Exchange',
    subtitle: 'Buy. Sell. Trade.',
    category: 'MARKETPLACE',
    type: 'EXCHANGE_CATEGORY',
    content:
      'Local buying and selling in Amherst, Virginia.',
    listings: AMHERST_EXCHANGE_LISTINGS
  },

  // ==========================================================
  // VEHICLES
  // ==========================================================

  {
    id: 'exchange-vehicles',
    domain: 'amherst-exchange.local',
    path: '/category/vehicles',
    title: 'Vehicles',
    subtitle: 'Cars, trucks, motorcycles, parts and more.',
    category: 'VEHICLES',
    type: 'EXCHANGE_CATEGORY',
    content:
      'Vehicles currently listed by local sellers.',
    listings: AMHERST_EXCHANGE_LISTINGS.filter(
      listing => listing.category === 'Vehicles'
    )
  },

  // ==========================================================
  // BLACK SUV — STORY CLUE
  // ==========================================================

  {
    id: 'exchange-black-suv',
    domain: 'amherst-exchange.local',
    path: '/listing/black-suv',
    title: '2017 Black SUV',
    category: 'VEHICLE',
    type: 'EXCHANGE_LISTING',
    content: '',
    listings: AMHERST_EXCHANGE_LISTINGS.filter(
      listing => listing.id === 'black-suv'
    ),
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

  // ==========================================================
  // SELLER PROFILE
  // ==========================================================

  {
    id: 'exchange-nightshift',
    domain: 'amherst-exchange.local',
    path: '/user/nightshift84',
    title: 'nightshift84',
    subtitle: 'Local seller',
    category: 'SELLER PROFILE',
    type: 'EXCHANGE_CATEGORY',
    content:
      'Member since: 2022\n\n' +
      'Listings: 14\n\n' +
      'Reputation: 96%\n\n' +
      'Last active: Yesterday\n\n' +
      '"I buy and sell whatever people need."',
    listings: AMHERST_EXCHANGE_LISTINGS.filter(
      listing => listing.seller === 'nightshift84'
    ),
    links: [
      {
        label: 'View vehicle listing',
        path: '/listing/black-suv'
      }
    ]
  }

];