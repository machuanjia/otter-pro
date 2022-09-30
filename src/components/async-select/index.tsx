/*
 * @Author: D.Y.M
 * @Date: 2022-04-07 15:28:29
 * @LastEditTime: 2022-08-01 17:19:01
 * @FilePath: /pro/src/components/async-select/index.tsx
 * @Description:
 */
import { useEffect, useState } from "react"

import { Select } from 'antd';
import { debounce } from 'lodash'
import React from "react";

const { Option } = Select;

const AsyncSelect = (props: {
    placeholder: string
    apiList: any
    apiDetail?: any
    value?: string
    onChange?: (value:any)=>void
}) => {
    const { placeholder = "",value,onChange, apiList, apiDetail } = props
    const [list, setList] = useState<any>([])
    const [isSearch, setIsSearch] = useState(false)
    const [loading, setLoading] = useState(false)

    const getList = async (title = "") => {
        setLoading(true)
        const res = await apiList(title && {"filter_args.title":title})
        setList(res)
        setLoading(false)
    }

    useEffect(() => {
        if (apiList) {
            getList()
        }
    }, [apiList])

    const getDetail = async (selectId: string) => {
        const res = await apiDetail(selectId)
        res && setList([res,...list])
    }

    useEffect(() => {
        if (apiList && value) {
            const temp = list.find((n:any)=>{
                return n.id === value
            })
            if(!temp){
                getDetail(value)
            }
        }
    }, [value,list,apiDetail])


    function handleValue(value:string) {
        onChange && onChange(value)
    }

    const onSearch = debounce((val)=>{
        !isSearch && setIsSearch(true)
        getList(val)
    },1000)

    const handleClear = ()=>{
      if(isSearch){
        getList()
      }
    }

    return <Select
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={handleValue}
        onClear={handleClear}
        onSearch={onSearch}
        allowClear={true}
        loading={loading}
        dropdownStyle={{
            zIndex: 10001,
        }}
        // filterOption={(input, option) => {
        //     // @ts-ignore
        //     return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }}
    >
        {
            list.map((n:any) => {
                return <Option key={n.id} value={n.id}>{n.title}</Option>
            })
        }
    </Select>
}

export default AsyncSelect
