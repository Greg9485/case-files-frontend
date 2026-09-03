import { FakePage } from '../../../models/fake-page';

export const UNDERNET_PAGES: FakePage[] = [

    // ============================================================
    // UNDERNET — HIDDEN NETWORK
    // ============================================================

    {
      id: 'undernet-home',
      domain: 'undernet.local',
      path: '/',
      title: 'UNDERNET',
      subtitle: 'Anonymous discussion network',
      category: 'HOME',
      content: `
    UNDERNET

    Anonymous discussion network.

    No registration required for most boards.
    Some areas are restricted.

    Users are responsible for their own content.

    System status:
    PARTIALLY MAINTAINED

    Last major maintenance:
    03/14/2019
      `,
      links: [
        {
          label: 'Discussion boards',
          path: '/boards'
        },
        {
          label: 'Marketplace',
          path: '/market'
        },
        {
          label: 'Services',
          path: '/services'
        },
        {
          label: 'Strange / Unexplained',
          path: '/board/strange-unexplained'
        },
        {
          label: 'User directory',
          path: '/users'
        },
        {
          label: 'Archives',
          path: '/archives'
        }
      ]
    },

    // ------------------------------------------------------------
    // BOARDS
    // ------------------------------------------------------------

    {
      id: 'undernet-boards',
      domain: 'undernet.local',
      path: '/boards',
      title: 'Discussion Boards',
      category: 'BOARDS',
      content: `
    ACTIVE BOARDS

    GENERAL
    42,891 posts

    LOCAL / REGIONAL
    19,224 posts

    TECHNOLOGY
    15,902 posts

    MARKET
    8,447 posts

    SERVICES
    11,208 posts

    STRANGE / UNEXPLAINED
    31,117 posts


    Some boards are archived automatically after
    extended periods of inactivity.
      `,
      links: [
        {
          label: 'General',
          path: '/board/general'
        },
        {
          label: 'Local / Regional',
          path: '/board/local'
        },
        {
          label: 'Technology',
          path: '/board/technology'
        },
        {
          label: 'Market',
          path: '/market'
        },
        {
          label: 'Services',
          path: '/services'
        },
        {
          label: 'Strange / Unexplained',
          path: '/board/strange-unexplained'
        }
      ]
    },

    // ------------------------------------------------------------
    // GENERAL
    // ------------------------------------------------------------

    {
      id: 'undernet-general',
      domain: 'undernet.local',
      path: '/board/general',
      title: 'GENERAL',
      category: 'DISCUSSION BOARD',
      content: `
    GENERAL

    Politics.
    Arguments.
    Conspiracy theories.
    Technology.
    Complaints.
    Whatever.

    Moderation is inconsistent.

    If a thread disappears, it probably violated one
    of the rules nobody bothers reading.
      `,
      links: [
        {
          label: 'Anyone else think the internet is dying?',
          path: '/thread/internet-dying'
        },
        {
          label: 'What happened to user "redshift"?',
          path: '/thread/redshift'
        }
      ]
    },

    {
      id: 'undernet-local',
      domain: 'undernet.local',
      path: '/board/local',
      title: 'LOCAL / REGIONAL',
      category: 'DISCUSSION BOARD',
      content: `
    LOCAL / REGIONAL

    Posts concerning towns, counties, cities,
    businesses, law enforcement, local government,
    and people.

    Regional tags are user-submitted.

    Do not post addresses.
    Do not post phone numbers.

    Yes, this means you.
      `,
      links: [
        {
          label: 'Central Virginia',
          path: '/thread/central-virginia'
        },
        {
          label: 'Anybody know the old mill outside Amherst?',
          path: '/thread/amherst-mill'
        }
      ]
    },

    {
      id: 'undernet-technology',
      domain: 'undernet.local',
      path: '/board/technology',
      title: 'TECHNOLOGY',
      category: 'DISCUSSION BOARD',
      content: `
    TECHNOLOGY

    Computers.
    Networking.
    Privacy.
    Old hardware.
    Security.
    Programming.

    No support is guaranteed.

    Search before asking.
      `,
      links: [
        {
          label: 'Old laptop will not boot',
          path: '/thread/old-laptop'
        },
        {
          label: 'Anyone still running old Linux builds?',
          path: '/thread/old-linux'
        }
      ]
    },

    // ------------------------------------------------------------
    // MARKET
    // ------------------------------------------------------------

    {
      id: 'undernet-market',
      domain: 'undernet.local',
      path: '/market',
      title: 'MARKET',
      category: 'MARKETPLACE',
      content: `
    MARKET

    USER-POSTED LISTINGS

    Nothing here is verified.

    Some listings are jokes.
    Some are scams.
    Some are probably illegal.

    Moderators do not guarantee transactions.

    Use escrow when possible.
    Never send more than you can afford to lose.
      `,
      links: [
        {
          label: 'GOODS',
          path: '/market/goods'
        },
        {
          label: 'SERVICES',
          path: '/market/services'
        },
        {
          label: 'WANTED',
          path: '/market/wanted'
        }
      ]
    },

    {
      id: 'undernet-market-goods',
      domain: 'undernet.local',
      path: '/market/goods',
      title: 'GOODS',
      category: 'MARKETPLACE',
      content: `
    GOODS

    USER LISTINGS

    "Phone parts. No questions."
    seller: partsbox

    "Old electronics / equipment."
    seller: lowlevel

    "Assorted items. Local pickup."
    seller: nowhere

    "Not posting details here. Message."
    seller: grayarea

    Several listings have been removed.
      `
    },

    {
      id: 'undernet-market-services',
      domain: 'undernet.local',
      path: '/market/services',
      title: 'SERVICES',
      category: 'MARKETPLACE',
      content: `
    SERVICES

    USER-POSTED SERVICES

    Research
    Information
    Technical work
    Transportation
    "Personal problems"
    Other

    Listings using explicit threats are removed.

    Everything else tends to stay up longer than it should.
      `,
      links: [
        {
          label: 'Information wanted',
          path: '/listing/information'
        },
        {
          label: 'Technical work',
          path: '/listing/technical'
        },
        {
          label: '"Personal problem" — local',
          path: '/listing/personal-problem'
        }
      ]
    },

    {
      id: 'undernet-market-wanted',
      domain: 'undernet.local',
      path: '/market/wanted',
      title: 'WANTED',
      category: 'MARKETPLACE',
      content: `
    WANTED

    Users looking for goods, information, transportation,
    or services.

    Some requests have been deleted by moderators.

    Some were never answered.
      `,
      links: [
        {
          label: 'Need information on a local business',
          path: '/listing/local-business'
        },
        {
          label: 'Need someone who can "make a problem go away"',
          path: '/listing/problem'
        }
      ]
    },

    {
      id: 'undernet-listing-information',
      domain: 'undernet.local',
      path: '/listing/information',
      title: 'Information wanted',
      category: 'LISTING',
      content: `
    POSTED: 09/04/2019

    Looking for somebody who knows how to find
    old records.

    Not government stuff.

    Something that was removed.

    Payment negotiable.

    REPLY:

    What kind of records?

    POSTER:

    If you need to ask, probably not you.
      `
    },

    {
      id: 'undernet-listing-personal',
      domain: 'undernet.local',
      path: '/listing/personal-problem',
      title: '"Personal problem" — local',
      category: 'LISTING',
      content: `
    POSTED: 02/18/2020

    Need somebody local who can handle a personal issue.

    No police.
    No questions.
    No drama.

    MESSAGE FOR DETAILS.

    REPLY:

    Define "handle."

    POSTER:

    You don't need the definition.
    You need to tell me if you're available.

    THREAD LOCKED.
      `
    },

    {
      id: 'undernet-listing-problem',
      domain: 'undernet.local',
      path: '/listing/problem',
      title: 'Need someone who can "make a problem go away"',
      category: 'WANTED',
      content: `
    POSTED: 07/22/2019

    Looking for someone who can deal with
    a person who is causing problems.

    Nothing public.

    Nothing messy.

    If interested, message me.

    REPLY:

    You're saying too much.

    POSTER:

    Fair.

    EDIT:

    Forget it.
      `
    },

    // ------------------------------------------------------------
    // SERVICES
    // ------------------------------------------------------------

    {
      id: 'undernet-services',
      domain: 'undernet.local',
      path: '/services',
      title: 'SERVICES',
      category: 'SERVICES',
      content: `
    SERVICES

    INFORMATION
    TECHNICAL
    SURVEILLANCE
    TRANSPORT
    PERSONAL
    OTHER

    Many listings are jokes or scams.

    Some aren't.
      `,
      links: [
        {
          label: 'Information',
          path: '/services/information'
        },
        {
          label: 'Technical',
          path: '/services/technical'
        },
        {
          label: 'Surveillance',
          path: '/services/surveillance'
        },
        {
          label: 'Personal',
          path: '/services/personal'
        }
      ]
    },

    {
      id: 'undernet-services-information',
      domain: 'undernet.local',
      path: '/services/information',
      title: 'Information',
      category: 'SERVICES',
      content: `
    INFORMATION

    Research.
    Background information.
    Finding old material.
    Locating public records.

    Some providers claim access to
    information that isn't public.

    Buyer beware.
      `
    },

    {
      id: 'undernet-services-technical',
      domain: 'undernet.local',
      path: '/services/technical',
      title: 'Technical',
      category: 'SERVICES',
      content: `
    TECHNICAL

    Servers.
    Networking.
    Data recovery.
    Old systems.
    Security.

    Reputation varies wildly.

    Check references before sending money.
      `
    },

    {
      id: 'undernet-services-surveillance',
      domain: 'undernet.local',
      path: '/services/surveillance',
      title: 'Surveillance',
      category: 'SERVICES',
      content: `
    SURVEILLANCE

    Users offering observation,
    photography, location checks,
    and other forms of information gathering.

    Explicit threats are prohibited.

    "Observation" is apparently a very flexible word.
      `
    },

    {
      id: 'undernet-services-personal',
      domain: 'undernet.local',
      path: '/services/personal',
      title: 'Personal',
      category: 'SERVICES',
      content: `
    PERSONAL

    This section contains requests and offers
    that moderators cannot easily categorize.

    Some listings are removed.

    Some are moved here.

    Some disappear.
      `
    },

    // ============================================================
    // STRANGE / UNEXPLAINED
    // ============================================================

    {
      id: 'undernet-strange',
      domain: 'undernet.local',
      path: '/board/strange-unexplained',
      title: 'STRANGE / UNEXPLAINED',
      category: 'DISCUSSION BOARD',
      content: `
    STRANGE / UNEXPLAINED

    Reports and discussions involving events
    people cannot adequately explain.

    LOCAL FOLKLORE
    STRANGE PLACES
    MISSING TIME
    UNEXPLAINED EVENTS
    UFO / ALIEN
    OCCULT

    Moderator note:

    Most posts are probably bullshit.

    Some posts are probably not.

    We don't have the resources to determine which.
      `,
      links: [
        {
          label: 'Strange Places',
          path: '/board/strange-places'
        },
        {
          label: 'Missing Time',
          path: '/board/missing-time'
        },
        {
          label: 'Unexplained Events',
          path: '/board/unexplained'
        },
        {
          label: 'UFO / Alien',
          path: '/board/ufo'
        },
        {
          label: 'Occult',
          path: '/board/occult'
        }
      ]
    },

    // ------------------------------------------------------------
    // STRANGE PLACES
    // ------------------------------------------------------------

    {
      id: 'undernet-strange-places',
      domain: 'undernet.local',
      path: '/board/strange-places',
      title: 'STRANGE PLACES',
      category: 'DISCUSSION BOARD',
      content: `
    STRANGE PLACES

    Locations people claim are unusual,
    dangerous, inaccessible, or otherwise
    difficult to explain.

    Keep local folklore separate from verified information.

    Do not post private addresses.
      `,
      links: [
        {
          label: 'Anyone ever experience missing time near water?',
          path: '/thread/missing-time-water'
        },
        {
          label: 'Lights over the mountains',
          path: '/thread/lights-mountains'
        },
        {
          label: 'Places where compasses stop working',
          path: '/thread/compasses'
        }
      ]
    },

    {
      id: 'undernet-missing-time',
      domain: 'undernet.local',
      path: '/board/missing-time',
      title: 'MISSING TIME',
      category: 'DISCUSSION BOARD',
      content: `
    MISSING TIME

    Reports involving unexplained gaps in memory,
    lost time, unusual dreams, altered states,
    and unexplained changes in location.

    Most threads are speculation.

    Some are not.
      `,
      links: [
        {
          label: 'I lost three hours',
          path: '/thread/lost-three-hours'
        },
        {
          label: 'Same dream for 12 years',
          path: '/thread/same-dream'
        }
      ]
    },

    {
      id: 'undernet-unexplained',
      domain: 'undernet.local',
      path: '/board/unexplained',
      title: 'UNEXPLAINED EVENTS',
      category: 'DISCUSSION BOARD',
      content: `
    UNEXPLAINED EVENTS

    Reports of events without satisfactory explanations.

    Posts range from mundane misunderstandings
    to material that remains unresolved.

    No claims are verified by moderators.
      `,
      links: [
        {
          label: 'Light appeared inside the house',
          path: '/thread/light-inside-house'
        },
        {
          label: 'Someone disappeared from a locked room',
          path: '/thread/locked-room'
        }
      ]
    },

    // ------------------------------------------------------------
    // UFO / ALIEN
    // ------------------------------------------------------------

    {
      id: 'undernet-ufo',
      domain: 'undernet.local',
      path: '/board/ufo',
      title: 'UFO / ALIEN',
      category: 'DISCUSSION BOARD',
      content: `
    UFO / ALIEN

    Sightings.
    Abductions.
    Strange lights.
    Military aircraft.
    Conspiracy theories.

    Posts here range from credible eyewitness
    accounts to complete nonsense.

    Argue accordingly.
      `,
      links: [
        {
          label: 'Three lights over the mountains',
          path: '/thread/three-lights'
        },
        {
          label: 'Missing time after seeing lights',
          path: '/thread/lights-missing-time'
        }
      ]
    },

    // ============================================================
    // OCCULT
    // ============================================================

    {
      id: 'undernet-occult',
      domain: 'undernet.local',
      path: '/board/occult',
      title: 'OCCULT',
      category: 'STRANGE / UNEXPLAINED',
      content: `
    OCCULT

    Discussion of historical occult traditions,
    ritual practices, religious mysticism,
    esoteric philosophy, entities, altered states,
    and related subjects.

    This board is not a cult.

    This board is not affiliated with any
    religious organization.

    Do not assume every user knows what
    they are talking about.

    Most don't.
      `,
      links: [
        {
          label: 'Old Religions',
          path: '/board/occult/old-religions'
        },
        {
          label: 'Ritual',
          path: '/board/occult/ritual'
        },
        {
          label: 'Entities',
          path: '/board/occult/entities'
        },
        {
          label: 'Other / Dimensional',
          path: '/board/occult/dimensional'
        }
      ]
    },

    {
      id: 'undernet-occult-old-religions',
      domain: 'undernet.local',
      path: '/board/occult/old-religions',
      title: 'OLD RELIGIONS',
      category: 'OCCULT',
      content: `
    OLD RELIGIONS

    Historical religions.
    Mystery traditions.
    Esoteric movements.
    Dead languages.
    Symbolism.

    Keep the historical discussion separate
    from modern fantasy and roleplay.

    This rule is ignored constantly.
      `,
      links: [
        {
          label: 'Anyone know the original meaning of this symbol?',
          path: '/thread/occult-symbol'
        },
        {
          label: 'Groups that survived into the modern era?',
          path: '/thread/surviving-orders'
        }
      ]
    },

    {
      id: 'undernet-occult-ritual',
      domain: 'undernet.local',
      path: '/board/occult/ritual',
      title: 'RITUAL',
      category: 'OCCULT',
      content: `
    RITUAL

    Historical ritual.
    Ceremony.
    Invocation.
    Symbolic practice.

    Moderator note:

    Discussion is permitted.

    Claims of supernatural results
    are not verified.
      `,
      links: [
        {
          label: 'Does location matter?',
          path: '/thread/location-matters'
        },
        {
          label: 'Why do so many traditions use circles?',
          path: '/thread/circles'
        }
      ]
    },

    {
      id: 'undernet-occult-entities',
      domain: 'undernet.local',
      path: '/board/occult/entities',
      title: 'ENTITIES',
      category: 'OCCULT',
      content: `
    ENTITIES

    Historical accounts of spirits,
    demons, gods, angels, intelligences,
    and other alleged non-human entities.

    Do not present fiction as historical fact.

    Do not present personal experiences as proof.

    Yes, this has happened before.
      `,
      links: [
        {
          label: 'Do different cultures describe the same thing?',
          path: '/thread/same-entity'
        },
        {
          label: 'Has anyone heard of "the other side"?',
          path: '/thread/other-side'
        }
      ]
    },

    {
      id: 'undernet-occult-dimensional',
      domain: 'undernet.local',
      path: '/board/occult/dimensional',
      title: 'OTHER / DIMENSIONAL',
      category: 'OCCULT',
      content: `
    OTHER / DIMENSIONAL

    Theories concerning alternate realities,
    nonphysical spaces, altered states,
    and experiences interpreted as contact
    with another place.

    Heavy moderation required.

    Most of this board is nonsense.

    A few older threads remain archived
    because nobody could agree what they were.
      `,
      links: [
        {
          label: 'Can a person enter somewhere else?',
          path: '/thread/enter-somewhere-else'
        },
        {
          label: 'Gateway / Monroe material',
          path: '/thread/gateway'
        }
      ]
    },

    // ------------------------------------------------------------
    // FIRST OCCULT THREADS
    // ------------------------------------------------------------

    {
      id: 'undernet-occult-symbol',
      domain: 'undernet.local',
      path: '/thread/occult-symbol',
      title: 'Anyone know the original meaning of this symbol?',
      category: 'OCCULT THREAD',
      content: `
    USER: ashfall_77

    Posted: 05/19/2018

    Found this in an old scanned document.

    Anybody recognize it?

    REPLY — oldbones:

    Looks ceremonial.

    REPLY — cipher:

    That's not enough information.

    REPLY — ashfall_77:

    I know.

    That's why I'm asking.

    REPLY — oldbones:

    Could be several things.

    REPLY — ashfall_77:

    That's what everyone keeps saying.
      `
    },

    {
      id: 'undernet-occult-surviving-orders',
      domain: 'undernet.local',
      path: '/thread/surviving-orders',
      title: 'Groups that survived into the modern era?',
      category: 'OCCULT THREAD',
      content: `
    USER: northstar

    Are there actually occult organizations
    that survived from the 1800s?

    REPLY — skeptic77:

    Yes.

    REPLY — northstar:

    I mean real ones.

    REPLY — skeptic77:

    Depends what you mean by real.

    REPLY — oldbones:

    Most organizations that claim an ancient
    lineage are making half of it up.

    REPLY — northstar:

    Half?

    REPLY — oldbones:

    If you're lucky.
      `
    },

    {
      id: 'undernet-occult-location',
      domain: 'undernet.local',
      path: '/thread/location-matters',
      title: 'Does location matter?',
      category: 'OCCULT THREAD',
      content: `
    USER: observer26

    Question for people who actually study this:

    Why do ritual traditions keep attaching
    importance to specific locations?

    REPLY — cipher:

    Because humans attach stories to places.

    REPLY — ashfall_77:

    That's one answer.

    REPLY — cipher:

    It's the correct answer.

    REPLY — ashfall_77:

    Maybe.

    REPLY — oldbones:

    Don't let anyone convince you
    a hill is magical because they read
    about ley lines on the internet.
      `
    },

    {
      id: 'undernet-occult-other-side',
      domain: 'undernet.local',
      path: '/thread/other-side',
      title: 'Has anyone heard of "the other side"?',
      category: 'OCCULT THREAD',
      content: `
    USER: hollowman

    I've heard people use "the other side"
    to describe a place you can supposedly
    reach during certain rituals.

    Is this an actual tradition or internet bullshit?

    REPLY — oldbones:

    Both.

    REPLY — hollowman:

    Helpful.

    REPLY — oldbones:

    There are older traditions describing
    journeys somewhere that isn't this world.

    That doesn't mean they went anywhere.

    REPLY — hollowman:

    So nobody knows?

    REPLY — oldbones:

    Nobody who is talking.
      `
    },

    {
      id: 'undernet-enter-somewhere-else',
      domain: 'undernet.local',
      path: '/thread/enter-somewhere-else',
      title: 'Can a person enter somewhere else?',
      category: 'OCCULT THREAD',
      content: `
    USER: ashfall_77

    Not asking whether someone can imagine
    another world.

    I'm asking whether anyone believes
    a person can physically leave this one.

    REPLY — skeptic77:

    No.

    REPLY — cipher:

    Define physically.

    REPLY — skeptic77:

    Here we go.

    REPLY — cipher:

    Exactly.
      `
    },

    // ============================================================
    // USERS
    // ============================================================

    {
      id: 'undernet-users',
      domain: 'undernet.local',
      path: '/users',
      title: 'User Directory',
      category: 'USERS',
      content: `
    USER DIRECTORY

    Public profiles are limited.

    Many accounts have been inactive for years.

    Some users deleted their profiles.

    Some accounts were suspended.

    Some users simply stopped posting.
      `,
      links: [
        {
          label: 'ashfall_77',
          path: '/user/ashfall_77'
        },
        {
          label: 'northstar',
          path: '/user/northstar'
        },
        {
          label: 'oldbones',
          path: '/user/oldbones'
        },
        {
          label: 'cipher',
          path: '/user/cipher'
        }
      ]
    },

    {
      id: 'undernet-user-ashfall',
      domain: 'undernet.local',
      path: '/user/ashfall_77',
      title: 'ashfall_77',
      category: 'USER PROFILE',
      content: `
    ashfall_77

    Member since: 2009

    Posts: 318

    Reputation: unavailable

    Last active: 2021

    Profile:

    "Don't confuse the map with the place."
      `,
      links: [
        {
          label: 'View posts',
          path: '/user/ashfall_77/posts'
        }
      ]
    },

    {
      id: 'undernet-user-northstar',
      domain: 'undernet.local',
      path: '/user/northstar',
      title: 'northstar',
      category: 'USER PROFILE',
      content: `
    northstar

    Member since: 2011

    Posts: 1,042

    Last active: 2020

    Profile:

    "Most mysteries are boring.

    Some aren't."
      `
    },

    {
      id: 'undernet-user-oldbones',
      domain: 'undernet.local',
      path: '/user/oldbones',
      title: 'oldbones',
      category: 'USER PROFILE',
      content: `
    oldbones

    Member since: 2008

    Posts: 2,781

    Last active: 2022

    Reputation: 94%

    Profile:

    "Read the old stuff before believing
    the new stuff."
      `
    },

    {
      id: 'undernet-user-cipher',
      domain: 'undernet.local',
      path: '/user/cipher',
      title: 'cipher',
      category: 'USER PROFILE',
      content: `
    cipher

    Member since: 2007

    Posts: 4,912

    Last active: UNKNOWN

    Reputation: unavailable

    Profile:

    "No such thing as an unanswered question.

    Only questions nobody has answered yet."
      `
    },

    // ============================================================
    // ARCHIVES
    // ============================================================

    {
      id: 'undernet-archives',
      domain: 'undernet.local',
      path: '/archives',
      title: 'Archives',
      category: 'ARCHIVES',
      content: `
    ARCHIVED MATERIAL

    Older boards and threads are periodically
    moved to cold storage.

    Some archived material may be incomplete.

    Last archive migration:
    2019

    WARNING:

    Several archive indexes are known to contain
    broken links.

    Some files were lost during the migration.
      `,
      links: [
        {
          label: '2007–2010',
          path: '/archives/2007-2010'
        },
        {
          label: '2011–2015',
          path: '/archives/2011-2015'
        },
        {
          label: '2016–2019',
          path: '/archives/2016-2019'
        }
      ]
    },

    // ============================================================
    // DELIBERATELY BROKEN / OLD INTERNET STUFF
    // ============================================================

    {
      id: 'undernet-old-archive',
      domain: 'undernet.local',
      path: '/archives/2007-2010',
      title: 'Archive: 2007–2010',
      category: 'ARCHIVE',
      content: `
    ARCHIVE INDEX

    Some material from this period is unavailable.

    THREAD INDEX:

    [001] General
    [002] Technology
    [003] Strange Places
    [004] Occult
    [005] Deleted
    [006] Deleted
    [007] ????

    The original database contained more records.

    Several index entries no longer resolve.
      `,
      links: [
        {
          label: 'Strange Places — archived',
          path: '/archives/2007-2010/strange'
        },
        {
          label: 'Occult — archived',
          path: '/archives/2007-2010/occult'
        }
      ]
    },

    {
      id: 'undernet-old-occult',
      domain: 'undernet.local',
      path: '/archives/2007-2010/occult',
      title: 'Archive: Occult',
      category: 'ARCHIVED THREAD',
      status: 'ACTIVE',
      content: `
    ARCHIVED THREAD INDEX

    This material predates the current moderation system.

    Several attachments are missing.

    Several users no longer exist.

    Some posts have been partially recovered.

    The archive administrator added the following note:

    "If you're looking for the original discussion,
    don't start here."
      `,
      links: [
        {
          label: 'Recovered discussion — 2009',
          path: '/thread/recovered-2009'
        }
      ]
    },

    {
      id: 'undernet-recovered-2009',
      domain: 'undernet.local',
      path: '/thread/recovered-2009',
      title: 'Recovered discussion — 2009',
      category: 'ARCHIVED THREAD',
      content: `
    RECOVERED FROM OLD DATABASE

    USER: [deleted]

    There are places where people have been doing
    this for a long time.

    REPLY — [deleted]

    Doing what?

    REPLY — [deleted]

    You know what.

    REPLY — [deleted]

    No. I really don't.

    REPLY — [deleted]

    Then leave it alone.

    ---

    [3 POSTS COULD NOT BE RECOVERED]

    ---

    ARCHIVE NOTE:

    Original thread title unavailable.
      `
    },

    

{
  id: 'undernet-observer26',
  domain: 'undernet.local',
  path: '/user/observer26',
  title: 'USER: observer26',
  category: 'USER PROFILE',
  content: `HANDLE: observer26

MEMBER SINCE: 2017
POSTS: 38
LAST ACTIVE: RECENTLY

PROFILE:

I keep records.

Mostly boring ones.

Old reports. Dates. Maps. Things people forget.

No real name listed.

No contact information listed.`,
  links: [
    {
      label: 'VIEW RECENT POSTS',
      path: '/user/observer26/posts'
    }
  ]
},
{
  id: 'undernet-observer26-posts',
  domain: 'undernet.local',
  path: '/user/observer26/posts',
  title: 'POSTS BY: observer26',
  category: 'USER ARCHIVE',
  content: `2019-06-11 — GENERAL

Does anyone have a copy of the old county maps?

---

2021-02-04 — STRANGE / UNEXPLAINED

Probably nothing, but anyone else notice how people describe the same place differently after dark?

---

2023-09-18 — LOCAL

Looking for archived development documents around central Virginia.

Not looking for anything private.

Just old public records.

---

2024-11-02 — STRANGE / UNEXPLAINED

There are places where people lose time.

That doesn't mean anything supernatural.

It could mean bad clocks.

It could mean bad memory.

It could mean something else.

---

2025-01-19 — OCCULT

Someone asked me whether locations matter.

Yes.

That's all I'm saying.`,
  links: [
    {
      label: 'STRANGE / UNEXPLAINED',
      path: '/board/strange-unexplained'
    },
    {
      label: 'OCCULT',
      path: '/board/occult'
    }
  ]
},

{
  id: 'undernet-strange-amherst',
  domain: 'undernet.local',
  path: '/thread/amherst-missing',
  title: 'Central Virginia — missing time / missing people',
  category: 'STRANGE / UNEXPLAINED',
  content: `Posted by observer26

Not asking anyone to identify people.

I'm comparing dates.

There are several reports from central Virginia where witnesses describe losing track of time, seeing lights, or remembering an event differently the next morning.

Most are probably nothing.

One isn't.

If you're looking at the Amherst case from 2024, don't start with the weird stuff.

Start with the timeline.

The weird stuff comes later.

—

reply: oldbones

"Later" is doing a lot of work there.

—

reply: observer26

It usually does.`,
  links: [
    {
      label: 'VIEW observer26 PROFILE',
      path: '/user/observer26'
    },
    {
      label: 'STRANGE / UNEXPLAINED',
      path: '/board/strange-unexplained'
    }
  ]
},
];