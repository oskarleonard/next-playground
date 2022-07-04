import { useQuery } from 'react-query';
import { fetchBlocks } from 'connectivity/lisk/blocks/api.lisk.blocks';

export const QUERY_KEY_BLOCKS = 'BLOCKS';

export function useBlocks() {
  const { data } = useQuery(QUERY_KEY_BLOCKS, fetchBlocks, {
    keepPreviousData: true,
    refetchInterval: 3000,
  });

  return { blocks: data.data };
}

export async function prefetchBlocks(queryClient) {
  await queryClient.prefetchQuery(QUERY_KEY_BLOCKS, fetchBlocks);
  return queryClient.setQueryData(QUERY_KEY_BLOCKS, (data) => ({
    ...data,
    pageParams: [null],
  }));
}
