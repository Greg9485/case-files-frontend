// export type FakePageStatus =
//   | 'ACTIVE'
//   | 'NOT_FOUND'
//   | 'REMOVED'
//   | 'RESTRICTED'
//   | 'OFFLINE';

// export type FakePageType =
//   | 'STANDARD'
//   | 'FORUM_THREAD'
//   | 'EXCHANGE_LISTING'
//   | 'EXCHANGE_CATEGORY'
//   | 'EXCHANGE_PROFILE'
//   | 'POLICE_INCIDENT_LIST'
//   | 'POLICE_INCIDENT';

// export interface FakePageLink {

//   label: string;

//   path: string;

//   domain?: string;

// }


// export interface FakePage {

//   id: string;

//   domain: string;

//   path: string;

//   title: string;

//   subtitle?: string;

//   category?: string;

//   content: string;

//   type?: FakePageType;

//   status?: FakePageStatus;

//   links?: FakePageLink[];

// }

// export interface FakePageLink {
//   label: string;
//   path: string;
//   domain?: string;
// }

// export interface ExchangeListing {
//   id: string;
//   title: string;
//   price: string;
//   location: string;
//   seller: string;
//   posted: string;
//   category: string;
//   image?: string;
//   images?: string[];
//   description?: string;
// }

// export interface PoliceIncident {
//   id: string;
//   incidentNumber: string;
//   date: string;
//   time?: string;
//   type: string;
//   location: string;
//   status: string;
//   disposition?: string;
//   officer?: string;
//   subject?: string;
//   linkPath: string;
// }

// export interface FakePage {
//   id: string;
//   domain: string;
//   path: string;
//   title: string;
//   subtitle?: string;
//   category?: string;
//   content: string;
//   type?: FakePageType;
//   status?: FakePageStatus;
//   links?: FakePageLink[];

//   // Exchange
//   listings?: ExchangeListing[];

//   // Police public records
//   incidents?: PoliceIncident[];
// }







export type FakePageStatus =
  | 'ACTIVE'
  | 'NOT_FOUND'
  | 'REMOVED'
  | 'RESTRICTED'
  | 'OFFLINE';

export type FakePageType =
  | 'STANDARD'
  | 'FORUM_THREAD'
  | 'EXCHANGE_HOME'
  | 'EXCHANGE_CATEGORY'
  | 'EXCHANGE_LISTING'
  | 'POLICE_INCIDENT_LIST'
  | 'POLICE_INCIDENT';

export interface FakePageLink {
  label: string;
  path: string;
  domain?: string;
}

export interface MarketplaceListing {
  id: string;
  title: string;
  price: string;
  location: string;
  posted: string;
  category: string;
  condition?: string;
  image?: string;
  images?: string[];
  seller?: string;
  description?: string;
}

export interface PoliceIncident {
  id: string;
  incidentNumber: string;
  date: string;
  time: string;
  type: string;
  location: string;
  status: string;
  disposition?: string;
  district?: string;
  officer?: string;
  subject?: string;
  linkPath: string;
}

export interface ExchangeListing {
  id: string;
  title: string;
  price: string;
  location: string;
  posted: string;
  category: string;
  seller: string;
  image?: string;
  images?: string[];
  condition?: string;
  description: string;
}

export interface FakePage {
  id: string;
  domain: string;
  path: string;
  title: string;
  subtitle?: string;
  category?: string;
  content: string;
  type?: FakePageType;
  status?: FakePageStatus;
  links?: FakePageLink[];

  listings?: MarketplaceListing[];
  incidents?: PoliceIncident[];
}

