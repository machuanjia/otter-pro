/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-11-01 16:22:40
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
  main?: React.Component;
};

export default class ContentLayout extends Component<IProps, any> {
  render() {
    const { children, className = '' } = this.props;
    let childList = children;
    if (!childList) {
      throw new Error(
        'content layout children must be one of, item key must be [title | actions | bread | main]',
      );
    }

    if (!isArray(childList)) {
      childList = [childList];
    }
    const childrenMap = keyBy(childList, 'key');
    let hLeft = null;
    let actions = null;
    let hCenter = null;
    const bread = null;
    let main = null;
    if (childrenMap.hLeft) {
      hLeft = (
        <div className={styles['content-layout-header-left']}>
          {childrenMap.hLeft}
        </div>
      );
    }
    if (childrenMap.hCenter) {
      hCenter = (
        <div className={styles['content-layout-header-center']}>
          {childrenMap.hCenter}
        </div>
      );
    }
    if (childrenMap.actions) {
      actions = (
        <div className={styles['content-layout-header-actions']}>
          {childrenMap.actions}
        </div>
      );
    }
    if (childrenMap.main) {
      main = (
        <div className={styles['content-layout-main']}>{childrenMap.main}</div>
      );
    }
    return (
      <div className={`${styles['content-layout']} ${className}`}>
        {(hLeft || hCenter || actions) && (
          <>
            <div className={styles['content-layout-header']}>
              {hLeft}
              {hCenter}
              {actions}
            </div>
          </>
        )}
        {bread}
        {main}
      </div>
    );
  }
}
