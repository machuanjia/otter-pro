import React from 'react'

import { Divider, Tag } from 'antd'
import { LIB_PREFIX } from '../../constants'

const SelectTags = (props: { filterTags: any; setFilterTags: any }) => {
  const {filterTags, setFilterTags} = props

  const handleSelect = (node: { sub_tags: any[]; selected: boolean; }, parentTag: { selected: boolean; } | null) => {
    if(parentTag) {
      parentTag.selected = false
    } else {
      node.sub_tags.forEach((item) => {
        item.selected = !node.selected
      })
    }
    node.selected = !node.selected
    setFilterTags([...filterTags])
  }

  const CreateTag = ({tag, parentTag = null, title = ''}: any) => (<Tag 
    key={tag.id} 
    onClick={() => { handleSelect(tag, parentTag) }} 
    className={`${LIB_PREFIX}-tag-wrap ${tag.selected ? `${LIB_PREFIX}-tag-wrap-active` : ''}`}>
      {title || tag.title}
    </Tag>)

  return <>{filterTags && filterTags.length > 0 ? filterTags.map((parentTag: any) => <div key={parentTag.id}>
        <Divider className="margin-1" />
        <header className='font-bold text-medium'>{parentTag.title}</header>
        <div className='pt-2 pb-2'>
          <CreateTag tag={parentTag} title="全部"/>
          { parentTag.sub_tags.map((subTag: any) => <CreateTag key={subTag.id} tag={subTag} parentTag={parentTag} />) }
        </div>
      </div>) : null}
  </>
}
export default SelectTags
