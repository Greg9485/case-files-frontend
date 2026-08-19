export interface FakePage {
  id: string;
  domain: string;
  path: string;
  title: string;
  content: string;
  links?: FakePageLink[];
}

export interface FakePageLink {
  label: string;
  path: string;
}