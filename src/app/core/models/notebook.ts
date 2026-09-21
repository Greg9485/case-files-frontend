export interface NotebookClue {
  id: string;
  source: string;
  content: string;
}

export interface NotebookPlayerNote {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date | null;
}