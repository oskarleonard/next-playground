import React from 'react';
import classNames from 'classnames/bind';
import { useNews } from 'connectivity/lisk/news/newsQueries';
import { News } from 'connectivity/lisk/news/api.news.types';
import Link from 'components/atoms/link/Link';

function NewsFeed({ className }: NewsFeedProps) {
  const { news } = useNews({
    source: 'source=twitter_lisk,drupal_lisk_general',
  });
  console.log('news, ', news);

  return (
    <div className={classNames(className, 'flex flex-col')}>
      {news?.map((newsItem, index) => {
        return <NewsBox key={index} newsItem={newsItem} />;
      })}
    </div>
  );
}

type NewsFeedProps = {
  className?: string;
};

export default NewsFeed;

function NewsBox({ newsItem }: NewsBoxProps) {
  return (
    <Link
      className={
        'flex flex-col bg-white p-12 hover:bg-[#edf0f5] hover:cursor-pointer'
      }
      href={newsItem.url}
    >
      <h3>{newsItem.title}</h3>
      <span>{newsItem.author}</span>
      <img alt="entity" src={newsItem.imageUrl} height={242} width={435} />
    </Link>
  );
}

type NewsBoxProps = {
  className?: string;
  newsItem: News;
};
