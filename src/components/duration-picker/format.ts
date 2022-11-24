/*
 * @Author: lubenben
 * @Date: 2022-11-22 15:32:45
 * @LastEditors: lubenben
 * @LastEditTime: 2022-11-24 10:07:00
 */
import dayjs from 'dayjs';

export const getTimeInterval = (time: string) => {
  // 当前月的1号毫秒数 + 传入的秒数 => 转换成日期
  const timestamp =
    Number(dayjs('1 00:00:00', 'DD HH:mm:ss').format('X') + '000') + Number(time + '000');
  return dayjs(timestamp);
};

export const getTimeString = (time: any) => {
  // 给定时间 - 当前月的1号毫秒数 = 秒数间隔
  return (
    Number(time.format('X')) -
    Number(dayjs(time.format('YYYYMM') + '1 00:00:00', 'YYYYMMD HH:mm:ss').format('X'))
  );
};
