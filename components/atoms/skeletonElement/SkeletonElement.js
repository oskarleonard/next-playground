import React from 'react';
import classNames from 'classnames';
import styles from './SkeletonElement.module.css';

const SkeletonElement = ({
  className,
  aspectRatio,
  animationDelay,
  animated,
  style,
}) => {
  const paddingBottom = aspectRatio && `${100 / aspectRatio}%`;
  const delay = animationDelay && `${animationDelay}ms`;

  return (
    <div
      className={classNames(styles.SkeletonElement, className)}
      style={{ ...style, paddingBottom }}
    >
      {animated && (
        <div className={styles.gradient} style={{ animationDelay: delay }} />
      )}
    </div>
  );
};

export default SkeletonElement;
