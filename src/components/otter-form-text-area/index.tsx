/*
 * @Author: lubenben
 * @Date: 2022-07-19 11:09:44
 * @LastEditors: lubenben
 * @LastEditTime: 2022-07-22 14:53:25
 */
import React from 'react';

import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

const OtterFormTextArea = (props: TextAreaProps) => {
  const { value = '', onChange, onBlur, ...args } = props;

  const handleChange = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    e.target.value = e.target.value.toString().replace(/(^\s*)/g, '');
    onChange && onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    e.target.value = e.target.value.toString().trim();
    onChange && onChange(e);
    onBlur && onBlur(e);
  };

  return <Input.TextArea value={value} onChange={handleChange} onBlur={handleBlur} {...args} />;
};

export default OtterFormTextArea;
