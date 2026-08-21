export interface FakePage {
  id: string;
  domain: string;
  path: string;
  title: string;
  subtitle?: string;
  content: string;
  category?: string;
  links?: FakePageLink[];
}

export interface FakePageLink {
  label: string;
  path: string;
}