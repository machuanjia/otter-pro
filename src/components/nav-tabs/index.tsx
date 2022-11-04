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
  onClick?: (key: string) => void;
};
type IProps = {
  className?: string;
  tabs: INav[];
  active: string;
};
const NavTabs = (props: IProps) => {
  const { tabs, active, className = '' } = props;
  const TabLink = ({ item, atv }: any) => {
    return (
      <Link to={item.path} key={item.path}>
        <span
          className={`${LIB_PREFIX}-nav-tab ${atv === item.key && `${LIB_PREFIX}-nav-tab-active`}`}
        >
          {item.name}
        </span>
      </Link>
    );
  };
  const Tab = ({ item, atv }: any) => {
    return (
      <span
        onClick={() => {
          item.onClick && item.onClick(item.key);
        }}
        className={`${LIB_PREFIX}-nav-tab ${atv === item.key && `${LIB_PREFIX}-nav-tab-active`}`}
      >
        {item.name}
      </span>
    );
  };
  return (
    <div className={`${LIB_PREFIX}-nav-tabs  ${className}`}>
      {tabs.map((n: INav) => {
        return <>{n.path ? <TabLink item={n} atv={active} /> : <Tab atv={active} item={n} />}</>;
      })}
    </div>
  );
};

export default NavTabs;
