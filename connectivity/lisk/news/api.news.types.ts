export type NewsResponse = { data: News[]; meta: Meta };

export type Meta = {
  count: number;
  offset: number;
  total: number;
};

export type News = {
  author?: string;
  content: string;
  createdAt: number;
  imageUrl: string;
  image_url: string;
  modifiedAt: number;
  source: string;
  sourceID: string;
  timestamp: number;
  title: string;
  url: string;
};
