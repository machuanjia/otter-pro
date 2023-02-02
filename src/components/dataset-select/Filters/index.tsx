import React, { memo, useContext, useDeferredValue, useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Input } from 'antd';
import to from 'await-to-js';
import { debounce } from 'lodash';
import { ut } from '../../../i18n';

import { TAG_TYPES } from '../constant';
import { DatasetSelectContext } from '../context';
import FilterTag from './Tag';
import { LIB_PREFIX } from '../../../constants';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Search } = Input;

// 获取tree 中，标记为已选的node.id,
// item.params为需要组装的属性名
export const getTagsId = (tree: any[]) => {
  const list: string[] = [];
  tree.forEach((item) => {
    if (item.selected && item.id === 'all') {
      // @ts-ignore
      list = [...list, ...item.sub_tags.map(({ id }) => id)];
    } else if (item.selected) {
      list.push(item.id);
    } else {
      // @ts-ignore
      item.sub_tags.forEach((tag) => {
        if (tag.selected) {
          list.push(tag.id);
        }
      });
    }
  });
  return list;
};

const DatasetFilters = memo(() => {
  const { t } = ut();
  const RADIO_LIST = [
    {
      label: t('common.dataType.all'),
      value: 'DataSet_TYPE_UNSPECIFIED',
    },
    {
      label: t('common.dataType.real'),
      value: 'DATASET_TYPE_REAL',
    },
    {
      label: t('common.dataType.synthesis'),
      value: 'DATASET_TYPE_SYNTHETIC',
    },
    {
      label: t('common.dataType.pretraining'),
      value: 'DATASET_TYPE_PRETRAINED',
    },
  ];

  const {
    // @ts-ignore
    getTags,
    // @ts-ignore
    projectId,
    // @ts-ignore
    setIsVisible,
    // @ts-ignore
    setSearchText,
    // @ts-ignore
    dataTypes,
    // @ts-ignore
    setDataTypes,
    // @ts-ignore
    setFilterTags,
    // @ts-ignore
    setLanguageTags,
    // @ts-ignore
    onSuccess,
    // @ts-ignore
    capabilities,
    // @ts-ignore
    getCapabilityDetail,
  } = useContext(DatasetSelectContext);

  const [tags, setTags] = useState([]);

  const [capabilityTags, setCapabilityTags] = useState<any>([]);

  const getAllTags = async () => {
    const [err, data]: any = await to(getTags(projectId, {}));
    if (!err && data && data.tags) {
      // @ts-ignore
      const tgs = data.tags.filter(({ id }) => {
        return id === TAG_TYPES.language.id;
      });
      setTags(tgs);
    }
  };

  const getAiCapabilityDetail = async () => {
    Promise.all(
      capabilities.map((n: any) => {
        return getCapabilityDetail(projectId, n.id, {});
      }),
    ).then((results = []) => {
      console.log(results);
      const tags = results.map((res: any) => {
        return res.filter_tag;
      });
      console.log(tags);
      setCapabilityTags([
        {
          id: 'all',
          title: 'Ai Tags',
          sub_tags: tags,
        },
      ] as any);
    });
  };

  useEffect(() => {
    capabilities && capabilities.length > 0 && getAiCapabilityDetail();
  }, [capabilities]);

  useEffect(() => {
    getAllTags();
  }, []);

  const handleSearch = debounce((search) => {
    setSearchText(search);
  }, 1000);

  const handleDataType = (checkedValues: CheckboxValueType[]) => {
    setDataTypes(checkedValues as any);
  };

  const handelReset = () => {
    setSearchText('');
    setDataTypes(['DataSet_TYPE_UNSPECIFIED']);
    tags.forEach((n: any) => {
      n.selected = false;
      if (n.sub_tags) {
        n.sub_tags.forEach((t: any) => {
          t.selected = false;
        });
      }
    });
    setTags([...tags]);
    const target = getTagsId(tags);
    setLanguageTags(Object.values(target));
  };

  const handelOK = () => {
    onSuccess && onSuccess();
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handelTag = () => {
    setTags([...tags]);
    const ids = getTagsId(tags);
    console.log('language tags', ids);
    setLanguageTags(ids);
  };

  const handelAiTag = () => {
    setCapabilityTags([...capabilityTags]);
    const ids = getTagsId(capabilityTags);
    console.log('ai tags', ids);
    setFilterTags(ids);
  };

  return (
    <section className=" h-full flex flex-col">
      <header className=" h-14 flex flex-col justify-center items-center border-b border-medium p-2">
        <Search
          className="search w-full"
          enterButton={<SearchOutlined />}
          placeholder={t('common.placeholder.title')}
          allowClear
          onSearch={(str) => {
            handleSearch(str);
          }}
        />
      </header>
      <div className="flex-1 pl-2 pr-2">
        <div className="mt-2">
          <header className="font-bold text-medium mb-2">
            <>{t('common.dataType.label')}</>
          </header>
          <Checkbox.Group
            value={dataTypes}
            className="mt-4"
            options={RADIO_LIST}
            onChange={handleDataType}
          />
        </div>
        {tags && tags.length > 0
          ? tags.map((parentTag: any) => (
              <div key={parentTag.id}>
                <Divider className="margin-1" />
                <header className="font-bold text-medium">{parentTag.title}</header>
                <div className="pt-2 pb-2">
                  <FilterTag
                    tag={parentTag}
                    title={t('common.dataType.all')}
                    onChange={handelTag}
                  />
                  {parentTag.sub_tags.map((subTag: any) => (
                    <FilterTag
                      key={subTag.id}
                      tag={subTag}
                      parentTag={parentTag}
                      onChange={handelTag}
                    />
                  ))}
                </div>
              </div>
            ))
          : null}

        {capabilityTags && capabilityTags.length > 0
          ? capabilityTags.map((parentTag: any) => (
              <div key={parentTag.id}>
                <Divider className="margin-1" />
                <header className="font-bold text-medium">{parentTag.title}</header>
                <div className="pt-2 pb-2">
                  <FilterTag
                    tag={parentTag}
                    title={t('common.dataType.all')}
                    onChange={handelAiTag}
                  />
                  {parentTag.sub_tags.map((subTag: any) => (
                    <FilterTag
                      key={subTag.id}
                      tag={subTag}
                      parentTag={parentTag}
                      onChange={handelAiTag}
                    />
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
      <footer className={`${LIB_PREFIX}-dataset-select-wrap-aside-footer`}>
        <Button className="mr-2" onClick={handleClose}>
          <>{t('common.actions.cancel')}</>
        </Button>
        <Button className="mr-2" onClick={() => handelReset()}>
          <>{t('common.actions.reset')}</>
        </Button>
        <Button type="primary" onClick={handelOK}>
          <>{t('common.actions.ok')}</>
        </Button>
      </footer>
    </section>
  );
});
export default DatasetFilters;
