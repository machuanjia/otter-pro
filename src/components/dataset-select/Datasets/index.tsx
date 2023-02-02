import React, { SetStateAction, useContext, useEffect, useState } from 'react';

import { Radio } from 'antd';
import { map, uniqBy } from 'lodash';

import { DatasetSelectContext } from '../context';
import SelectDatas from './SelectDatas';
import ContentLayout from '../../content-layout';
import OtterTable from '../../otter-table';
import Empty from '../../empty';
import { ut } from '../../../i18n';

const Datasets = () => {
  const { t } = ut();
  const {
    // @ts-ignore
    projectId,
    // @ts-ignore
    activeCapability,
    // @ts-ignore
    searchText,
    // @ts-ignore
    dataTypes,
    // @ts-ignore
    filterTags,
    // @ts-ignore
    selectDatas,
    // @ts-ignore
    setSelectDatas,
    // @ts-ignore
    getDatasetsVersions,
  } = useContext(DatasetSelectContext);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  const getDatasets = async () => {
    setLoading(true);
    let params: any = {
      page,
      page_size: pageSize,
    };

    if (dataTypes && dataTypes.length > 0) {
      params = {
        ...params,
        'filter_args.dataset_types': dataTypes.filter((n: string) => {
          return n !== 'DataSet_TYPE_UNSPECIFIED';
        }),
      };
    }

    if (filterTags && filterTags.length > 0) {
      params = {
        ...params,
        'filter_args.language_tag_ids': filterTags,
      };
    }

    if (searchText) {
      params = {
        ...params,
        'filter_args.title': searchText,
        'filter_args.description': searchText,
      };
    }
    const data: any = await getDatasetsVersions(projectId, activeCapability, params);
    if (!data.results) {
      setTotal(0);
      setList([]);
      setLoading(false);
      return;
    }
    // @ts-ignore
    const ls = data.results.map(({ dataset_dataset_version, training_data_count }) => {
      return {
        id: dataset_dataset_version.dataset.id,
        dataset_dataset_version,
        training_data_count,
      };
    });
    setTotal(data.total_size);
    setList(ls);
    setLoading(false);
  };

  useEffect(() => {
    setFilter('all');
    setList([]);
    setPage(1);
    setSelectedRowKeys([]);
  }, [activeCapability]);

  useEffect(() => {
    if (!selectDatas || !activeCapability) {
      return;
    }
    const ls = selectDatas[activeCapability] || [];
    setSelectedRowKeys(map(ls, 'id'));
  }, [selectDatas, activeCapability]);

  // 参数变化 获取数据集列表
  useEffect(() => {
    activeCapability && getDatasets();
  }, [activeCapability, page, pageSize, searchText, dataTypes, filterTags]);

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
      title: `Training ${t('common.list.count')}`,
      dataIndex: 'training_data_count',
      key: 'training_data_count',
      align: 'center',
      // @ts-ignore
      render: (_, { training_data_count = 0 }) => training_data_count,
    },
    {
      title: `Testing ${t('common.list.count')}`,
      dataIndex: 'testing_data_count',
      key: 'testing_data_count',
      align: 'center',
      // @ts-ignore
      render: (_, { testing_data_count = 0 }) => testing_data_count,
    },
    {
      title: `${t('common.list.version')} Id`,
      dataIndex: 'versionId',
      key: 'versionId',
      // @ts-ignore
      render: (_, { dataset_dataset_version }) => dataset_dataset_version?.version?.id,
    },
  ];

  const handlePagination = (p: number, ps: number) => {
    setPage(p);
    setPageSize(ps);
  };

  const handleFilter = (e: { target: { value: SetStateAction<string> } }) => {
    setFilter(e.target.value);
    if (e.target.value === 'selected') {
      const sls = selectDatas[activeCapability] || [];
      setSelectedRowKeys(map(sls, 'id'));
    }
  };

  const onSelectChange = (record: { id: any }, selected: any) => {
    let sls = selectDatas[activeCapability] || [];
    if (selected) {
      sls.push(record);
    } else {
      // @ts-ignore
      sls = sls.filter(({ id }) => {
        return id !== record.id;
      });
    }
    setSelectDatas({
      ...selectDatas,
      [activeCapability]: uniqBy(sls, 'id'),
    });
  };

  const onSelectAllChange = (selected: any, selectedRows: any, changeRows: any) => {
    let sls = selectDatas[activeCapability] || [];
    if (selected) {
      sls = [...sls, ...changeRows];
    } else {
      const ids = map(sls, 'id');
      // @ts-ignore
      sls = sls.filter(({ id }) => {
        return !ids.includes(id);
      });
    }
    setSelectDatas({
      ...selectDatas,
      [activeCapability]: uniqBy(sls, 'id'),
    });
  };

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onSelect: onSelectChange,
    onSelectAll: onSelectAllChange,
  };

  return (
    <ContentLayout
      hLeft={
        <div>
          <>{t('common.routes.dataset')}</>
        </div>
      }
      hRight={
        <div>
          <Radio.Group
            options={[
              { label: `${t('common.filter.all')}`, value: 'all' },
              { label: `${t('common.filter.selected')}`, value: 'selected' },
            ]}
            // @ts-ignore
            onChange={handleFilter}
            value={filter}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      }
    >
      {filter === 'all' && (
        <OtterTable
          locale={{
            emptyText: (
              <Empty title={t('common.routes.dataset')} description={t('common.empty.desc')} />
            ),
          }}
          rowSelection={rowSelection}
          loading={loading}
          current={page}
          total={total}
          columns={columns}
          dataSource={list}
          onPaginationChange={handlePagination}
        />
      )}
      {filter === 'selected' && <SelectDatas />}
    </ContentLayout>
  );
};

export default Datasets;
