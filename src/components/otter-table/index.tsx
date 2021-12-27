/*
 * @Author: D.Y.M
 * @Date: 2021-12-22 10:22:50
 * @LastEditTime: 2021-12-25 15:33:09
 * @FilePath: /otter-pro/src/components/otter-table/index.tsx
 * @Description:
 */
import React, { useRef, useEffect, useState } from 'react'

import { Table } from 'antd'

import { LIB_PREFIX } from '../../constants'

export const OtterTable = (props: { loading: boolean, dataSource: any[], columns: any[], [propname: string]: any }) => {
  const { loading = false, dataSource = [], columns = [], ...args } = props
  const ref = useRef(null)
  const [y, setY] = useState(500)
  useEffect(() => {
    // @ts-ignore
    setY(ref?.current?.clientHeight - 100)
  }, [])
  return (
    <div className={`${LIB_PREFIX}-table-wrap`} ref={ref}>
      <Table
        {...args}
        className={`${LIB_PREFIX}-table`}
        pagination={{
          position: ['bottomLeft'],
          defaultPageSize: 20,
        }}
        scroll={{ y }}
        rowKey={(record) => {
          // @ts-ignore
          return record.id
        }}
        rowClassName={`${LIB_PREFIX}-table-row`}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
}


export default OtterTable
