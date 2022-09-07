import React from 'react';
import classNames from 'classnames/bind';
import SkeletonElement from 'components/atoms/skeletonElement/SkeletonElement';

function Td({ className, children }: TdProps) {
  return (
    <td
      className={classNames(
        'text-sm text-gray-900 font-light px-16 py-14 whitespace-nowrap',
        className
      )}
    >
      {children ? (
        children
      ) : (
        <SkeletonElement animated={true} className={'w-full h-20'} />
      )}
    </td>
  );
}

type TdProps = {
  className?: string;
  children?: React.ReactNode;
};

export default Td;
