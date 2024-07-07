export interface NewBook {
  title: string;
  author: string;
  description: string;
}

export interface ModifiedBook {
  title?: string;
  author?: string;
  description?: string;
}
