import {
ExchangeListing,
FakePage
} from '../../../models/fake-page';

const EXCHANGE_LISTINGS: ExchangeListing[] = [

{
id: 'black-suv',
title: '2017 Black SUV',
price: '$8,500',
location: 'Amherst, VA',
posted: '2 days ago',
category: 'Vehicles',
condition: 'Good',
image: '/assets/exchange/black-suv.jpg',
images: [
'/assets/exchange/black-suv.jpg',
'/assets/exchange/black-suv-2.jpg',
'/assets/exchange/black-suv-3.jpg'
],
seller: 'nightshift84',
description: `2017 black SUV.
Runs well. No accidents reported.
Selling because I recently bought another vehicle.
Pickup available near the old mill.
Serious inquiries only.
   `
},

{
id: 'oak-dining-table',
title: 'Solid Oak Dining Table',
price: '$175',
location: 'Amherst, VA',
posted: '5 hours ago',
category: 'Furniture',
condition: 'Good',
image: '/assets/exchange/oak-table.jpg',
seller: 'amherstmom',
description: `Solid oak dining table.
Seats six comfortably. Some normal wear
from years of use.
   `
},

{
id: 'guitar-amp',
title: 'Fender Practice Amp',
price: '$90',
location: 'Madison Heights, VA',
posted: '1 day ago',
category: 'Electronics',
condition: 'Good',
image: '/assets/exchange/guitar-amp.jpg',
seller: 'riverroad',
description: `Fender practice amplifier.
Works properly. Downsizing equipment.
   `
},

{
id: 'lawn-mower',
title: 'Honda Push Mower',
price: '$140',
location: 'Amherst, VA',
posted: '3 days ago',
category: 'Home & Garden',
condition: 'Used',
image: '/assets/exchange/lawn-mower.jpg',
seller: 'daveinva',
description: `Honda push mower.
Starts easily and runs well.
   `
},

{
id: 'bookshelf',
title: 'Wood Bookshelf',
price: '$45',
location: 'Amherst, VA',
posted: '4 days ago',
category: 'Furniture',
condition: 'Good',
image: '/assets/exchange/bookshelf.jpg',
seller: 'bluebird22',
description: `Wood bookshelf. Five shelves.
Pickup only.
   `
},

{
id: 'camping-tent',
title: '4 Person Camping Tent',
price: '$60',
location: 'Amherst, VA',
posted: '5 days ago',
category: 'Outdoor',
condition: 'Like New',
image: '/assets/exchange/camping-tent.jpg',
seller: 'ridgewalker',
description: `Used twice. No damage or leaks.
Includes carrying bag.
   `
},

{
id: 'coffee-maker',
title: 'Keurig Coffee Maker',
price: '$35',
location: 'Amherst, VA',
posted: '6 hours ago',
category: 'Home & Garden',
condition: 'Good',
image: '/assets/exchange/coffee-maker.jpg',
seller: 'localdealz',
description: `Works great.
Moving and clearing out the kitchen.
   `
},

{
id: 'mountain-bike',
title: 'Trek Mountain Bike',
price: '$250',
location: 'Amherst, VA',
posted: '2 days ago',
category: 'Outdoor',
condition: 'Good',
image: '/assets/exchange/mountain-bike.jpg',
seller: 'blue_ridge',
description: `Adult mountain bike.
Recently tuned up.
   `
},

{
id: 'tool-set',
title: 'Mechanics Tool Set',
price: '$80',
location: 'Amherst, VA',
posted: '1 day ago',
category: 'Tools',
condition: 'Good',
image: '/assets/exchange/tool-set.jpg',
seller: 'garageguy',
description: `Complete mechanics tool set.
Some pieces show normal wear.
   `
}

];

const BLACK_SUV = EXCHANGE_LISTINGS.find(
listing => listing.id === 'black-suv'
)!;

export const AMHERST_EXCHANGE_PAGES: FakePage[] = [

// ============================================================
// HOME
// ============================================================

{
id: 'exchange-home',
domain: 'amherst-exchange.local',
path: '/',
title: 'Amherst Exchange',
subtitle: 'Buy, sell, and trade locally.',
category: 'LOCAL MARKETPLACE',
type: 'EXCHANGE_HOME',
content: '',
listings: EXCHANGE_LISTINGS
},

// ============================================================
// VEHICLES
// ============================================================

{
id: 'exchange-vehicles',
domain: 'amherst-exchange.local',
path: '/category/vehicles',
title: 'Vehicles',
subtitle: 'Cars, trucks, motorcycles, and automotive parts.',
category: 'VEHICLES',
type: 'EXCHANGE_CATEGORY',
content: '',
listings: [
BLACK_SUV
]
},

// ============================================================
// ELECTRONICS
// ============================================================

{
id: 'exchange-electronics',
domain: 'amherst-exchange.local',
path: '/category/electronics',
title: 'Electronics',
category: 'ELECTRONICS',
type: 'EXCHANGE_CATEGORY',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'guitar-amp'
)!
]
},

