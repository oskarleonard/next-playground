import React from 'react';
import classNames from 'classnames';

const TableHead = ({ className, tableHeaderCells }) => {
  return (
    <thead className={classNames(className, 'bg-jungleMist')}>
      <tr>
        {tableHeaderCells.map((th) => {
          return (
            <th key={th} className={classNames('py-8')}>
              {th}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
