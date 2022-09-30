/*
 * @Author: D.Y.M
 * @Date: 2021-11-09 19:50:51
 * @LastEditTime: 2022-08-09 16:04:37
 * @FilePath: /web/pro/src/components/collection-modal/index.tsx
 * @Description:
 */

import { Modal } from 'antd'
import React from 'react'
import { MouseEvent, ReactChildren } from 'react-dom/node_modules/@types/react'
import { useTranslation } from 'react-i18next'
import { MODAL_SIZE } from '../..'

export enum COLLECTION_TYPE {
  CREATE = 1,
  EDIT = 2,
}

 const CollectionModal = (props: {
  title?: string,
  width?: number,
  onClose: (e: React.MouseEvent<HTMLElement>) => void,
  isVisible: boolean,
  children: ReactChildren,
  entity?: null,
  [propname:string]:any;
}) => {
  const {title='', width = MODAL_SIZE.MD, onClose, isVisible, children, entity, ...args } = props
  const { t } = useTranslation()
  return (
    <Modal
      title={<>{!title ? (entity ? t('common.actions.update') : t('common.actions.create')) : title}</>}
      width={width}
      zIndex={10000}
      visible={isVisible}
      destroyOnClose={true}
      footer={null}
      onCancel={onClose}
      {...args}
    >
      <>{children}</>
    </Modal>
  )
}
export default CollectionModal
