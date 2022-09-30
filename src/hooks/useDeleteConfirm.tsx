/*
 * @Author: D.Y.M
 * @Date: 2021-12-31 10:33:41
 * @LastEditTime: 2022-08-09 16:06:35
 * @FilePath: /web/pro/src/hooks/useDeleteConfirm.tsx
 * @Description:
 */
import React from 'react'

import {
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Modal } from 'antd'
import { useTranslation } from 'react-i18next'

const { confirm } = Modal

const useDeleteConfirm = () => {
  const { t } = useTranslation()
  const DeleteConfirm = (props: { content: string; handleOk: (...args: any[]) => any }) => {
    const { content = '', handleOk } = props
    return confirm({
      icon: <ExclamationCircleOutlined className=" danger-action" />,
      content: content,
      centered: true,
      okText: `${t('common.actions.delete')}`,
      cancelText: `${t('common.actions.cancel')}`,
      okButtonProps: {
        danger: true,
      },
      zIndex: 10005,
      onOk: handleOk
    })
  }
  return [DeleteConfirm]
}
export default useDeleteConfirm
