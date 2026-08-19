export interface Evidence {
  id: string;
  title: string;
  type: string;
  description: string;
  content: string;
  discovered: boolean;
  importance: 'low' | 'medium' | 'high';
  clues: string[];
}