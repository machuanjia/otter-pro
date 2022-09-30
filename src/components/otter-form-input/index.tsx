/*
 * @Author: lubenben
 * @Date: 2022-07-19 11:09:44
 * @LastEditors: lubenben
 * @LastEditTime: 2022-07-22 14:49:36
 */
import React from 'react';

import { Input } from 'antd';

import type { InputProps } from 'antd';

const OtterFormInput = (props: InputProps) => {
  const { value, onChange, onBlur, ...args } = props;

  const handleChange = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.value = e.target.value.toString().replace(/(^\s*)/g, '');
    onChange && onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.value = e.target.value.toString().trim();
    onChange && onChange(e);
    onBlur && onBlur(e);
  };

  return <Input value={value} onChange={handleChange} onBlur={handleBlur} {...args} />;
};

export default OtterFormInput;
