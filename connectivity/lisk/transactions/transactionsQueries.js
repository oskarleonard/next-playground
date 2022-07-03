import { useInfiniteQuery } from 'react-query';
import { fetchTransactions } from 'connectivity/lisk/transactions/api.lisk.transactions';

export const QUERY_KEY_TRANSACTIONS = 'TRANSACTIONS';

const getQueryKey = (addressId) => {
  return [QUERY_KEY_TRANSACTIONS, addressId];
};

export function useTransactions(addressId) {
  const queryKey = getQueryKey(addressId);

  return useInfiniteQuery(queryKey, fetchTransactions, {
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.meta.offset + 10;
      if (nextOffset < lastPage.meta.total) {
        return nextOffset;
      }
      return undefined;
    },
  });
}

export async function prefetchTransactions(queryClient, addressId) {
  const queryKey = getQueryKey(addressId);
  await queryClient.prefetchInfiniteQuery(queryKey, fetchTransactions);
  return queryClient.setQueryData(queryKey, (data) => ({
    ...data,
    pageParams: [null],
  }));
}
