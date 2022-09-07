import React from 'react';
import classNames from 'classnames';
import styles from './select.module.css';

function Select({
  id,
  className,
  classNameSelect,
  isDisabled,
  children,
  onChange,
  value,
}: SelectProps) {
  return (
    <div
      className={classNames(styles.selectContainer, className)}
      data-disabled={isDisabled}
    >
      <select
        className={classNames(styles.select, classNameSelect, 'w-full')}
        id={id}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
      >
        {children}
      </select>
    </div>
  );
}

type SelectProps = {
  id?: string;
  className?: string;
  classNameSelect?: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
};

export default Select;
