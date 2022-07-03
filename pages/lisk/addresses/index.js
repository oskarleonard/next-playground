import React from 'react';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import Link from 'components/atoms/link/Link';

function PageLiskAddresses() {
  return (
    <div className={'mt-88 container pb-96'}>
      <MetaTags title={'Lisk Addresses'} />
      <h1>Addresses</h1>
      <div>
        <Link
          href={'/lisk/addresses/lskqx3z5bnkzx935fdk2jnw3ykrcwrwjo8z8npjtv'}
        >
          Liskmagazine
        </Link>
      </div>
    </div>
  );
}

export default PageLiskAddresses;
