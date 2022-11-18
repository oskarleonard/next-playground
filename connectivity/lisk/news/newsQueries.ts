import { useQuery } from 'react-query';
import { fetchNews } from 'connectivity/lisk/news/api.news';

export const QUERY_KEY_NEWS = 'NEWS';

const getQueryKey = (source?: string) => {
  if (source) {
    return [QUERY_KEY_NEWS, `?${source}`];
  } else {
    return [QUERY_KEY_NEWS];
  }
};

export function useNews({
  source,
}: {
  source?: string;
} = {}) {
  const queryKey = getQueryKey(source);

  const query = useQuery(queryKey, fetchNews);
  console.log('query', query);

  return {
    news: query?.data?.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}
