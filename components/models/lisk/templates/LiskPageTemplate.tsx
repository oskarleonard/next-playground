import React from 'react';
import classNames from 'classnames/bind';
import Link from 'components/atoms/link/Link';
import Button from 'components/atoms/button/Button';
import SidebarSection from 'components/models/lisk/templates/sidebar/SidebarSection';

function LiskPageTemplate({ children }: any) {
  return (
    <div className={classNames('flex min-h-full')}>
      <SidebarSection />
      <div className={'flex-1 min-h-screen bg-[#edf0f5]'}>
        <TopBar />
        <div className={'p-24'}>{children}</div>
      </div>
    </div>
  );
}

export default LiskPageTemplate;

function TopBar({ newsItem }: any) {
  return (
    <div className={'sticky top-0 bg-white flex'}>
      <Button onClick={() => console.log('hello')}>Dashboard</Button>
    </div>
  );
}
