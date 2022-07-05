import React, { useState } from 'react';
import classNames from 'classnames';
import { useTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import TableHorizontalScroll from 'components/molecules/tableHorizontalScroll/TableHorizontalScroll';
import TransactionRow from 'components/models/transaction/transactionRow/TransactionRow';
import Button from 'components/atoms/button/Button';
import { useIntervalEffect } from 'components/hooks/useInterval';

function TransactionTable({ className, addressId }) {
  let [delay, setDelay] = useState(2000);

  const {
    transactions,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    nrOfPages,
  } = useTransactions({ addressId });

  useIntervalEffect(() => {
    if (nrOfPages < 2) {
      refetch();
    } else {
      setDelay(null);
    }
  }, delay);

  return (
    <div className={classNames(className)}>
      <TableHorizontalScroll
        colAttributes={[{ width: 200 }, { width: 400 }, { width: 200 }]}
        tableHeaderCells={['Date', 'Recipient', 'Amount']}
      >
        {transactions?.map((transaction) => {
          return (
            <TransactionRow key={transaction?.id} transaction={transaction} />
          );
        })}
      </TableHorizontalScroll>
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
