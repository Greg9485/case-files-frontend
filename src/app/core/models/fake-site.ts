export interface FakeSiteNavItem {
  label: string;
  path: string;
  domain?: string;
}

export interface FakeSite {
  domain: string;
  name: string;
  tagline?: string;
  accountLabel?: string;
  navigation: FakeSiteNavItem[];
  description?: string;
}