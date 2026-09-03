import { FakePage } from '../../../models/fake-page';

export const BACKROOM_PAGES: FakePage[] = [
    // BACKROOM

    {
        id: 'backroom-home',
        domain: 'backroom.local',
        path: '/',
        title: 'THE BACKROOM',
        subtitle: 'Private discussion network',
        category: 'INVITE ONLY',
        content: `
        You were not supposed to find this.

        This network is not affiliated with Amherst
        Community Board or any recognized organization.

        Users are responsible for their own activity.
        `,
        links: [
            {
            label: 'Recent discussions',
            path: '/forums'
            },
            {
            label: 'Marketplace',
            path: '/market'
            },
            {
            label: 'User directory',
            path: '/users'
            }
        ]
        },

        {
        id: 'backroom-forums',
        domain: 'backroom.local',
        path: '/forums',
        title: 'Recent Discussions',
        category: 'PRIVATE FORUM',
        content: `
        Anonymous discussions between verified members.

        Some posts are automatically removed after 30 days.
        `,
        links: [
            {
            label: 'Anyone asking about Emily Carter?',
            path: '/thread/emily'
            },
            {
            label: 'Old Mill — anyone still using it?',
            path: '/thread/old-mill'
            }
        ]
        },

        {
        id: 'backroom-emily',
        domain: 'backroom.local',
        path: '/thread/emily',
        title: 'Anyone asking about Emily Carter?',
        category: 'PRIVATE DISCUSSION',
        content: `
        USER: hollowman

        Anyone asking about Emily Carter?

        REPLY — nightshift84:

        Drop it.

        REPLY — hollowman:

        Why?

        REPLY — nightshift84:

        Because people who keep asking questions
        eventually become part of the story.
        `,
        links: [
            {
                label: 'View nightshift84 profile',
                path: '/users/nightshift84'
            }, 
  
        ]
        },

        {
        id: 'backroom-old-mill',
        domain: 'backroom.local',
        path: '/thread/old-mill',
        title: 'Old Mill — anyone still using it?',
        category: 'PRIVATE DISCUSSION',
        content: `
        USER: riverghost

        Is anyone still using the old mill?

        REPLY — nightshift84:

        Not after what happened last year.

        REPLY — riverghost:

        What happened?

        REPLY — nightshift84:

        You don't want to know.
        `
        },

        {
        id: 'backroom-users',
        domain: 'backroom.local',
        path: '/users',
        title: 'User Directory',
        category: 'MEMBERS',
        content: `
        Registered users currently active on the network.
        `,
        links: [
            {
            label: 'nightshift84',
            path: '/users/nightshift84'
            },
            {
            label: 'hollowman',
            path: '/users/hollowman'
            },
            {
            label: 'riverghost',
            path: '/users/riverghost'
            }
        ]
        },

        {
        id: 'backroom-nightshift',
        domain: 'backroom.local',
        path: '/users/nightshift84',
        title: 'nightshift84',
        category: 'USER PROFILE',
        content: `
        Member since: 2022

        Status: ACTIVE

        Reputation: 418

        Last seen: 14 minutes ago

        "No questions. No problems."
        `
    },

];