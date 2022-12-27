/*
 * @Author: D.Y.M
 * @Date: 2021-12-22 10:22:50
 * @LastEditTime: 2022-05-12 12:15:11
 * @FilePath: /pro/src/components/otter-table/index.tsx
 * @Description:
 */
import React, { useRef, useEffect, useState } from 'react';

import { Table } from 'antd';
import { useSize } from 'ahooks';
import { LIB_PREFIX } from '../../constants';
import { useTranslation } from 'react-i18next';
import { Text } from '..';

export const OtterTable = (props: {
  loading: boolean;
  dataSource: any[];
  columns: any[];
  total?: number;
  defaultPageSize?: number;
  current?: number;
  onPaginationChange?: (page: number, pageSize: number) => void;
  scroll?: {
    x?: number;
    y?: number;
  };
  subtractedHeight?: number;
  [propname: string]: any;
}) => {
  const {
    loading = false,
    dataSource = [],
    scroll,
    columns = [],
    total = 0,
    defaultPageSize = 20,
    current = 1,
    subtractedHeight,
    onPaginationChange = () => {},
    ...args
  } = props;
  const ref = useRef(null);
  const { t } = useTranslation();
  const [sc, setScroll] = useState({});
  const size: { width: number; height: number } | undefined = useSize(
    document.querySelector('body'),
  );
  useEffect(() => {
    if (ref) {
      // @ts-ignore
      const { clientHeight } = ref.current;
      if (!scroll) {
        setScroll({
          y: clientHeight - 125,
        });
      } else {
        setScroll(scroll.y ? scroll : { ...scroll, y: clientHeight - (subtractedHeight || 125) });
      }
    }
  }, [ref, scroll, size]);

  const showTotal = (total: number) => {
    return <Text type="info">{t('common.list.total', { total })}</Text>;
  };
  return (
    <div className={`${LIB_PREFIX}-table-wrap`} ref={ref}>
      <Table
        {...args}
        bordered
        className={`${LIB_PREFIX}-table`}
        pagination={{
          total,
          defaultPageSize,
          current,
          onChange: onPaginationChange,
          showTotal: showTotal,
        }}
        scroll={sc}
        rowKey={(record) => (record.id ? record.id : Math.random().toString(36).substring(2))}
        rowClassName={`${LIB_PREFIX}-table-row`}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default OtterTable;
