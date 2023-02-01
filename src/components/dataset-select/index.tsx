/*
 * @Author: D.Y.M
 * @Date: 2022-01-06 14:38:01
 * @LastEditTime: 2022-03-02 09:31:52
 * @FilePath: /pro/src/components/empty/index.tsx
 * @Description:
 */

import { Modal } from 'antd';
import React, { useContext, useEffect } from 'react';
import NavTabs from '../nav-tabs';
import Text from '../text';
import { DatasetSelectContext } from './context';
import Datasets from './Datasets';
import DatasetFilters from './Filters';
import { ut } from '../../i18n';
import { LIB_PREFIX } from '../../constants';

const DatasetSelect = () => {
  const { t } = ut();
  // @ts-ignore
  const { isVisible, setIsVisible, capabilities, activeCapability, setActiveCapability } =
    useContext(DatasetSelectContext);

  useEffect(() => {
    capabilities && setActiveCapability(capabilities[0].id);
  }, [capabilities]);

  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleCapability = (id: string) => {
    setActiveCapability(id);
  };
  return (
    <Modal
      className="full-modal"
      zIndex={2000}
      title={null}
      footer={null}
      open={isVisible}
      closable={false}
      onCancel={handleCancel}
    >
      <div className=" h-full flex-1 flex flex-row">
        <div className="flex-1 flex flex-col">
          <header className=" h-14 border-b border-medium flex flex-row items-center">
            <div className=" text-base ml-2">
              <Text type="info">{t('common.components.datasetSelect.label')}</Text>
            </div>
            <div className="flex-1 flex justify-center">
              <NavTabs
                active={activeCapability}
                tabs={
                  capabilities.length &&
                  capabilities.map((n: any) => ({ name: n.title, key: n.id }))
                }
                maxLength={10}
                onClick={handleCapability}
              />
            </div>
            <div></div>
          </header>
          <div className="flex-1" style={{ height: 0 }}>
            <Datasets />
          </div>
        </div>
        <div className={`${LIB_PREFIX}-dataset-select-wrap-aside`}>
          <DatasetFilters />
        </div>
      </div>
    </Modal>
  );
};

export default DatasetSelect;
