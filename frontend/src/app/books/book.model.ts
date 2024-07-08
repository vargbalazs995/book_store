export interface NewBook {
  title: string;
  author: string;
  description: string;
}

export interface ModifiedBook {
  _id?: string;
  title?: string;
  author?: string;
  description?: string;
}

export interface BookDetails {
  _id:string
  title:string
  author:string
  description:string
  avgRating:number
}
