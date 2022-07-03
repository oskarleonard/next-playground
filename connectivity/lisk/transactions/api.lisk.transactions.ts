import httpRequest from 'connectivity/httpRequest';
import {
  getBaseRequestConfig,
  PUBLIC_API,
} from 'connectivity/baseRequestConfig';
import { ArticlesResponse } from 'connectivity/lisk/transactions/api.lisk.transactions.types';

type TransactionsPageParam = {
  queryKey?: string[];
  pageParam?: any;
};

export function fetchTransactions({
  queryKey,
  pageParam,
}: TransactionsPageParam): Promise<ArticlesResponse> {
  const addressId = queryKey && queryKey[1];

  const queryParams = new URLSearchParams();
  addressId && queryParams.set('address', addressId);
  pageParam && queryParams.set('offset', pageParam);

  const queryParamsStr = queryParams.toString();

  const url = `${PUBLIC_API}/transactions/${
    queryParamsStr ? `?${queryParamsStr}` : ''
  }`;

  const baseRequestConfig = getBaseRequestConfig();
  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}
