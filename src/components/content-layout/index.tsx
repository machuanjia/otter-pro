/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2022-08-09 16:04:58
 * @LastEditors: Please set LastEditors
 * @FilePath: /web/pro/src/components/content-layout/index.tsx
 * @Description:
 */
import React, { Component } from 'react';
import { ReactNode } from 'react-dom/node_modules/@types/react';

import { LIB_PREFIX } from '../../constants'

type IProps = {
  className?: string;
  hLeft?: ReactNode;
  hCenter?: ReactNode;
  hRight?: ReactNode;
  children?:any
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
        <div className={`${LIB_PREFIX}-content-layout-header-left`}><>{hLeft}</></div>
      );
    }
    if (hCenter) {
      Center = (
        <div className={`${LIB_PREFIX}-content-layout-header-center`}><>{hCenter}</></div>
      );
    }
    if (hRight) {
      Right = (
        <div className={`${LIB_PREFIX}-content-layout-header-right`}><>{hRight}</></div>
      );
    }
    return (
      <section className={`${LIB_PREFIX}-content-layout ${className}`}>
        {(Left || Center || Right) && (
          <>
            <header className={`${LIB_PREFIX}-content-layout-header`}>
              {Left}
              {Center}
              {Right}
            </header>
          </>
        )}
        <div className={`${LIB_PREFIX}-content-layout-main`}>{children}</div>
      </section>
    );
  }
}
