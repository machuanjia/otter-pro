/*
 * @Author: D.Y.M
 * @Date: 2021-12-25 12:39:10
 * @LastEditTime: 2021-12-25 15:34:24
 * @FilePath: /otter-pro/src/components/part-loading/index.tsx
 * @Description:
 */
import React from 'react';
import { LIB_PREFIX } from '../../constants'

const PartLoading = () => {
  return (
    <div className={`${LIB_PREFIX}-part-loading`}>
      <div className={`${LIB_PREFIX}-loading`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default PartLoading;
