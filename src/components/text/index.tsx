/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 14:01:47
 * @LastEditTime: 2022-08-09 16:00:50
 * @FilePath: /web/pro/src/components/text/index.tsx
 * @Description:
 */

import React from 'react';
import PropTypes from 'prop-types';
import { LIB_PREFIX } from '../../constants'

type IProps = {
  type?: 'default' | 'info' | 'link' | 'primaryLink';
  className?: string;
  children: any;
  [propname:string]:any;
};

const Text = ({ type = 'default', className, children, ...args }: IProps) => {
  return (
    <span {...args} className={`${className} ${LIB_PREFIX}-text-${type}`}>
      {children}
    </span>
  );
};

export default Text;
