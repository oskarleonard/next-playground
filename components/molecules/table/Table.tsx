import React from 'react';
import classNames from 'classnames/bind';

const Table = ({ className, headerCells, children }: TableProps) => {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="overflow-x-auto -mt-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <table className="min-w-full">
              <thead className="border-b bg-gray-100">
                <tr className={'flex'}>
                  {headerCells.map((headerCell) => {
                    return (
                      <th
                        key={headerCell}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-16 py-14 text-left"
                      >
                        {headerCell}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

type TableProps = {
  className?: string;
  headerCells: string[];
  children: React.ReactNode;
};

export default Table;
