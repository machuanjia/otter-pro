/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-12-25 15:41:06
 * @FilePath: /otter-pro/src/components/simple-list/index.tsx
 * @Description:
 */
import React from 'react';

import { LIB_PREFIX } from '../../constants'

const SimpleList = (props: {
  list: any;
  propKey?: string;
  className?: string;
  itemClass?: string;
  selectKey?: string | number;
  selected?: string | number;
  onItemClick?: (entity: any) => void;
  Suffix?: any;
}) => {
  const {
    list = [],
    className = '',
    itemClass = '',
    propKey = 'title',
    selectKey = 'id',
    selected = '',
    onItemClick = () => {},
    Suffix = null,
  } = props;
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    n: any,
  ) => {
    e.stopPropagation();
    onItemClick(n);
  };
  return (
    <>
      {
        <div className={`${className}`}>
          {list.map((n: any) => {
            return (
              <div
                key={n[selectKey]}
                onClick={e => {
                  handleClick(e, n);
                }}
                className={`${LIB_PREFIX}-list-item ${itemClass} ${
                  n[selectKey] === selected ? `${LIB_PREFIX}-list-item-active`  : ''
                }`}
              >
                <div className={`${LIB_PREFIX}-list-text`}>
                  {n.icon || null} {n[propKey]}
                </div>
                {Suffix && (
                  <div className={`${LIB_PREFIX}-list-action`}>
                    <Suffix entity={n} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default SimpleList;
