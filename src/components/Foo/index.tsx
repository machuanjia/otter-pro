/*
 * @Author: D.Y.M
 * @Date: 2021-10-08 19:46:32
 * @LastEditTime: 2021-10-27 10:59:45
 * @FilePath: /doc-test/src/Foo/index.tsx
 * @Description:
 */
import React from 'react';
import styles from './index.module.less';

export default ({ title }: { title: string }) => (
  <h1 className={styles.foo}>{title}</h1>
);
