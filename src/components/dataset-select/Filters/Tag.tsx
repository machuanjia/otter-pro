import React from 'react';
import { Tag } from 'antd';

import { LIB_PREFIX } from '../../../constants';

const FilterTag = ({ tag, parentTag = null, title = '', onChange }: any) => {
  const handleLanguageTag = (
    node: { sub_tags: any[]; selected: boolean },
    parentTag: { selected: boolean } | null,
  ) => {
    if (parentTag) {
      parentTag.selected = false;
    } else {
      node.sub_tags.forEach((item) => {
        item.selected = !node.selected;
      });
    }
    node.selected = !node.selected;
    onChange && onChange();
  };
  return (
    <Tag
      key={tag.id}
      onClick={() => {
        handleLanguageTag(tag, parentTag);
      }}
      className={`${LIB_PREFIX}-filter-tag-wrap ${
        tag.selected ? `${LIB_PREFIX}-filter-tag-wrap-active` : ''
      }`}
    >
      {title || tag.title}
    </Tag>
  );
};

export default FilterTag;
