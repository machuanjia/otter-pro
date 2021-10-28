/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-10-28 14:27:07
 * @FilePath: /doc-test/src/components/SimpleList/index.tsx
 * @Description:
 */
import React from 'react';
import styles from './index.module.less';

const SimpleList = (props: {
  list: any;
  propKey?: string;
  className?: string;
  itemClass?: string;
  selectKey?: string | number;
  selected?: string | number;
  onItemClick?: (entity: any) => void;
  suffix?: any;
}) => {
  const {
    list = [],
    className = '',
    itemClass = '',
    propKey = 'name',
    selectKey = 'id',
    selected = '',
    onItemClick = () => {},
    suffix = null,
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
                className={`${styles['list-item']} ${itemClass} ${
                  n[selectKey] === selected ? 'bg-active' : 'bg-white'
                }`}
              >
                <div className={styles['list-text']}> {n[propKey]}</div>
                {suffix && (
                  <div className={styles['list-action']}>{suffix}</div>
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
