import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHead from 'components/molecules/tableHead/TableHead';
import styles from './tableHorizontalScroll.module.css';

function TableHorizontalScroll({
  className,
  tableClassName,
  sizeUnit = 'px',
  colAttributes,
  tableHeaderCells,
  children,
}) {
  const tableWidth = colAttributes.reduce((accum, attributes) => {
    return accum + attributes?.width;
  }, 0);

  return (
    <div className={classNames(styles.tableVerticalScroll, className)}>
      <table
        style={{ width: tableWidth && tableWidth + sizeUnit }}
        className={classNames(styles.table, tableClassName)}
      >
        <colgroup>
          {colAttributes.map((attributes, index) => {
            const { width, ...rest } = attributes;

            return (
              <col key={index} style={{ width: width + sizeUnit }} {...rest} />
            );
          })}
        </colgroup>
        {tableHeaderCells && <TableHead tableHeaderCells={tableHeaderCells} />}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

TableHorizontalScroll.propTypes = {
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  sizeUnit: PropTypes.string,
  colAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
      span: PropTypes.string,
      className: PropTypes.string,
    })
  ),
  TableHead: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default TableHorizontalScroll;
