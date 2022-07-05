import { useQuery } from 'react-query';
import { fetchBlocks } from 'connectivity/lisk/blocks/api.lisk.blocks';

export const QUERY_KEY_BLOCKS = 'BLOCKS';

export function useBlocks({ refetchInterval, keepPreviousData = true } = {}) {
  const { data, isLoading } = useQuery(QUERY_KEY_BLOCKS, fetchBlocks, {
    keepPreviousData: keepPreviousData,
    refetchInterval: refetchInterval,
  });

  return {
    blocks: data?.data,
    isLoading,
  };
}

export async function prefetchBlocks(queryClient) {
  await queryClient.prefetchQuery(QUERY_KEY_BLOCKS, fetchBlocks);
  return queryClient.setQueryData(QUERY_KEY_BLOCKS, (data) => ({
    ...data,
    pageParams: [null],
  }));
}
