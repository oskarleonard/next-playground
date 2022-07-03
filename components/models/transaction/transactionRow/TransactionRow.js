import React from 'react';
import classNames from 'classnames';
import Link from 'components/atoms/link/Link';
import styles from './transactionRow.module.css';

const TransactionRow = ({ className, transaction }) => {
  const { asset, block, moduleAssetName } = transaction;

  function getFormattedTime() {
    const date = new Date('1970-01-01 00:00:00');
    date.setTime(date.getTime() + block.timestamp * 1000);
    return date.toLocaleString('sv-SE');
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
    <tr className={classNames(styles.tr, className)}>
      <td className={classNames(styles.td)}>{getFormattedTime()}</td>
      <td className={classNames(styles.td)}>{getFormattedRecipient()}</td>
      <td className={classNames(styles.td)}>{getFormattedAmount()}</td>
    </tr>
  );
};

export default TransactionRow;
