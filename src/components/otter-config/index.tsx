/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 15:18:56
 * @LastEditTime: 2021-12-30 17:05:18
 * @FilePath: /mlplatform/web/pro/src/components/otter-config/index.tsx
 * @Description:
 */

import React from "react";

const OtterConfig = (props:{ local: string, children:React.ReactChild }) => {
  const { local, children} = props
  return (
    <>
      {children}
    </>
  );
};
export default OtterConfig;
