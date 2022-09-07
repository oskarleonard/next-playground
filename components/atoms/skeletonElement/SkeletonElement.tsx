import React from 'react';
import classNames from 'classnames';
import styles from './skeletonElement.module.css';

const SkeletonElement = ({
  className,
  aspectRatio,
  animationDelay,
  animated,
  style,
}: SkeletonElementProps) => {
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

type SkeletonElementProps = {
  className?: string;
  aspectRatio?: number;
  animationDelay?: string;
  animated?: boolean;
  style?: React.CSSProperties;
};

export default SkeletonElement;
