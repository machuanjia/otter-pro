/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-11-12 08:27:40
 * @LastEditors: Please set LastEditors
 * @FilePath: /doc-test/src/components/ContentLayout/index.tsx
 * @Description:
 */
import React, { Component } from 'react';
// @ts-ignore
import { isArray, keyBy } from 'lodash';
import styles from './index.module.less';

type IProps = {
  className?: string;
  hLeft?: React.Component;
  hCenter?: React.Component;
  hRight?: React.Component;
};

export default class ContentLayout extends Component<IProps, any> {
  render() {
    const {
      children,
      className = '',
      hLeft = null,
      hRight = null,
      hCenter = null,
    } = this.props;
    let Left = null;
    let Right = null;
    let Center = null;

    if (hLeft) {
      Left = (
        <div className={styles['content-layout-header-left']}>{hLeft}</div>
      );
    }
    if (hCenter) {
      Center = (
        <div className={styles['content-layout-header-center']}>{hCenter}</div>
      );
    }
    if (hRight) {
      Right = (
        <div className={styles['content-layout-header-right']}>{hRight}</div>
      );
    }
    return (
      <section className={`${styles['content-layout']} ${className}`}>
        {(Left || Center || Right) && (
          <>
            <header className={styles['content-layout-header']}>
              {Left}
              {Center}
              {Right}
            </header>
          </>
        )}
        <div className={styles['content-layout-main']}>{children}</div>
      </section>
    );
  }
}
