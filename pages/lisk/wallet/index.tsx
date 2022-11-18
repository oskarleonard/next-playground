import React from 'react';
import classNames from 'classnames/bind';
import LiskPageTemplate from 'components/models/lisk/templates/LiskPageTemplate';
import PassphraseInput from 'components/molecules/passphraseInput/PassphraseInput';

function PageLiskWallet() {
  return (
    <LiskPageTemplate>
      <div className={'h-full'}>
        <div className={'mx-auto mt-[30%]'}>
          <h2 className={'text-center'}>Add account</h2>
          <p className={'text-center'}>
            Enter your secret recovery phrase to manage your account.
          </p>
          <PassphraseInput />
        </div>
      </div>
    </LiskPageTemplate>
  );
}

export default PageLiskWallet;

function WalletDetails({ className }: any) {
  return (
    <div className={classNames(className, 'flex flex-col')}>
      <h1>Wallet details</h1>
    </div>
  );
}
