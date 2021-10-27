/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 13:58:45
 * @LastEditTime: 2021-10-27 14:19:26
 * @FilePath: /doc-test/src/ProcessLoading/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
