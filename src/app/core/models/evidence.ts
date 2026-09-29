export interface Evidence {
  id: string;
  group: string;
  title: string;
  summary: string;
  source: string;
  detail: string;
  sourceLink?: {
    route: string;
    domain?: string;
    path?: string;
    query?: Record<string, string>;
    authentication?: 'police' | 'undernet';
  };
}
