/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 13:58:45
 * @LastEditTime: 2021-12-25 12:56:11
 * @FilePath: /otter-pro/src/components/process-loading/index.tsx
 * @Description:
 */
import React, { ReactNode, Suspense } from 'react';
import ProcessLoading from '../process-loading';

 const LazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<ProcessLoading />}>{children}</Suspense>
}

export default LazyLoad;
