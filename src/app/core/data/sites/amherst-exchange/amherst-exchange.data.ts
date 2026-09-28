import {
  ExchangeListing,
  FakePage
} from '../../../models/fake-page';

export const AMHERST_EXCHANGE_LISTINGS: ExchangeListing[] = [
  // ==========================================================
  // OTHER LOCAL VEHICLE LISTINGS
  // ==========================================================

  {
    id: '2019-ford-ranger',
    title: '2019 Ford Ranger XLT',
    price: '$18,900',
    location: 'Madison Heights, VA',
    seller: 'mike_r',
    posted: '2 days ago',
    category: 'Vehicles',
    image: 'assets/exchange/ford-ranger.webp',
    images: [
      'assets/exchange/ford-ranger.webp'
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
    image: 'assets/exchange/jeep-liberty.webp',
    images: [
      'assets/exchange/jeep-liberty.webp'
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
    image: 'assets/exchange/gaming-pc.webp',
    images: [
      'assets/exchange/gaming-pc.webp'
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
    image: 'assets/exchange/sony-tv.webp',
    images: [
      'assets/exchange/sony-tv.webp'
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
    image: 'assets/exchange/oak-table.webp',
    images: [
      'assets/exchange/oak-table.webp'
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
    image: 'assets/exchange/fishing-gear.webp',
    images: [
      'assets/exchange/fishing-gear.webp'
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

];
