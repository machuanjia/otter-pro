/*
 * @Author: D.Y.M
 * @Date: 2021-11-16 15:33:19
 * @LastEditTime: 2021-12-25 15:30:51
 * @FilePath: /otter-pro/src/components/nav-tabs/index.tsx
 * @Description:
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { LIB_PREFIX } from '../../constants';

type INav = {
  name: string;
  path?: string;
  key: string;
};
type IProps = {
  className?: string;
  tabs: INav[];
  active: string;
  size?: string;
  align?: string;
  onClick?: (key: string) => void;
};
const TabLink = ({ item, atv, size }: any) => {
  return (
    <Link to={item.path} key={item.path}>
      <span
        className={`${LIB_PREFIX}-nav-tab ${LIB_PREFIX}-nav-tab-${size} ${
          atv === item.key && `${LIB_PREFIX}-nav-tab-active`
        }`}
      >
        {item.name}
      </span>
    </Link>
  );
};
const Tab = ({ item, atv, size, onClick }: any) => {
  return (
    <span
      onClick={() => {
        onClick && onClick(item.key);
      }}
      className={`${LIB_PREFIX}-nav-tab ${LIB_PREFIX}-nav-tab-${size} ${
        atv === item.key && `${LIB_PREFIX}-nav-tab-active`
      }`}
    >
      {item.name}
    </span>
  );
};
const NavTabs = (props: IProps) => {
  const { tabs, active, className = '', size = '', align = 'center', onClick } = props;
  return (
    <div className={`${LIB_PREFIX}-nav-tabs  ${LIB_PREFIX}-nav-tabs-${align} ${className}`}>
      {tabs.map((n: INav) => {
        return (
          <>
            {n.path ? (
              <TabLink item={n} atv={active} size={size} />
            ) : (
              <Tab atv={active} item={n} size={size} onClick={onClick} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default NavTabs;
