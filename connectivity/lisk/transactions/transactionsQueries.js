import { useInfiniteQuery } from 'react-query';
import { fetchTransactions } from 'connectivity/lisk/transactions/api.lisk.transactions';
import { minutes } from 'shared/utils/generalUtils/generalUtils';

export const QUERY_KEY_TRANSACTIONS = 'TRANSACTIONS';

const getQueryKey = (addressId) => {
  return [QUERY_KEY_TRANSACTIONS, addressId];
};

export function useTransactions(addressId) {
  const queryKey = getQueryKey(addressId);

  return useInfiniteQuery(queryKey, fetchTransactions, {
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      const hasNextPage = lastPage.meta.offset < lastPage.meta.total;
      if (hasNextPage) {
        return lastPage.meta.offset + 10;
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
