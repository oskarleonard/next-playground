import React from 'react';
import classNames from 'classnames/bind';
import { useBlocks } from 'connectivity/lisk/blocks/blocksQueries';
import SkeletonElement from 'components/atoms/skeletonElement/SkeletonElement';
import { replaceMiddlePartOfString } from 'shared/utils/generalUtils/jsUtils/jsUtils';

function BlocksListing({ className }) {
  const { blocks, isLoading } = useBlocks({ refetchInterval: 1000 });

  return (
    <div className={className}>
      <h3 className={'text-20'}>Blocks</h3>
      {isLoading ? (
        <SkeletonElement className={'w-full h-full'} animated />
      ) : (
        <ul>
          {blocks?.map((block) => {
            const { id, isFinal, numberOfTransactions, totalBurnt } = block;

            return (
              <li
                key={block.id}
                className={classNames('py-8 flex justify-between border-b')}
              >
                <span>{isFinal ? 'true' : 'false'}</span>
                <span>{replaceMiddlePartOfString(id, 4)}</span>
                <span>{numberOfTransactions}</span>
                <span>{totalBurnt}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BlocksListing;
