import React from 'react';
import classNames from 'classnames';
import { useTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import { imArrayMerge } from 'shared/utils/generalUtils/immutableUtils/immutableUtils';
import TableVerticalScroll from 'components/molecules/tableVerticalScroll/TableVerticalScroll';
import TransactionRow from 'components/models/transaction/transactionRow/TransactionRow';
import Button from 'components/atoms/button/Button';

function TransactionTable({ className, addressId }) {
  const colWidths = [{ width: 200 }, { width: 400 }, { width: 200 }];
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTransactions(addressId);

  const page = data?.pages?.reduce((acc, item) => {
    const merged = imArrayMerge(acc, item?.data);
    return merged;
  }, []);

  return (
    <div className={classNames(className, 'flex flex-col items-center')}>
      <TableVerticalScroll
        colAttributes={colWidths}
        tableHeaderCells={['Date', 'Recipient', 'Amount']}
      >
        {page?.map((transaction) => {
          return (
            <TransactionRow
              key={transaction?.block?.id}
              transaction={transaction}
            />
          );
        })}
      </TableVerticalScroll>
      <Button
        className={'mt-24'}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage || isLoading
          ? 'Loading ...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </Button>
    </div>
  );
}

export default TransactionTable;
