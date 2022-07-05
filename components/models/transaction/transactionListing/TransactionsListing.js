import React from 'react';
import classNames from 'classnames/bind';
import SkeletonElement from 'components/atoms/skeletonElement/SkeletonElement';
import { useTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import { replaceMiddlePartOfString } from 'shared/utils/generalUtils/jsUtils/jsUtils';

function TransactionsListing({ className }) {
  const { transactions, isLoading } = useTransactions();

  return (
    <div className={className}>
      <h3 className={'text-20'}>Transactions</h3>
      {isLoading ? (
        <SkeletonElement className={'w-full h-full'} animated />
      ) : (
        <ul>
          {transactions?.map((transaction) => {
            const { id, isPending, nonce, sender, asset } = transaction;

            return (
              <li
                key={id}
                className={classNames('py-8 flex justify-between border-b')}
              >
                <span>{isPending ? 'true' : 'false'}</span>
                <span>{nonce}</span>
                <span>{replaceMiddlePartOfString(sender.address, 4)}</span>
                <span>
                  {replaceMiddlePartOfString(asset.recipient?.address, 4)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TransactionsListing;
