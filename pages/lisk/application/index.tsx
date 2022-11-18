import React from 'react';
import classNames from 'classnames/bind';
import NewsFeed from 'components/models/lisk/news/newsFeed/NewsFeed';
import LiskPageTemplate from 'components/models/lisk/templates/LiskPageTemplate';

function PageLiskApplication() {
  return (
    <LiskPageTemplate>
      <div className={'flex'}>
        <WalletDetails className={'flex-1'} />
        <NewsFeed className={'flex-1'} />
      </div>
    </LiskPageTemplate>
  );
}

export default PageLiskApplication;

function WalletDetails({ className }: any) {
  return (
    <div className={classNames(className, 'flex flex-col')}>
      <h1>Wallet details</h1>
    </div>
  );
}
