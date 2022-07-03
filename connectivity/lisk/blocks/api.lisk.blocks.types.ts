export type BlocksResponse = { data: BlockResponse[] };
export type BlockResponse = { transaction: Block };

export type Block = {
  id: string;
};
