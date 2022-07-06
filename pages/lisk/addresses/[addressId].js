import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import { prefetchTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import TransactionTable from 'components/models/transaction/transactionTable/TransactionRow';

function PageLiskAddress({ addressId }) {
  const cutAddress = `${addressId?.slice(0, 14)}...${addressId?.slice(28)}`;

  return (
    <div className={'mt-88 container pb-96'}>
      <MetaTags title={'Lisk Address'} />
      <h1 className={'text-20 text-center'}>{cutAddress}</h1>
      <TransactionTable className={'mt-48'} addressId={addressId} />
    </div>
  );
}

export default PageLiskAddress;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const addressId = params.addressId;
  const queryClient = new QueryClient();

  try {
    await prefetchTransactions(queryClient, addressId);

    return {
      props: {
        addressId: addressId,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: false,
    };
  }
}
