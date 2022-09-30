/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 15:02:21
 * @LastEditTime: 2022-03-02 15:56:51
 * @FilePath: /pro/src/components/not-found/index.tsx
 * @Description:
 */
import React from 'react';
import PropTypes from 'prop-types';

import { LIB_PREFIX } from '../../constants'
// @ts-ignore
import url from '../../assets/images/404.png';

type NotFoundProps = {
  desc?: string;
  redirect?: PropTypes.ReactNodeLike;
};

const NotFound = ({ desc = '', redirect = '' }: NotFoundProps) => {
  return (
    <div className={`${LIB_PREFIX}-container`}>
      <div><img src={url} />
      <p>{desc}</p>
      {redirect}</div>
    </div>
  );
};
export default NotFound;
