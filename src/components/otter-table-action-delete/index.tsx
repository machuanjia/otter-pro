/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 20:05:36
 * @LastEditTime: 2021-12-30 20:09:13
 * @FilePath: /pro/src/components/otter-table-action-delete/index.tsx
 * @Description:
 */
import React from "react"
import { DeleteOutlined } from '@ant-design/icons'
import { Text } from ".."
import { useTranslation } from "react-i18next"

const OtterTableActionDelete = (props: { onDelete: any, className?: string }) => {
  const { onDelete, className = '' } = props
  const { t } = useTranslation()
  return (
    <Text className={`${className} flex flex-row items-center`} type="primaryLink" onClick={onDelete}>
      <DeleteOutlined className="mr-1"/> {t('common.actions.delete')}
    </Text>
  )
}

export default OtterTableActionDelete
