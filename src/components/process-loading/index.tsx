/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 13:58:45
 * @LastEditTime: 2021-12-25 12:56:11
 * @FilePath: /otter-pro/src/components/process-loading/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react';

import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const ProcessLoading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <></>;
};

export default ProcessLoading;
