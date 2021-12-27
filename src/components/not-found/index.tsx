/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:02:21
 * @LastEditTime: 2021-12-25 12:54:11
 * @FilePath: /otter-pro/src/components/not-found/index.tsx
 * @Description:
 */
import React from 'react';
import PropTypes from 'prop-types';

import { LIB_PREFIX } from '../../constants'
// @ts-ignore
import url from '../../assets/images/404.png';

type NotFoundProps = {
  /**
   * 描述
   */
  desc?: string;
  /**
   * 跳转
   */
  redirect?: PropTypes.ReactNodeLike;
};

const NotFound = ({ desc = '', redirect = '' }: NotFoundProps) => {
  return (
    <div className={`${LIB_PREFIX}-container`}>
      <img src={url} />
      <p>{desc}</p>
      {redirect}
    </div>
  );
};
export default NotFound;
