import React, { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Radio } from 'antd';
import { ut } from '../../i18n';

import SelectTags from './SelectTags';

const RADIO_LIST = ['全部', '真实数据', '合成数据', '预训练数据'];
const { Search } = Input;

const FilterByTags = ({ onChange, save, allTags, defaultValue = null }: any) => {
  const { t } = ut();
  const [radioData, setRadioData]: null | any = useState(null);
  const [filterParmas, setFilterParmas] = useState({
    searchText: '',
    datasetType: '',
    filterTags: [],
  });

  const resetTagsList = () => {
    // 初始化，深拷贝默认参数，作为重置的数据
    const initData = defaultValue
      ? JSON.parse(
          JSON.stringify({
            ...defaultValue,
            filterTags: defaultValue.filterTags.filter(({ type }: any) => type !== 'radio'),
          }),
        )
      : {
          searchText: '',
          datasetType: '',
          filterTags: JSON.parse(
            JSON.stringify(allTags.filter(({ type }: any) => type !== 'radio')),
          ),
        };
    // 时间原因，单选类型的数据，只准备了这一个，特殊处理
    setRadioData(allTags.find(({ type }: any) => type === 'radio') || null);
    setFilterParmas(initData);
    onChange(initData);
  };

  useEffect(() => {
    if (allTags) {
      resetTagsList();
    }
  }, [allTags]);

  const changeValue = (
    arg: React.SetStateAction<{ searchText?: string; datasetType?: string; filterTags?: never[] }>,
  ) => {
    onChange({ ...filterParmas, ...arg });
    setFilterParmas({ ...filterParmas, ...arg });
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
      <Radio.Group
        className="mb-4"
        value={filterParmas.datasetType}
        disabled={radioData && radioData.disabled}
        onChange={(e) => changeValue({ datasetType: e.target.value })}
      >
        {RADIO_LIST.map((title, i) => (
          <Radio value={i} key={title}>
            {title}
          </Radio>
        ))}
      </Radio.Group>
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
