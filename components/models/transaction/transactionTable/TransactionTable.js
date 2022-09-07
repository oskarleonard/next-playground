import React, { useState } from 'react';
import classNames from 'classnames';
import { useTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import TransactionRow from 'components/models/transaction/transactionRow/TransactionRow';
import Button from 'components/atoms/button/Button';
import { useIntervalEffect } from 'components/hooks/useInterval';
import Table from 'components/molecules/table/Table';
import styles from './transactionTable.module.css';

function TransactionTable({ className, addressId }) {
  let [delay, setDelay] = useState(10000);

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
    <div className={classNames(className, styles.transactionTable)}>
      <Table headerCells={['Date', 'Recipient', 'Amount']}>
        {transactions ? (
          transactions?.map((transaction) => {
            return (
              <TransactionRow key={transaction?.id} transaction={transaction} />
            );
          })
        ) : (
          <tr
            className={'flex justify-center items-center h-80 text-xl w-full'}
          >
            <td>No results</td>
          </tr>
        )}
      </Table>
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
