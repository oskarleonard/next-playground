import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { prefetchBlocks } from 'connectivity/lisk/blocks/blocksQueries';
import Link from 'components/atoms/link/Link';
import { prefetchTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import BlocksListing from 'components/models/blocks/blocksListing/BlocksListing';
import TransactionsListing from 'components/models/transaction/transactionListing/TransactionsListing';

function LiskPage() {
  return (
    <div className={'mt-88 container pb-96'}>
      <h1 className={'text-20 text-center'}>Lisk</h1>
      <div className={`flex items-center h-64`}>
        <Link href={'/lisk/addresses'}>Addresses</Link>
      </div>
      <div className={'grid gap-40 grid-cols-1 md:grid-cols-2'}>
        <TransactionsListing />
        <BlocksListing className={'mt-12 md:mt-0'} />
      </div>
    </div>
  );
}

export default LiskPage;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  try {
    await prefetchBlocks(queryClient);
    await prefetchTransactions(queryClient);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: false,
    };
  }
}
