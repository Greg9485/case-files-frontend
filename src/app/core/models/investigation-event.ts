export type InvestigationEventType =
  | 'PAGE_VIEWED'
  | 'LINK_CLICKED'
  | 'EVIDENCE_DISCOVERED';

export interface InvestigationEvent {
  id: string;
  type: InvestigationEventType;
  timestamp: Date;
  source: string;
  metadata?: Record<string, string>;
}