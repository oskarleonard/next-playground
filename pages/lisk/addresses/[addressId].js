import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import { prefetchTransactions } from 'connectivity/lisk/transactions/transactionsQueries';
import TransactionTable from 'components/models/transaction/transactionTable/TransactionTable';
import { getServerInitialProps } from 'shared/utils/generalUtils/getNextPropsUtils/getNextPropsUtils';
import { mockGetRequest } from 'connectivity/connectivityUtils';

function PageLiskAddress() {
  const router = useRouter();
  const { addressId } = router.query || {};
  const cutAddress = `${addressId.slice(0, 14)}...${addressId.slice(28)}`;

  console.log('router', router);

  return (
    <div className={'max-w-screen-xl ml-auto mr-auto mt-88 container pb-96'}>
      <MetaTags title={'Lisk Address'} />
      <h1 className={'text-20 text-center'}>{cutAddress}</h1>
      <TransactionTable className={'mt-48'} addressId={addressId} />
    </div>
  );
}

export default PageLiskAddress;

PageLiskAddress.getInitialProps = getServerInitialProps(async ({ query }) => {
  const { addressId } = query || {};
  const queryClient = new QueryClient();

  try {
    await prefetchTransactions(queryClient, addressId);

    return {
      dehydratedState: dehydrate(queryClient),
    };
  } catch (error) {
    return {
      notFound: false,
    };
  }
});
