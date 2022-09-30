import moment from 'moment';

export const getTimeInterval = (time: string) => {
    // 当前月的1号毫秒数 + 传入的秒数 => 转换成日期
    const timestamp = Number(moment('1 00:00:00', 'DD HH:mm:ss').format('X') + '000') + Number(time + '000')
    return moment(timestamp)
}

export const getTimeString = (time: moment.Moment) => {
    // 给定时间 - 当前月的1号毫秒数 = 秒数间隔
    return Number(time.format('X')) - Number(moment(time.format('YYYYMM')+'1 00:00:00', 'YYYYMMD HH:mm:ss').format('X'))
}