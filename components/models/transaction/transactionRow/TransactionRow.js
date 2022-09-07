import React from 'react';
import classNames from 'classnames';
import Link from 'components/atoms/link/Link';
import { getDateTime } from 'shared/utils/globalProjectUtils/dateUtils/dateUtils';
import Td from 'components/atoms/td/Td';

const TransactionRow = ({ className, transaction }) => {
  const { asset, block, moduleAssetName } = transaction;

  function getFormattedTime() {
    const date = new Date('1970-01-01 00:00:00');
    date.setTime(date.getTime() + block.timestamp * 1000);

    return getDateTime(date);
  }

  function getFormattedAmount() {
    if (!asset?.amount) return '';

    return asset?.amount / 100000000;
  }

  function getFormattedRecipient() {
    if (!asset.recipient?.address) return moduleAssetName;

    return (
      <Link href={`/lisk/addresses/${asset.recipient?.address}`}>
        {asset.recipient?.address}
      </Link>
    );
  }

  return (
    <tr className={classNames(className, 'flex border-b')}>
      <Td>{getFormattedTime()}</Td>
      <Td>{getFormattedRecipient()}</Td>
      <Td>{getFormattedAmount()}</Td>
    </tr>
  );
};

export default TransactionRow;
