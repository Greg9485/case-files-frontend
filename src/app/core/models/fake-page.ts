export type FakePageStatus =
  | 'ACTIVE'
  | 'NOT_FOUND'
  | 'REMOVED'
  | 'RESTRICTED'
  | 'OFFLINE';

export interface FakePage {
  id: string;
  domain: string;
  path: string;
  title: string;
  subtitle?: string;
  content: string;
  category?: string;
  status?: FakePageStatus;
  links?: FakePageLink[];
}

export interface FakePageLink {
  label: string;
  path: string;
}