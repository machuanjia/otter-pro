/*
 * @Author: D.Y.M
 * @Date: 2021-12-22 10:22:45
 * @LastEditTime: 2022-08-09 16:05:58
 * @FilePath: /web/pro/src/components/otter-table-title/index.tsx
 * @Description:
 */

import React from "react"

import { useTranslation } from "react-i18next"

const OtterTableTitle = ({
  className='',
  title = '',
  count = 0,
  ...args
}) => {
  const { t } = useTranslation()
  // <span className=" inline-block border-r border-medium h-3 ml-2 mr-2"/> {t('common.list.total',{total:count})}
  return (<div {...args} className={`flex flex-row items-center text-weak ${className}`}><span className=" font-bold"><>{t('common.list.label',{name:title})}</></span> </div>)
}

export default OtterTableTitle
