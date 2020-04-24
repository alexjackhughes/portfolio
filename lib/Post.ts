export interface Post {
  id: string;
  title: string;
  date: string;
  blurb: string;
  canonical?: string;
  categories: string[];
  views: number;
  content: string;
}

export type Posts = Post[];
