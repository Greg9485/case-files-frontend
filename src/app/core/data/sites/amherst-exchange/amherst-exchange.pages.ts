import {
  ExchangeListing,
  FakePage
} from '../../../models/fake-page';


const EXCHANGE_LISTINGS: ExchangeListing[] = [
  {
    id: '2019-ford-ranger',
    title: '2019 Ford Ranger XLT',
    price: '$18,900',
    location: 'Madison Heights, VA',
    posted: '2 days ago',
    category: 'Vehicles',
    seller: 'mike_r',
    image: '/assets/exchange/ford-ranger.webp',
    condition: 'Good',
    description: '4x4 pickup. One owner. 92k miles. Some cosmetic wear.'
  },
  {
    id: '2008-jeep-liberty',
    title: '2008 Jeep Liberty',
    price: '$4,800',
    location: 'Amherst, VA',
    posted: '4 days ago',
    category: 'Vehicles',
    seller: 'oldmillman',
    image: '/assets/exchange/jeep-liberty.webp',
    condition: 'Used',
    description: 'Runs good. Needs minor interior work. Selling as-is.'
  },
  {
    id: 'gaming-pc',
    title: 'Gaming PC — Ryzen 7 / RTX',
    price: '$950',
    location: 'Amherst, VA',
    posted: '5 hours ago',
    category: 'Electronics',
    seller: 'pixelpusher',
    image: '/assets/exchange/gaming-pc.webp',
    condition: 'Good',
    description: 'Gaming PC in good condition. Includes keyboard and monitor.'
  },
  {
    id: 'sony-tv',
    title: '55-inch Sony 4K TV',
    price: '$325',
    location: 'Amherst, VA',
    posted: '1 day ago',
    category: 'Electronics',
    seller: 'cassie84',
    image: '/assets/exchange/sony-tv.webp',
    condition: 'Good',
    description: '55-inch Sony 4K smart TV. Works perfectly. Pickup only.'
  },
  {
    id: 'guitar-amp',
    title: 'Fender Practice Amp',
    price: '$90',
    location: 'Madison Heights, VA',
    posted: '1 day ago',
    category: 'Electronics',
    seller: 'riverroad',
    image: '/assets/exchange/guitar-amp.webp',
    condition: 'Good',
    description: 'Fender practice amplifier. Works properly. Downsizing equipment.'
  },
  {
    id: 'oak-dining-table',
    title: 'Solid Oak Dining Table',
    price: '$175',
    location: 'Amherst, VA',
    posted: '2 days ago',
    category: 'Furniture',
    seller: 'amherstmom',
    image: '/assets/exchange/oak-table.webp',
    condition: 'Good',
    description: 'Solid oak table with six chairs. Some surface scratches but very sturdy.'
  },
  {
    id: 'bookshelf',
    title: 'Wood Bookshelf',
    price: '$45',
    location: 'Amherst, VA',
    posted: '4 days ago',
    category: 'Furniture',
    seller: 'bluebird22',
    image: '/assets/exchange/bookshelf.webp',
    condition: 'Good',
    description: 'Wood bookshelf. Five shelves. Pickup only.'
  },
  {
    id: 'fishing-gear',
    title: 'Fishing Gear Lot',
    price: '$120',
    location: 'Madison Heights, VA',
    posted: '3 days ago',
    category: 'Sports & Outdoors',
    seller: 'river_rat',
    image: '/assets/exchange/fishing-gear.webp',
    condition: 'Used',
    description: 'Several rods, tackle boxes and assorted gear. Selling everything together.'
  },
  {
    id: 'lawn-mower',
    title: 'Honda Push Mower',
    price: '$140',
    location: 'Amherst, VA',
    posted: '3 days ago',
    category: 'Home & Garden',
    seller: 'daveinva',
    image: '/assets/exchange/lawn-mower.webp',
    condition: 'Used',
    description: 'Honda push mower. Starts easily and runs well.'
  },
  {
    id: 'camping-tent',
    title: '4 Person Camping Tent',
    price: '$60',
    location: 'Amherst, VA',
    posted: '5 days ago',
    category: 'Outdoor',
    seller: 'ridgewalker',
    image: '/assets/exchange/camping-tent.webp',
    condition: 'Like New',
    description: 'Used twice. No damage or leaks. Includes carrying bag.'
  },
  {
    id: 'coffee-maker',
    title: 'Keurig Coffee Maker',
    price: '$35',
    location: 'Amherst, VA',
    posted: '6 hours ago',
    category: 'Home & Garden',
    seller: 'localdealz',
    image: '/assets/exchange/coffee-maker.webp',
    condition: 'Good',
    description: 'Works great. Moving and clearing out the kitchen.'
  },
  {
    id: 'mountain-bike',
    title: 'Trek Mountain Bike',
    price: '$250',
    location: 'Amherst, VA',
    posted: '2 days ago',
    category: 'Outdoor',
    seller: 'blue_ridge',
    image: '/assets/exchange/mountain-bike.webp',
    condition: 'Good',
    description: 'Adult mountain bike. Recently tuned up.'
  },
  {
    id: 'tool-set',
    title: 'Mechanics Tool Set',
    price: '$80',
    location: 'Amherst, VA',
    posted: '1 day ago',
    category: 'Tools',
    seller: 'lotline',
    image: '/assets/exchange/tool-set.webp',
    condition: 'Good',
    description: 'Complete mechanics tool set. Some pieces show normal wear. For pickup, call Dan Pruitt directly at 434-555-0148 instead of messaging here. It is quicker and saves the seller fee.'
  }
];


