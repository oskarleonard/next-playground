export type ArticlesResponse = { data: ArticleResponse[]; meta: any };
export type ArticleResponse = { transaction: Transaction };

export type Transaction = {
  id: string;
  block: any;
  sender: any;
  asset: any;
};
