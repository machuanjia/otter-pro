/*
 * @Author: D.Y.M
 * @Date: 2021-11-16 15:33:19
 * @LastEditTime: 2022-11-24 14:53:10
 * @FilePath: /otter-pro/src/components/nav-tabs/index.tsx
 * @Description:
 */
import React, { useEffect, useState } from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Tooltip } from 'antd';
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
  maxLength?: number;
  onClick?: (key: string) => void;
};

const TabLink = ({ item, atv, size }: any) => (
  <>
    {item.name.length > 5 ? (
      <Tooltip title={item.name}>
        <Link to={item.path} key={item.path}>
          <span
            className={`${LIB_PREFIX}-nav-tab ${LIB_PREFIX}-nav-tab-${size} ${
              atv === item.key && `${LIB_PREFIX}-nav-tab-active`
            }`}
          >
            {item.name}
          </span>
        </Link>
      </Tooltip>
    ) : (
      <Link to={item.path} key={item.path}>
        <span
          className={`${LIB_PREFIX}-nav-tab ${LIB_PREFIX}-nav-tab-${size} ${
            atv === item.key && `${LIB_PREFIX}-nav-tab-active`
          }`}
        >
          {item.name}
        </span>
      </Link>
    )}
  </>
);
const Tab = ({ item, atv, size, onClick }: any) => (
  <>
    {item.name.length > 5 ? (
      <Tooltip title={item.name}>
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
      </Tooltip>
    ) : (
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
    )}
  </>
);

const NavTabs = (props: IProps) => {
  const {
    tabs = [],
    active,
    className = '',
    maxLength = 0,
    size = '',
    align = 'center',
    onClick,
  } = props;

  const [data, setData] = useState<any>([]);
  const [menuData, setMenuData] = useState<any>([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleData = () => {
    if (maxLength && tabs.length > maxLength) {
      const data: any[] = [];
      const menuData: any[] = [];
      tabs.forEach((item, index) => (index > maxLength ? menuData.push(item) : data.push(item)));

      setData(data);
      setMenuData(menuData);
      setIsMenuVisible(true);
    } else {
      setData(tabs);
      setMenuData([]);
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    tabs.length && handleData();
  }, [tabs, maxLength]);

  return (
    <div className=" flex">
      <div
        className={`${LIB_PREFIX}-nav-tabs ${LIB_PREFIX}-nav-tabs-${size} ${LIB_PREFIX}-nav-tabs-${align} ${className}`}
      >
        {data.map((n: INav) => (
          <>
            {n.path ? (
              <TabLink key={n.name} item={n} atv={active} size={size} />
            ) : (
              <Tab key={n.name} atv={active} item={n} size={size} onClick={onClick} />
            )}
          </>
        ))}
      </div>
      {isMenuVisible && (
        <Dropdown
          overlay={
            <Menu
              items={menuData.map(({ name, key }: any) => ({
                label: name,
                key,
              }))}
              selectedKeys={[active]}
              onClick={({ key }) => onClick && onClick(key)}
            />
          }
        >
          <CaretDownOutlined
            className={`${LIB_PREFIX}-nav-tabs-icon ${LIB_PREFIX}-nav-tabs-icon-${size}`}
          />
        </Dropdown>
      )}
    </div>
  );
};

export default NavTabs;
