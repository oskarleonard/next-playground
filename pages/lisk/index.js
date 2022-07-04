import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import {
  prefetchBlocks,
  useBlocks,
} from 'connectivity/lisk/blocks/blocksQueries';
import Link from 'components/atoms/link/Link';

function LiskPage() {
  const { blocks } = useBlocks();

  return (
    <div className={'mt-88 container pb-96'}>
      <h1 className={'text-20 text-center'}>Lisk</h1>
      <div className={`flex items-center h-64`}>
        <Link href={'/lisk/addresses'}>Addresses</Link>
      </div>
      <div>
        {blocks.map((block) => {
          return (
            <div key={block.id} className={`mt-12`}>
              <h4>{block.id}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LiskPage;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  try {
    await prefetchBlocks(queryClient);

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
