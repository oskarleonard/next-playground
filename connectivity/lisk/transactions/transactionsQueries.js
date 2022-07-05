import { useInfiniteQuery } from 'react-query';
import { fetchTransactions } from 'connectivity/lisk/transactions/api.lisk.transactions';
import { imArrayMerge } from 'shared/utils/generalUtils/immutableUtils/immutableUtils';

export const QUERY_KEY_TRANSACTIONS = 'TRANSACTIONS';

const getQueryKey = (addressId) => {
  return [QUERY_KEY_TRANSACTIONS, addressId || null];
};

export function useTransactions({
  addressId,
  refetchInterval,
  keepPreviousData = true,
} = {}) {
  const queryKey = getQueryKey(addressId);

  const query = useInfiniteQuery(queryKey, fetchTransactions, {
    keepPreviousData: keepPreviousData,
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.meta.offset + 10;
      if (nextOffset < lastPage.meta.total) {
        return nextOffset;
      }
      return undefined;
    },
    refetchInterval: refetchInterval,
  });

  const transactions = query?.data?.pages?.reduce((acc, item) => {
    const merged = imArrayMerge(acc, item?.data);
    return merged;
  }, []);

  return {
    transactions,
    isLoading: query.isLoading,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    refetch: query.refetch,
    nrOfPages: query?.data?.pages?.length,
  };
}

export async function prefetchTransactions(queryClient, addressId) {
  const queryKey = getQueryKey(addressId);
  await queryClient.prefetchInfiniteQuery(queryKey, fetchTransactions);
  return queryClient.setQueryData(queryKey, (data) => ({
    ...data,
    pageParams: [null],
  }));
}
