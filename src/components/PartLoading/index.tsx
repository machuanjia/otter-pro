import React from 'react';
import styles from './index.module.less';

const PartLoading = () => {
  return (
    <div className=" h-full flex flex-row items-center">
      <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default PartLoading;
