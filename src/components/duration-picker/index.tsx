import { useEffect, useState } from "react";

import { Select, TimePicker } from "antd";
import moment from 'moment';

import { getTimeInterval, getTimeString } from "./format";
import React from "react";

import { LIB_PREFIX } from '../../constants'

const { Option } = Select;
// 生成一个当前月的时间，1号00:00:00作为基点，在此基础上选择日期，输出天数和日期
const DurationPicker: any = ({value, onChange, maxDay, showDays, ...arg}: any) => {
    const [time, setTime] = useState(moment('1 23:59:59', 'D HH:mm:ss'))
    const output = (time: moment.Moment) => {
      onChange(getTimeString(time))
    }

    const timeChange = (time: moment.Moment | null) => {
      if(time) {
        setTime(time)
        output(time)
      }
    }

    const onSelect = (day: number) => {
      const dayTime = moment(`${day+1} ${moment(time.format('HH:mm:ss'), 'HH:mm:ss').format('HH:mm:ss')}`, 'D HH:mm:ss')
      setTime(dayTime)
      output(dayTime)
    }

    useEffect(() => {
      if(value) {
        setTime(getTimeInterval(value))
      }
    }, [value])

    return <div {...arg}>
      {
        showDays ? <>
            <Select
            value={Number(time.format('D')) - 1}
            className={`${LIB_PREFIX}-select-day`}
            dropdownMatchSelectWidth={false}
            placement="topLeft"
            dropdownClassName="overlay-2"
            onSelect={onSelect}
          >
            {new Array(maxDay).fill('').map((_, index) => <Option key={`${String(index)}-'option'`} value={index}>{index}</Option>)}
          </Select>
          <span className="m-3">天</span>
        </> : null
      }
      
      <TimePicker 
      value={time}
      showNow={false} 
      onChange={timeChange}
      allowClear={false}
      popupClassName="overlay-2"
      renderExtraFooter={() => (
        <div className="flex justify-between">
            <span className="">小时</span>
            <span className="">分钟</span>
            <span className={`${LIB_PREFIX}time-picker`}>秒</span>
        </div>
    )}/>
  </div>
}

export default DurationPicker