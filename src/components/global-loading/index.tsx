/*
 * @Author: D.Y.M
 * @Date: 2021-10-09 16:06:52
 * @LastEditTime: 2021-12-25 15:25:26
 * @FilePath: /otter-pro/src/components/global-loading/index.tsx
 * @Description:
 */
import React from 'react';

import { LIB_PREFIX } from '../../constants'

const GlobalLoading = (props: { description?: string; className?: string }) => {
  const { description, className = '' } = props;
  return (
    <div
      className={`${LIB_PREFIX}-global-loading ${className}`}
    >
      <div className={`${LIB_PREFIX}-global-loading-icon`} />
      {description && (
        <>
          <div className={`${LIB_PREFIX}-global-loading-desc`}>{description}</div>
        </>
      )}
    </div>
  );
};

export default GlobalLoading;
