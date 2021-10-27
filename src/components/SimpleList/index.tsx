/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:56:42
 * @LastEditTime: 2021-10-27 16:12:02
 * @FilePath: /doc-test/src/components/SimpleList/index.tsx
 * @Description:
 */
import React from 'react';
const SimpleList = (props: {
  list: any;
  propKey?: string;
  className?: string;
  selectKey?: string | number;
  selected?: string | number;
}) => {
  const {
    list = [],
    className = '',
    propKey = 'name',
    selectKey = 'id',
    selected = '',
  } = props;
  return (
    <>
      {
        <div className={`${className}`}>
          {list.map((n: any) => {
            return (
              <div
                className={`text-secondary cursor-pointer hover:bg-hover hover:text-primary p-2 ${
                  n[selectKey] === selected ? 'bg-active' : 'bg-white'
                }`}
              >
                {n[propKey]}
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default SimpleList;
