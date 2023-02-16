import React, { useContext, useEffect, useState } from 'react';

import { map } from 'lodash';

import { DatasetSelectContext } from '../context';
import OtterTable from '../../otter-table';
import Empty from '../../empty';
import { ut } from '../../../i18n';

const SelectDatas = () => {
  const { t } = ut();
  // @ts-ignore
  const { activeCapability, selectDatas, setSelectDatas } = useContext(DatasetSelectContext);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: any = [
    {
      title: t('common.list.title'),
      dataIndex: 'title',
      key: 'title',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) => dataset_dataset_version?.dataset.title,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) => dataset_dataset_version?.dataset.id,
    },
    {
      title: t('common.list.version'),
      dataIndex: 'versionTitle',
      key: 'versionTitle',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) => dataset_dataset_version?.version?.title,
    },
    {
      title: t('common.list.count'),
      dataIndex: 'dataCount',
      key: 'dataCount',
      align: 'center',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) =>
        dataset_dataset_version?.version?.root_dir?.total_file_count || '0',
    },
    {
      title: `${t('common.list.version')} Id`,
      dataIndex: 'versionId',
      key: 'versionId',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) => dataset_dataset_version?.version?.id,
    },
  ];

  useEffect(() => {
    if (!selectDatas || !activeCapability) {
      return;
    }
    const ls = selectDatas[activeCapability] || [];
    setList(ls);
    setTotal(ls.length);
    setSelectedRowKeys(map(ls, 'id'));
  }, [selectDatas, activeCapability]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    selectDatas[activeCapability] = list.filter(({ id }) => {
      return newSelectedRowKeys.includes(id);
    });
    setSelectDatas({ ...selectDatas });
  };

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectChange,
  };

  const handlePagination = (p: number) => {
    setPage(p);
  };

  return (
    <OtterTable
      locale={{
        emptyText: (
          <Empty title={t('common.routes.dataset')} description={t('common.empty.desc')} />
        ),
      }}
      rowSelection={rowSelection}
      loading={false}
      defaultPageSize={20}
      current={page}
      total={total}
      columns={columns}
      dataSource={list}
      onPaginationChange={handlePagination}
    />
  );
};

export default SelectDatas;
