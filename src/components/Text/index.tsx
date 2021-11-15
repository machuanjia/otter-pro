/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 14:01:47
 * @LastEditTime: 2021-11-15 14:28:38
 * @FilePath: /doc-test/src/components/Text/index.tsx
 * @Description:
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

type IProps = {
  type?: 'default' | 'info' | 'link' | 'primaryLink';
  className?: string;
  children: PropTypes.ReactNodeLike;
};

const Text = ({ type = 'default', className, children, ...args }: IProps) => {
  return (
    <span {...args} className={`${className} ${styles[`text-${type}`]}`}>
      {children}
    </span>
  );
};

export default Text;
