/*
 * @Author: D.Y.M
 * @Date: 2022-01-06 14:38:01
 * @LastEditTime: 2022-03-02 09:31:52
 * @FilePath: /pro/src/components/empty/index.tsx
 * @Description:
 */

import React from 'react';
import { Button } from 'antd';

// @ts-ignore
import url from '../../assets/images/empty.png';

import { LIB_PREFIX } from '../../constants'

const Empty = (props: {
  title: string
  description: string
  actionText?: string
  action?: () => void
}) => {
  const { title, description, actionText = '', action } = props
  return <section className={`${LIB_PREFIX}-empty-wrap`}>
    <aside className={`${LIB_PREFIX}-empty-aside`}>
      <header className={`${LIB_PREFIX}-empty-title`}>
        {title}
      </header>
      <div className=" mt-6">
        {description}
      </div>
      <footer>
        {
          action && <Button type="primary" className='mt-4' onClick={action}>{actionText}</Button>
        }

      </footer>
    </aside>
    <img className={`${LIB_PREFIX}-empty-img`} src={url} />
  </section>
}

export default Empty