// ============================================================
// FURNITURE
// ============================================================

{
id: 'exchange-furniture',
domain: 'amherst-exchange.local',
path: '/category/furniture',
title: 'Furniture',
category: 'FURNITURE',
type: 'EXCHANGE_CATEGORY',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'oak-dining-table'
)!,
EXCHANGE_LISTINGS.find(
listing => listing.id === 'bookshelf'
)!
]
},

// ============================================================
// MISCELLANEOUS
// ============================================================

{
id: 'exchange-misc',
domain: 'amherst-exchange.local',
path: '/category/misc',
title: 'Miscellaneous',
category: 'MISCELLANEOUS',
type: 'EXCHANGE_CATEGORY',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'camping-tent'
)!,
EXCHANGE_LISTINGS.find(
listing => listing.id === 'mountain-bike'
)!,
EXCHANGE_LISTINGS.find(
listing => listing.id === 'tool-set'
)!
]
},

// ============================================================
// BLACK SUV LISTING
// ============================================================

{
id: 'exchange-black-suv',
domain: 'amherst-exchange.local',
path: '/listing/black-suv',
title: '2017 Black SUV',
category: 'VEHICLE LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
BLACK_SUV
],
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

// ============================================================
// OAK DINING TABLE LISTING
// ============================================================

{
id: 'exchange-oak-dining-table',
domain: 'amherst-exchange.local',
path: '/listing/oak-dining-table',
title: 'Solid Oak Dining Table',
category: 'FURNITURE LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'oak-dining-table'
)!
]
},

// ============================================================
// GUITAR AMP LISTING
// ============================================================

{
id: 'exchange-guitar-amp',
domain: 'amherst-exchange.local',
path: '/listing/guitar-amp',
title: 'Fender Practice Amp',
category: 'ELECTRONICS LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'guitar-amp'
)!
]
},

// ============================================================
// LAWN MOWER LISTING
// ============================================================

{
id: 'exchange-lawn-mower',
domain: 'amherst-exchange.local',
path: '/listing/lawn-mower',
title: 'Honda Push Mower',
category: 'HOME & GARDEN LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'lawn-mower'
)!
]
},

// ============================================================
// BOOKSHELF LISTING
// ============================================================

{
id: 'exchange-bookshelf',
domain: 'amherst-exchange.local',
path: '/listing/bookshelf',
title: 'Wood Bookshelf',
category: 'FURNITURE LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'bookshelf'
)!
]
},

// ============================================================
// CAMPING TENT LISTING
// ============================================================

{
id: 'exchange-camping-tent',
domain: 'amherst-exchange.local',
path: '/listing/camping-tent',
title: '4 Person Camping Tent',
category: 'OUTDOOR LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'camping-tent'
)!
]
},

// ============================================================
// COFFEE MAKER LISTING
// ============================================================

{
id: 'exchange-coffee-maker',
domain: 'amherst-exchange.local',
path: '/listing/coffee-maker',
title: 'Keurig Coffee Maker',
category: 'HOME & GARDEN LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'coffee-maker'
)!
]
},

// ============================================================
// MOUNTAIN BIKE LISTING
// ============================================================

{
id: 'exchange-mountain-bike',
domain: 'amherst-exchange.local',
path: '/listing/mountain-bike',
title: 'Trek Mountain Bike',
category: 'OUTDOOR LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'mountain-bike'
)!
]
},

// ============================================================
// TOOL SET LISTING
// ============================================================

{
id: 'exchange-tool-set',
domain: 'amherst-exchange.local',
path: '/listing/tool-set',
title: 'Mechanics Tool Set',
category: 'TOOLS LISTING',
type: 'EXCHANGE_LISTING',
content: '',
listings: [
EXCHANGE_LISTINGS.find(
listing => listing.id === 'tool-set'
)!
]
},

// ============================================================
// SELLER PROFILE
// ============================================================

{
id: 'exchange-nightshift',
domain: 'amherst-exchange.local',
path: '/user/nightshift84',
title: 'nightshift84',
subtitle: 'Local seller',
category: 'SELLER PROFILE',
content: '',
listings: [
BLACK_SUV
]
}

];