const listingPage = (listing: ExchangeListing): FakePage => ({
  id: `exchange-${listing.id}`,
  domain: 'amherst-exchange.local',
  path: `/listing/${listing.id}`,
  title: listing.title,
  category: `${listing.category.toUpperCase()} LISTING`,
  type: 'EXCHANGE_LISTING',
  content: '',
  listings: [listing],
  ...(listing.seller === 'lotline'
    ? { links: [{ label: 'View seller profile', path: '/user/lotline' }] }
    : {})
});


export const AMHERST_EXCHANGE_PAGES: FakePage[] = [
  {
    id: 'exchange-home',
    domain: 'amherst-exchange.local',
    path: '/',
    title: 'Amherst Exchange',
    subtitle: 'Buy, sell, and trade locally.',
    category: 'LOCAL MARKETPLACE',
    type: 'EXCHANGE_HOME',
    content: 'Local buying and selling in Amherst, Virginia.',
    listings: EXCHANGE_LISTINGS
  },
  {
    id: 'exchange-vehicles',
    domain: 'amherst-exchange.local',
    path: '/category/vehicles',
    title: 'Vehicles',
    subtitle: 'Cars, trucks, motorcycles, and automotive parts.',
    category: 'VEHICLES',
    type: 'EXCHANGE_CATEGORY',
    content: 'Vehicles currently listed by local sellers.',
    listings: EXCHANGE_LISTINGS.filter(listing => listing.category === 'Vehicles')
  },
  {
    id: 'exchange-electronics',
    domain: 'amherst-exchange.local',
    path: '/category/electronics',
    title: 'Electronics',
    category: 'ELECTRONICS',
    type: 'EXCHANGE_CATEGORY',
    content: '',
    listings: EXCHANGE_LISTINGS.filter(listing => listing.category === 'Electronics')
  },
  {
    id: 'exchange-furniture',
    domain: 'amherst-exchange.local',
    path: '/category/furniture',
    title: 'Furniture',
    category: 'FURNITURE',
    type: 'EXCHANGE_CATEGORY',
    content: '',
    listings: EXCHANGE_LISTINGS.filter(listing => listing.category === 'Furniture')
  },
  {
    id: 'exchange-misc',
    domain: 'amherst-exchange.local',
    path: '/category/misc',
    title: 'Miscellaneous',
    category: 'MISCELLANEOUS',
    type: 'EXCHANGE_CATEGORY',
    content: '',
    listings: EXCHANGE_LISTINGS.filter(listing => listing.category !== 'Vehicles' && listing.category !== 'Electronics' && listing.category !== 'Furniture')
  },
  ...EXCHANGE_LISTINGS.map(listingPage),
  {
    id: 'exchange-lotline',
    domain: 'amherst-exchange.local',
    path: '/user/lotline',
    title: 'lotline',
    subtitle: 'Local seller',
    category: 'SELLER PROFILE',
    type: 'EXCHANGE_CATEGORY',
    content: 'Member since: 2021\n\nListings: 1 active\n\nReputation: 98%\n\nUsually easier to arrange local pickup by phone.',
    listings: EXCHANGE_LISTINGS.filter(listing => listing.seller === 'lotline')
  }
];
