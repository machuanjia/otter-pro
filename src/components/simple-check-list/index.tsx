/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-12-25 15:37:09
 * @FilePath: /otter-pro/src/components/simple-check-list/index.tsx
 * @Description:
 */
import { Tooltip } from 'antd';
import React from 'react';
import { LIB_PREFIX } from '../../constants'

const SimpleCheckList = (props: {
  list: any;
  propKey?: string;
  className?: string;
  itemClass?: string;
  selectKey?: string | number;
  selected?: string | number;
  truncate?: boolean;
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
    truncate = false,
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
                {
                  truncate ? <Tooltip placement="top" title={n[propKey]}>
                    <div className="items-center truncate block"> {n[propKey]}</div>
                  </Tooltip> : <div className={`${LIB_PREFIX}-list-text`}> {n[propKey]}</div>
                }
                {Suffix && selected === n[selectKey] && (
                  <div className={`${LIB_PREFIX}-list-action-check`}>
                    <Suffix />
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

export default SimpleCheckList;
