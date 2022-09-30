/*
 * @Author: D.Y.M
 * @Date: 2021-11-16 15:33:19
 * @LastEditTime: 2021-12-25 15:30:51
 * @FilePath: /otter-pro/src/components/nav-tabs/index.tsx
 * @Description:
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { LIB_PREFIX } from '../../constants'

type INav = {
  name: string;
  path: string;
  key: string;
};
type IProps = {
  className?: string;
  tabs: INav[];
  active: string;
};
const NavTabs = (props: IProps) => {
  const { tabs, active, className = '' } = props
  return (
    <div className={`${LIB_PREFIX}-nav-tabs  ${className}`}>
      {tabs.map((n: INav) => {
        return (
          <Link to={n.path} key={n.path}>
            <span
              className={`${LIB_PREFIX}-nav-tab ${active === n.key && `${LIB_PREFIX}-nav-tab-active`}`}
            >
              {n.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavTabs;
