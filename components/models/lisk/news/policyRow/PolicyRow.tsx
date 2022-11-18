import React from 'react';
import classNames from 'classnames';
import { Policy } from 'connectivity/policies/api.policies.types';
import styles from './policyRow.module.css';

const PolicyRow = ({ className, policy }: TransactionProps) => {
  const { customer, status, startDate } = policy;
  const fullName = `${customer.firstName} ${customer.lastName}`;

  return (
    <tr className={classNames(styles.tr, className)}>
      <td className={classNames(styles.td)}>{fullName}</td>
      <td className={classNames(styles.td)}>{status}</td>
      <td className={classNames(styles.td)}>{startDate}</td>
    </tr>
  );
};

type TransactionProps = {
  className?: string;
  policy: Policy;
};

export default PolicyRow;
