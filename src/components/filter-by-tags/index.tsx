import React, { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { ut } from '../../i18n';

import SelectTags from './SelectTags';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const RADIO_LIST = [
  {
    label: '全部',
    value: 'DataSet_TYPE_UNSPECIFIED',
  },
  {
    label: '真实数据',
    value: 'DATASET_TYPE_REAL',
  },
  {
    label: '合成数据',
    value: 'DATASET_TYPE_SYNTHETIC',
  },
  {
    label: '预训练数据',
    value: 'DATASET_TYPE_PRETRAINED',
  },
];
const { Search } = Input;

const FilterByTags = ({ onChange, save, allTags }: any) => {
  const { t } = ut();
  const [filterParmas, setFilterParmas] = useState({
    searchText: '',
    datasetType: [],
    filterTags: [],
  });

  const resetTagsList = () => {
    const initData = {
      searchText: '',
      datasetType: [],
      filterTags: JSON.parse(JSON.stringify(allTags.filter(({ type }: any) => type !== 'radio'))),
    };
    setFilterParmas(initData);
    onChange(initData);
  };

  useEffect(() => {
    if (allTags) {
      resetTagsList();
    }
  }, [allTags]);

  const changeValue = (
    arg: React.SetStateAction<{
      searchText?: string;
      datasetType?: CheckboxValueType[];
      filterTags?: never[];
    }>,
  ) => {
    onChange({ ...filterParmas, ...arg });
    setFilterParmas({ ...filterParmas, ...arg } as any);
  };

  const handleChange = (checkedValues: CheckboxValueType[]) => {
    changeValue({ datasetType: checkedValues });
  };

  return (
    <>
      <Search
        className="search mr-2 mb-2 mt-2 w-72"
        enterButton={<SearchOutlined />}
        // value={filterParmas.searchText}
        placeholder={t('common.placeholder.title')}
        allowClear
        onSearch={(str) => changeValue({ searchText: str })}
      />
      <header className="font-bold text-medium mb-4 mt-2">数据类型</header>
      <Checkbox.Group
        value={filterParmas.datasetType}
        className="mb-4"
        options={RADIO_LIST}
        onChange={handleChange}
      />
      <SelectTags
        filterTags={filterParmas.filterTags}
        setFilterTags={(tags: any) => changeValue({ filterTags: tags })}
      />
      <Button className="w-full mt-3.5" onClick={() => resetTagsList()}>
        重置
      </Button>
      <Button type="primary" className="w-full mt-3.5" onClick={save}>
        确定
      </Button>
    </>
  );
};
export default FilterByTags;
