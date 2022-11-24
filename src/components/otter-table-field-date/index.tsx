/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 19:20:16
 * @LastEditTime: 2022-11-24 10:07:57
 * @FilePath: /pro/src/components/otter-table-field-date/index.tsx
 * @Description:
 */
import dayjs from 'dayjs';
import React from 'react';
import { Text } from '..';

const OtterTableFieldDate = (props: { date: Date; format?: string }) => {
  const { date, format = 'YYYY-MM-DD HH:mm:ss' } = props;
  return <Text type="info">{date ? dayjs(date).format(format) : '-'}</Text>;
};

export default OtterTableFieldDate;
