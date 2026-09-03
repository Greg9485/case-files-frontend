import { FakePage } from '../../../models/fake-page';

export const AMHERST_EXCHANGE_PAGES: FakePage[] = [

    {
        id: 'exchange-home',
        domain: 'amherst-exchange.local',
        path: '/',
        title: 'Amherst Exchange',
        subtitle: 'Buy. Sell. Trade.',
        category: 'CLASSIFIEDS',
        content: `
        Amherst Exchange is a local marketplace for
        buying, selling, and trading goods and services.

        Listings are posted by users and are not verified.
        `,
        links: [
            {
            label: 'Vehicles',
            path: '/category/vehicles'
            },
            {
            label: 'Electronics',
            path: '/category/electronics'
            },
            {
            label: 'Miscellaneous',
            path: '/category/misc'
            },
            {
            label: 'User: nightshift84',
            path: '/user/nightshift84'
            }
        ]
        },

        {
        id: 'exchange-vehicles',
        domain: 'amherst-exchange.local',
        path: '/category/vehicles',
        title: 'Vehicles',
        category: 'CLASSIFIEDS',
        content: `
        Vehicles and automotive parts currently listed
        on Amherst Exchange.
        `,
        links: [
            {
            label: '2017 Black SUV — $8,500',
            path: '/listing/black-suv'
            }
        ]
        },

        {
        id: 'exchange-black-suv',
        domain: 'amherst-exchange.local',
        path: '/listing/black-suv',
        title: '2017 Black SUV — $8,500',
        category: 'VEHICLE LISTING',
        content: `
        2017 Black SUV.

        Runs well.

        No accidents reported.

        Seller:
        nightshift84

        Pickup available near the old mill.
        `,
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

        {
        id: 'exchange-nightshift',
        domain: 'amherst-exchange.local',
        path: '/user/nightshift84',
        title: 'nightshift84',
        category: 'USER PROFILE',
        content: `
        Member since: 2022

        Listings: 14

        Reputation: 96%

        Last active: Yesterday

        "I buy and sell whatever people need."
        `,
        links: [
            {
            label: 'View vehicle listing',
            path: '/listing/black-suv'
            }
        ]
    },

];