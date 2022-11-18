import { NewsResponse } from 'connectivity/lisk/news/api.news.types';
import httpRequest from 'connectivity/httpRequest';
import {
  getBaseRequestConfig,
  PUBLIC_API,
} from 'connectivity/baseRequestConfig';

type NewsParam = {
  queryKey?: string[];
};

export function fetchNews({ queryKey }: NewsParam): Promise<NewsResponse> {
  console.log('fetchNews queryKey', queryKey);
  const searchQuery = queryKey && queryKey[1];

  const url = `${PUBLIC_API}/newsFeed${searchQuery ? `${searchQuery}` : ''}`;

  const baseRequestConfig = getBaseRequestConfig();
  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}
