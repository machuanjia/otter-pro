/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 20:05:36
 * @LastEditTime: 2021-12-30 20:07:12
 * @FilePath: /pro/src/components/otter-table-action-edit/index.tsx
 * @Description:
 */
import React from "react"
import { EditOutlined } from '@ant-design/icons'
import { Text } from ".."
import { useTranslation } from "react-i18next"

export const OtterTableActionEdit = (props: { onEdit: any, className?: string }) => {
  const { onEdit, className = '' } = props
  const { t } = useTranslation()
  return (
    <Text className={`${className} flex flex-row items-center`} type="primaryLink" onClick={onEdit}>
      <EditOutlined className="mr-1"/> {t('common.actions.update')}
    </Text>
  )
}
export default OtterTableActionEdit
