import { useEffect, useState } from 'react'

import { message, Radio, Table, Tabs } from 'antd'
import React from 'react'
import to from "await-to-js"
import Empty from '../empty'
import Text from '../text'

const { TabPane } = Tabs
const idsPiecesLength = 50

const DatasetVersion = ({ filterParams, output, capability, getSetsListService, getLatestVersionsService }: any) => {
  // filterParams: 过滤的条件
  // output: 选中的数据数组 
  // capability: AI 能力 
  // getSetsListService: 获取数据集的接口 
  // getLatestVersionsService: 获取最新有标注结果数据集版本的接口
  const [dataList, setDataList]: any = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [tabValue, setTabValue] = useState(0)
  const [capabilityParams, setCapabilityParams]: any = useState([])

  useEffect(() => {
    if (capability) {
      setCapabilityParams(capability.map((item: any) => ({...item, showOnlySelected: false})))
    }
  }, [capability])

  useEffect(() => {
    setPage(1)
  }, [tabValue])

  const getActive = (filterParams: { [x: string]: string | any[] }) => {
    // 匹配右侧tag已选的AI能力
    if (filterParams && filterParams['filter_args.ai_tag_ids']) {
      return capability.filter(({ id }: any) => filterParams['filter_args.ai_tag_ids'].includes(id)).map((item: any) => ({...item, showOnlySelected: false}))
    } else {
      return null
    }
  }

  const getLatestAnnotatedVersions = (ids: any[], aiCapabilityId: any) => {
    return getLatestVersionsService(ids.reduce((pre, id) => `${pre}&dataset_ids=${id}`,`ai_capability_id=${aiCapabilityId}`))
  }

  const getIds = async (params: { page: number }, arr: any[]): Promise<any> => {
    const [err, datasetList]: any = await to(getSetsListService(params))
    if(err) {
      message.error('获取数据集失败')
      return Promise.resolve(null)
    } else if(!datasetList.datasets){
      message.error('没有搜索到数据集')
      return Promise.resolve(null)
    }
    const result = [...arr, ...datasetList.datasets.map(({id}: any) => id)]
    if(result.length < datasetList.total_size ) {
      return getIds({...params, page: params.page+1}, result)
    } else {
      return Promise.resolve(result)
    }
  }

  const onFilterChange = async () => {
    setLoading(true)
    const params = {
      page_size: 200,
      page: page || 1,
      ...filterParams,
    }
    // 获取全部数据集
    const datasetIdList = await getIds(params, [])
    const activeAi = getActive(filterParams) || capability
    setCapabilityParams(activeAi)
    if(!datasetIdList || !capability) {
      output(null)
      setDataList([])
      setLoading(false)
      return
    }
    // 受url长度限制，数据集ID切分为50个一组，一次请求一组 
    const pieces = new Array(Math.ceil(datasetIdList.length / idsPiecesLength)).fill(null).map(
      (_, i) => datasetIdList.slice(i * idsPiecesLength, (i+1) * idsPiecesLength )
    )
    // 初始化数据，根据AI，初始成几个空数据
    const dataListEmpty = activeAi.map(({aiCapabilityId}: any) =>({data: [], idsCount: 0, datasetCount: 0, selectedRowKeys: [], aiCapabilityId}))
    // 几种AI能力同时请求，每种AI能力各自请求数据集（有可能是多组数据集）
    Promise.all(dataListEmpty.map(
      ({aiCapabilityId}: any) => Promise.all(pieces.map((ids)=> getLatestAnnotatedVersions(ids, aiCapabilityId))))
    ).then((datalist) => {
      const result = dataListEmpty.map((item: any, i: number) => ({
        ...item,
        // 每个AI能力拼接查询到的数据
        data: datalist[i].reduce((pre: any, {details}: any)=> details ? [...pre, ...details] : pre, [])
      }))
      setDataList(result)
    }).catch((err) => {
      message.error(err)
      setDataList(dataListEmpty)
    })
    .then(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    if (filterParams) {
      onFilterChange()
    }
  }, [filterParams])

  useEffect(() => {
    output(capabilityParams)
  }, [capabilityParams])

  const columns: any = [
    {
      title: '数据集名称',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      width: 220,
      render: (_: any, { dataset_dataset_version }: any) => dataset_dataset_version?.dataset.title,
    },
    {
      title: '数据集Id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 300,
      render: (_: any, { dataset_dataset_version }: any) => dataset_dataset_version?.dataset.id
    },
    {
      title: '数据集版本',
      dataIndex: 'versionTitle',
      key: 'versionTitle',
      align: 'center',
      render: (_: any, { dataset_dataset_version }: any) => dataset_dataset_version?.version?.title,
    },
    {
      title: '数据量',
      dataIndex: 'dataCount',
      key: 'dataCount',
      align: 'center',
      width: 100,
      render: (_: any, { dataset_dataset_version }: any) => dataset_dataset_version?.version?.root_dir?.total_file_count || '0',
    },
    {
      title: '数据集版本Id',
      dataIndex: 'versionId',
      key: 'versionId',
      align: 'center',
      width: 300,
      render: (_: any, { dataset_dataset_version }: any) => dataset_dataset_version?.version?.id,
    },
  ]
  const onSelectChange = (keys: any, arr: any) => {
    capabilityParams[tabValue].selectedRowKeys = keys
    capabilityParams[tabValue].selectedList = arr
    setCapabilityParams([...capabilityParams])
  }
  const rowSelection = {
    selectedRowKeys: capabilityParams[tabValue]?.selectedRowKeys || [],
    fixed: true,
    onChange: onSelectChange,
  };

  const checkListType = (val: Boolean) => {
    capabilityParams[tabValue].showOnlySelected = val
    setCapabilityParams([...capabilityParams])
  }

  return (
    <>
      <Tabs onChange={(i) => setTabValue(Number(i))} type="card">
        {capabilityParams.map((item: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }, i: any) => (
          <TabPane tab={item.title} key={Number(i)} disabled={loading} />
        ))}
      </Tabs>
      <Text type="info" className="mt-3 mr-2 inline-block">共{ dataList[tabValue]?.data?.length || 0}条</Text>
      <Text type="info" className="mt-3 mr-2 inline-block">已选{capabilityParams[tabValue]?.selectedList?.length || 0}条</Text>
      <Radio.Group buttonStyle="solid" value={capabilityParams[tabValue]?.showOnlySelected} className="mt-3 mr-2 inline-block" onChange={(e)=>checkListType(e.target.value)}>
        <Radio.Button value={false}>查看全部</Radio.Button>
        <Radio.Button value={true}>查看已选</Radio.Button>
      </Radio.Group>
      <Table
        locale={{
          emptyText: <Empty title="数据集为空" description="" />,
        }}
        bordered
        loading={loading}
        columns={columns}
        className="mt-3"
        rowSelection={rowSelection}
        dataSource={capabilityParams[tabValue]?.showOnlySelected ? capabilityParams[tabValue]?.selectedList : dataList[tabValue]?.data}
        pagination={false}
        rowKey={record => record?.dataset_dataset_version?.dataset?.id}
        scroll={{ x: 1200 }}
      />
    </>
  )
}

export default DatasetVersion
