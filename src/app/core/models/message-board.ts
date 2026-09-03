export interface MessageBoardCategory {
  id: string;
  name: string;
  description: string;
  path: string;
}

export interface MessageBoardAuthor {
  username: string;
  joined?: string;
  postCount?: number;
}

export interface MessageBoardPost {
  id: string;
  author: MessageBoardAuthor;
  content: string;
  postedAt: string;
}

export interface MessageBoardThread {
  id: string;
  categoryId: string;
  title: string;
  author: MessageBoardAuthor;
  createdAt: string;
  updatedAt?: string;
  replyCount: number;
  sticky?: boolean;
  locked?: boolean;
  posts: MessageBoardPost[];
}