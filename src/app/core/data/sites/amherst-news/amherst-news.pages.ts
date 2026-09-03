import { FakePage } from '../../../models/fake-page';

export const AMHERST_NEWS_PAGES: FakePage[] = [

  {
    id: 'news-home',
    domain: 'amherstnews.local',
    path: '/',
    title: 'Amherst News',
    subtitle: 'Independent reporting for Amherst and surrounding communities.',
    category: 'NEWS',
    content: `
        Amherst News has been serving the community since 2003.

        Local government, public safety, community events,
        and investigative reporting.
        `,
        links: [
            {
            label: 'Police increase patrols downtown',
            path: '/stories/patrols'
            },
            {
            label: 'Old Amherst Mill redevelopment',
            path: '/stories/old-mill'
            },
            {
            label: 'Browse public records',
            domain: 'amherstpd.local',
            path: '/'
            }
        ]
    },

    {
        id: 'news-patrols',
        domain: 'amherstnews.local',
        path: '/stories/patrols',
        title: 'Police Increase Overnight Patrols',
        category: 'NEWS',
        content: `
        The Amherst Police Department announced an increase
        in overnight patrols throughout the downtown district.

        Officials cited several recent reports of vandalism
        and suspicious activity.

        No connection between the incidents has been established.
        `,
        links: [
            {
            label: 'Amherst Police Records',
            domain: 'amherstpd.local',
            path: '/'
            }
        ]
    },

    {
        id: 'news-old-mill',
        domain: 'amherstnews.local',
        path: '/stories/old-mill',
        title: 'Old Amherst Mill Redevelopment',
        category: 'NEWS',
        content: `
        The town council has approved preliminary plans to redevelop
        the abandoned Amherst Mill property.

        The site has remained unused since the mill closed in 1998.

        Several residents have raised concerns about activity
        around the property after dark.
        `,
        links: [
            {
            label: 'Discuss this story',
            domain: 'amherstboard.local',
            path: '/discussion/old-mill'
            }
        ]
    },
];