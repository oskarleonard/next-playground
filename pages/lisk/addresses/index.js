import React from 'react';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import Link from 'components/atoms/link/Link';

function PageLiskAddresses() {
  return (
    <div className={'mt-88 container pb-96'}>
      <MetaTags title={'Lisk Addresses'} />
      <h1 className={'text-20 text-center'}>Addresses</h1>
      <ol className={'mt-12'}>
        <li>
          <Link
            href={'/lisk/addresses/lskqx3z5bnkzx935fdk2jnw3ykrcwrwjo8z8npjtv'}
          >
            Liskmagazine
          </Link>
        </li>
        <li>
          <Link
            href={'/lisk/addresses/lskthyw4vythcft7b7nyggs98x4bd6jmuc6yq2nkt'}
          >
            Liskpool.Top
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default PageLiskAddresses;
