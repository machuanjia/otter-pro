/*
 * @Author: D.Y.M
 * @Date: 2021-12-25 12:39:10
 * @LastEditTime: 2021-12-25 15:34:24
 * @FilePath: /otter-pro/src/components/part-loading/index.tsx
 * @Description:
 */
import { PushpinOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { addPinKey, isCanPin, addPin, removePinKey, removePin } from '../../utils';

const Pin = ({ key = '', page = 1, pageSize = 20, search = '' }) => {
  const [isPin, setIsPin] = useState(false);
  useEffect(() => {
    const flag = isCanPin(key);
    setIsPin(flag);
  }, []);
  const tooglePin = () => {
    if (!isPin) {
      addPinKey(key);
      addPin(key, { page, pageSize, search });
    } else {
      removePinKey(key);
      removePin(key);
    }
    setIsPin(!isPin);
  };
  return (
    <div className=" absolute right-0">
      <Button
        size="small"
        type={!isPin ? 'default' : 'primary'}
        icon={<PushpinOutlined />}
        onClick={tooglePin}
      ></Button>
    </div>
  );
};

export default Pin;
