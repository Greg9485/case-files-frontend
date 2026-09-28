import { FakePage } from '../../../models/fake-page';


export const AMHERST_BOARD_PAGES: FakePage[] = [
  {
    id: 'home',
    domain: 'amherstboard.local',
    path: '/',
    title: 'Amherst Community Board',
    subtitle: 'Your independent source for local information.',
    content:
      'Welcome to the Amherst Community Board. Local news, neighborhood discussion, community information, and archived records from around Amherst.',
    links: [
      { label: 'Blue Ridge facility: what is proposed?', path: '/news/blue-ridge-facility' },
      { label: 'Town Council minutes — 2024 development review', path: '/archive/council-2024' },
      { label: 'Facility traffic and the school route', path: '/discussion/facility-traffic' },
      { label: 'Anyone else hear helicopters last night?', path: '/discussion/helicopters' },
      { label: 'Strange vehicle parked behind the old mill', path: '/discussion/old-mill' },
      { label: 'Does anyone remember Emily Carter?', path: '/thread/emily-carter' }
    ]
  },
  {
    id: 'local',
    domain: 'amherstboard.local',
    path: '/local',
    title: 'Local',
    subtitle: 'What is happening around Amherst.',
    content: 'Community notices, neighborhood announcements, local events, and information submitted by residents.',
    links: [
      { label: 'Community Events Calendar', path: '/local/events' },
      { label: 'Road Closures & Construction', path: '/local/roads' },
      { label: 'Local Business Directory', path: '/local/businesses' },
      { label: 'Facility traffic and the school route', path: '/discussion/facility-traffic' },
      { label: 'Fall festival vendor list', path: '/discussion/fall-festival' }
    ]
  },
  {
    id: 'news',
    domain: 'amherstboard.local',
    path: '/news',
    title: 'News',
    subtitle: 'Local reporting and community updates.',
    content: 'Independent reporting from around Amherst. Some stories are submitted by community members. Others are compiled from public records and local sources.',
    links: [
      { label: 'Blue Ridge facility: what is proposed?', path: '/news/blue-ridge-facility' },
      { label: 'Council meeting moved to Thursday', path: '/news/council-meeting' },
      { label: 'Police announce downtown patrol increase', path: '/news/patrol-increase' },
      { label: 'Old mill redevelopment approved', path: '/news/old-mill' }
    ]
  },
  {
    id: 'discussion',
    domain: 'amherstboard.local',
    path: '/discussion',
    title: 'Discussion',
    subtitle: 'Community discussion and speculation.',
    content: 'Open discussion between Amherst residents. Posts are not verified and opinions expressed here belong to individual users.',
    links: [
      { label: 'Facility traffic and the school route', path: '/discussion/facility-traffic' },
      { label: 'Jobs, taxes, and the next ten years', path: '/discussion/jobs-and-growth' },
      { label: 'Wetlands behind the old service road', path: '/discussion/wetlands-walk' },
      { label: 'Question after the October 17 meeting', path: '/discussion/october-meeting' },
      { label: 'Emily Carter — questions after Thursday’s meeting', path: '/discussion/emily-reported-missing' },
      { label: 'Fall festival vendor list', path: '/discussion/fall-festival' },
      { label: 'Anyone else hear helicopters last night?', path: '/discussion/helicopters' },
      { label: 'Strange vehicle parked behind the old mill', path: '/discussion/old-mill' },
      { label: 'Anyone know what happened at the marina?', path: '/discussion/marina' }
    ]
  },
  {
    id: 'missing-persons',
    domain: 'amherstboard.local',
    path: '/missing-persons',
    title: 'Missing Persons',
    subtitle: 'Unresolved disappearances in Amherst.',
    content: 'This section contains community discussion surrounding missing-person cases in and around Amherst. Information posted here has not been verified by law enforcement.',
    links: [
      { label: 'Emily Carter — Missing Since 2024', path: '/thread/emily-carter' },
      { label: 'Questions after the October 17 meeting', path: '/discussion/emily-reported-missing' },
      { label: 'Archived Case — Michael Reeves', path: '/missing-persons/michael-reeves' },
      { label: 'Archived Case — Sarah Whitmore', path: '/missing-persons/sarah-whitmore' }
    ]
  },
  {
    id: 'archive',
    domain: 'amherstboard.local',
    path: '/archive',
    title: 'Archive',
    subtitle: 'Archived community posts and public records.',
    content: 'Older discussions and records are kept here for reference. Council records below were copied from public meeting packets.',
    links: [
      { label: 'Amherst Materials & Manufacturing Facility — 2024 council record index', path: '/archive/council-2024' },
      { label: '2019 Community Archive', path: '/archive/2019' },
      { label: '2020 Community Archive', path: '/archive/2020' },
      { label: '2021 Community Archive', path: '/archive/2021' }
    ]
  },
  {
    id: 'council-2024-index',
    domain: 'amherstboard.local',
    path: '/archive/council-2024',
    title: 'Amherst Materials & Manufacturing Facility',
    subtitle: 'Town Council meeting records • 2024',
    category: 'PUBLIC RECORDS ARCHIVE',
    content: 'The facility first came before Council in June. These records are copies of the meeting summaries and minutes posted with the public packets. Names and comments are recorded as listed in those materials.',
    links: [
      { label: 'June 20, 2024 — Concept plan introduced', path: '/archive/council-2024/june-20' },
      { label: 'August 15, 2024 — Access, drainage, and site layout', path: '/archive/council-2024/august-15' },
      { label: 'October 3, 2024 — State assessment update', path: '/archive/council-2024/october-3' },
      { label: 'October 17, 2024 — Preliminary environmental findings', path: '/archive/council-2024/october-17' },
      { label: 'Back to the facility overview', path: '/news/blue-ridge-facility' }
    ]
  },
  {
    id: 'blue-ridge-facility',
    domain: 'amherstboard.local',
    path: '/news/blue-ridge-facility',
    title: 'Blue Ridge plans Amherst manufacturing facility',
    subtitle: 'Project overview • Updated September 2024',
    category: 'LOCAL NEWS',
    content: 'Blue Ridge Advanced Materials has proposed the Amherst Materials & Manufacturing Facility on a largely undeveloped parcel outside the town center. The current concept includes a specialty-plastics production building, warehouse space, loading areas, employee parking, access roads, and stormwater infrastructure.\n\nThe company says the facility would bring skilled and entry-level jobs, expand the local tax base, and attract suppliers and other industrial activity.\n\nResidents have also asked about the amount of land clearing, intermittent waterways and wetlands, additional traffic, drainage, and how the site would handle chemical storage, process wastewater, accidental releases, and runoff. The state is conducting an environmental assessment. The council has not made a final site-plan decision.\n\nThe project has appeared in council packets since June. Public summaries and minutes are available in the archive.',
    links: [
      { label: 'Read the 2024 council record index', path: '/archive/council-2024' },
      { label: 'Facility traffic and the school route', path: '/discussion/facility-traffic' },
      { label: 'Jobs, taxes, and the next ten years', path: '/discussion/jobs-and-growth' },
      { label: 'Wetlands behind the old service road', path: '/discussion/wetlands-walk' }
    ]
  },
  {
    id: 'minutes-june-20',
    domain: 'amherstboard.local',
    path: '/archive/council-2024/june-20',
    title: 'Town Council — June 20, 2024',
    subtitle: 'Regular meeting • Public packet summary',
    category: 'MEETING MINUTES',
    content: 'AMHERST MATERIALS & MANUFACTURING FACILITY — CONCEPT PLAN\n\nBlue Ridge Advanced Materials presented an initial concept for a specialty-plastics manufacturing facility on the former agricultural parcel west of Route 29. The concept showed a production building, separate warehouse, loading areas, employee parking, new access roads, and a stormwater pond. The applicant described phased land clearing and an estimated 180 to 220 permanent positions at full operation.\n\nDan Pruitt said he strongly supported moving the proposal toward approval, citing local jobs and a broader tax base. Linda Mercer said she would oppose further delays once the applicant supplied the requested materials.\n\nBecky Sloan said she opposed the proposed site plan until the tree-clearing limits and nearby intermittent streams were fully mapped. Thomas Alvarez said he could not support the access and drainage plan without traffic and infrastructure capacity estimates.\n\nEvelyn Hart requested written responses to the questions before the next public hearing. No vote was taken.',
    links: [
      { label: 'August 15 — Access, drainage, and site layout', path: '/archive/council-2024/august-15' },
      { label: 'Return to council record index', path: '/archive/council-2024' }
    ]
  },
  {
    id: 'minutes-august-15',
    domain: 'amherstboard.local',
    path: '/archive/council-2024/august-15',
    title: 'Town Council — August 15, 2024',
    subtitle: 'Public hearing • Site access and infrastructure',
    category: 'MEETING MINUTES',
    content: 'AMHERST MATERIALS & MANUFACTURING FACILITY — SITE PLAN\n\nBlue Ridge representatives presented a revised layout with a production building, warehouse, loading apron, parking, internal access roads, and a stormwater detention area. The company estimated that construction could begin the following spring, subject to state review and local approvals.\n\nDan Pruitt urged Council to keep the application moving toward a vote and said new requirements should be limited to issues supported by the review. Linda Mercer said she would not support restarting the project schedule for questions that could be answered while the application proceeded.\n\nThomas Alvarez said he remained opposed to the access plan as submitted until traffic, road, and water infrastructure capacity were documented. Becky Sloan said she opposed the current clearing plan until the wooded swale and field edges were assessed.\n\nEvelyn Hart asked the applicant to provide the requested traffic and drainage materials before the next hearing. The public comment period remained open.',
    links: [
      { label: 'October 3 — State assessment update', path: '/archive/council-2024/october-3' },
      { label: 'Return to council record index', path: '/archive/council-2024' }
    ]
  },
  {
    id: 'minutes-october-3',
    domain: 'amherstboard.local',
    path: '/archive/council-2024/october-3',
    title: 'Town Council — October 3, 2024',
    subtitle: 'Regular meeting • State assessment update',
    category: 'MEETING MINUTES',
    content: 'AMHERST MATERIALS & MANUFACTURING FACILITY — ENVIRONMENTAL ASSESSMENT\n\nEmily Carter, an environmental scientist with the Commonwealth, attended as the state’s assessment lead. Carter said she had been reviewing the site for several weeks and was still collecting field information. Her preliminary questions concerned the extent of wetlands and intermittent waterways, the proposed amount of impervious surface, and how stormwater would be managed during construction and operation.\n\nCarter asked Blue Ridge to provide updated site drainage and chemical-storage materials for the state review. She said the information was needed before she could characterize the potential effects or recommend next steps.\n\nWade Harlan, Blue Ridge project director, said the company had engaged engineers to answer the state’s questions and wanted to avoid duplicating studies already completed for the application. He asked for a clear list of remaining requirements and a predictable schedule.\n\nLinda Mercer said the town needed a defined review timeline. Dan Pruitt asked that the assessment remain focused on the submitted project rather than hypothetical operating conditions. Becky Sloan requested that the wooded swale and all field observations be included in the record. Thomas Alvarez asked whether the stormwater design had been checked against the town’s downstream drainage capacity. Evelyn Hart requested a written update when the state review was further along.',
    links: [
      { label: 'October 17 — Preliminary environmental findings', path: '/archive/council-2024/october-17' },
      { label: 'Return to council record index', path: '/archive/council-2024' }
    ]
  },
  {
    id: 'minutes-october-17',
    domain: 'amherstboard.local',
    path: '/archive/council-2024/october-17',
    title: 'Town Council — October 17, 2024',
    subtitle: 'Regular meeting • Preliminary environmental findings',
    category: 'MEETING MINUTES',
    content: 'AMHERST MATERIALS & MANUFACTURING FACILITY — STATE UPDATE\n\nEmily Carter of the Commonwealth summarized preliminary field findings. She said the wetlands and intermittent waterways visible on the site appeared more extensive than indicated in the applicant’s initial materials. The amount of proposed impervious surface also made stormwater runoff and downstream water quality important parts of the review.\n\nCarter emphasized that the assessment was ongoing and that the findings did not establish a violation. Depending on the completed delineation and agency review, portions of the site could involve federally regulated waters and additional permitting considerations.\n\nAsked about next steps, Carter said she expected to recommend additional regulatory review and substantial mitigation in her official report. She added that, based on the preliminary findings, she intended to recommend federal review before the project advanced further.\n\nWade Harlan asked what documentation would satisfy the state’s remaining questions and whether the review schedule could be clarified. Dan Pruitt said he continued to support the project and wanted Council to set a firm schedule rather than allow review to remain open-ended. Linda Mercer said Amherst could not remain economically stagnant while every unresolved question reset the project clock.\n\nBecky Sloan said she opposed advancing the site plan before the full waterway delineation and a written mitigation plan were complete. Thomas Alvarez said he could not support the current proposal unless the road and stormwater systems were shown to meet town capacity. Evelyn Hart requested that the state’s written report and the applicant’s responses be added to the public packet. No final approval was considered.',
    links: [
      { label: 'October 3 — State assessment update', path: '/archive/council-2024/october-3' },
      { label: 'Return to council record index', path: '/archive/council-2024' },
      { label: 'Question after the October 17 meeting', path: '/discussion/october-meeting' }
    ]
  },
  {
    id: 'council-meeting',
    domain: 'amherstboard.local',
    path: '/news/council-meeting',
    title: 'Council meeting moved to Thursday',
    category: 'NEWS',
    content: 'The Amherst Town Council has announced that this week’s regular meeting will be moved from Wednesday to Thursday due to scheduling conflicts. The meeting will begin at 7:00 PM at Town Hall.'
  },
  {
    id: 'patrol-increase',
    domain: 'amherstboard.local',
    path: '/news/patrol-increase',
    title: 'Police announce downtown patrol increase',
    category: 'NEWS',
    content: 'The Amherst Police Department announced an increase in overnight patrols throughout the downtown district. Officials cited several recent reports of vandalism and suspicious activity. No connection between the incidents has been established.'
  },
  {
    id: 'old-mill-news',
    domain: 'amherstboard.local',
    path: '/news/old-mill',
    title: 'Old mill redevelopment approved',
    category: 'NEWS',
    content: 'The town council has approved preliminary plans to redevelop the abandoned Amherst Mill property. The site has remained unused since the mill closed in 1998.'
  },
  {
    id: 'facility-traffic', domain: 'amherstboard.local', path: '/discussion/facility-traffic',
    title: 'Facility traffic and the school route', category: 'DISCUSSION', subtitle: 'Started by southridge', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'jobs-growth', domain: 'amherstboard.local', path: '/discussion/jobs-and-growth',
    title: 'Jobs, taxes, and the next ten years', category: 'DISCUSSION', subtitle: 'Started by amherstforward', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'wetlands-walk', domain: 'amherstboard.local', path: '/discussion/wetlands-walk',
    title: 'Wetlands behind the old service road', category: 'DISCUSSION', subtitle: 'Started by fieldnotes', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'october-meeting', domain: 'amherstboard.local', path: '/discussion/october-meeting',
    title: 'Question after the October 17 meeting', category: 'DISCUSSION', subtitle: 'Started by townhallsteps', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'emily-reported-missing', domain: 'amherstboard.local', path: '/discussion/emily-reported-missing',
    title: 'Emily Carter — questions after Thursday’s meeting', category: 'DISCUSSION', subtitle: 'Started by southridge • October 2024', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'fall-festival', domain: 'amherstboard.local', path: '/discussion/fall-festival',
    title: 'Fall festival vendor list', category: 'LOCAL', subtitle: 'Started by bluebird', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'helicopters', domain: 'amherstboard.local', path: '/discussion/helicopters',
    title: 'Anyone else hear helicopters last night?', category: 'DISCUSSION', subtitle: 'Started by riverwatch', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'old-mill-discussion', domain: 'amherstboard.local', path: '/discussion/old-mill',
    title: 'Strange vehicle parked behind the old mill', category: 'DISCUSSION', subtitle: 'Started by millroad', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'marina', domain: 'amherstboard.local', path: '/discussion/marina',
    title: 'Anyone know what happened at the marina?', category: 'DISCUSSION', subtitle: 'Started by dockside', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'emily-thread', domain: 'amherstboard.local', path: '/thread/emily-carter',
    title: 'Does anyone remember Emily Carter?', category: 'MISSING PERSONS', subtitle: 'Started by quietstatic • July 2026', type: 'FORUM_THREAD', content: ''
  },
  {
    id: 'quietstatic-profile', domain: 'amherstboard.local', path: '/user/quietstatic',
    title: 'quietstatic', category: 'USER PROFILE', content: 'Member since: 2018\n\nPosts: 47\nReputation: 812\n\nLast active: 2 hours ago\n\n“Some things are better left buried.”'
  },
  {
    id: 'michael-reeves', domain: 'amherstboard.local', path: '/missing-persons/michael-reeves',
    title: 'Michael Reeves', category: 'MISSING PERSONS', content: 'Michael Reeves disappeared in October 2019. The case remains unresolved. No recent activity.'
  },
  {
    id: 'sarah-whitmore', domain: 'amherstboard.local', path: '/missing-persons/sarah-whitmore',
    title: 'Sarah Whitmore', category: 'MISSING PERSONS', content: 'Sarah Whitmore was reported missing in June 2021. She was located three days later and returned home.'
  },
  { id: 'removed-page', domain: 'amherstboard.local', path: '/archive/2019', title: 'Content Removed', category: 'CONTENT REMOVED', status: 'REMOVED', content: 'This content has been removed by the site administrator.' },
  { id: 'restricted-page', domain: 'amherstboard.local', path: '/archive/2020', title: 'Access Restricted', category: 'ACCESS RESTRICTED', status: 'RESTRICTED', content: 'You do not have permission to access this resource.' },
  { id: 'offline-page', domain: 'amherstboard.local', path: '/archive/2021', title: 'Server Unavailable', category: 'SERVER OFFLINE', status: 'OFFLINE', content: 'The requested resource is temporarily unavailable.' }
];
