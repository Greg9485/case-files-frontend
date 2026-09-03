export type FakePageStatus =
  | 'ACTIVE'
  | 'NOT_FOUND'
  | 'REMOVED'
  | 'RESTRICTED'
  | 'OFFLINE';


export type FakePageType =
  | 'STANDARD'
  | 'FORUM_THREAD';


export interface FakePageLink {

  label: string;

  path: string;

  domain?: string;

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

}