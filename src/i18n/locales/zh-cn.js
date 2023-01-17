/*
 * @Author: D.Y.M
 * @Date: 2021-12-30 15:22:35
 * @LastEditTime: 2022-03-11 11:42:27
 * @FilePath: /mlplatform/web/pro/src/i18n/locales/zh-cn.js
 * @Description:
 */

export default {
  common: {
    routes: {
      login: '登录',
      logout: '退出',
      project: '项目',
      team: '团队',
      main: '主页',
      engines: '引擎管理',
      capabilities: 'AI能力管理',
      basicInfo: '基础信息',
      datasetTags: '数据集标签',
      annotationTemplates: '标注模板',
      defaultDatasets: '默认数据集',
      dashboard: '概览',
      data: '数据',
      dataLake: '数据湖',
      dataset: '数据集',
      dataTask: '标注任务',
      dataSynthesis: '数据合成',
      annotation: '标注',
      autoCheck: '自动校对',
      experiment: '实验',
      trainingTask: '训练任务',
      viewTrainingTask: '查看训练任务',
      model: '模型',
      modelRepos: '模型仓库',
      modelReposVersion: '模型版本',
      test: '测试',
      testingTask: '测试任务',
      trace: 'Traces',
      testingTaskAnalyze: '测试任务效果分析',
      testingDatasetAnalyze: '数据集效果分析',
      testingDataAnalyze: '数据效果分析',
      badcase: 'Badcases',
      publish: '发布',
      percipience: '洞察',
      settingCenter: '配置中心',
      aiEngine: 'AI 引擎',
      aiCapability: 'AI 能力',
    },
    actions: {
      create: '新建',
      update: '编辑',
      delete: '删除',
      cancel: '取消',
      ok: '确定',
      view: '查看',
      more: '更多',
      export: '导出',
      import: '导入',
      add: '添加',
      superSearch: '高级搜索',
      reset: '重置',
      rename: '重命名',
      download: '下载',
      uploadFile: '上传文件',
      close: '关闭',
      setting: '设置',
      detail: '详情',
      stop: '停止',
      upload: '上传',
      downloadExampleFile: '下载示例文件',
      run: '运行',
      start: '开始',
      copy: '复制',
      retry: '重试',
      submit: '提交',
      uploadImg: '上传图片',
      rerun: '重新运行',
      annotate: '标注',
      move: '移动',
      help: '帮助',
      backToBottom: '到最底层',
      zoomIn: '放大',
      zoomOut: '缩小',
      error: '错误',
      reject: '驳回',
      save: '保存',
      pass: '通过',
      nextPage: '下一张',
      select: '选择',
      archive: '归档',
      unarchive: '取消归档',
      star: '收藏',
    },
    list: {
      label: '{{name}}列表',
      total: '共{{total}}条',
      title: '名称',
      status: '状态',
      description: '描述',
      createTime: '创建时间',
      creator: '创建者',
      updateTime: '更新时间',
      updater: '更新者',
      actions: '操作',
      role: '角色',
      members: '成员',
      teams: '团队',
      type: '类型',
      size: '大小',
      startTime: '开始时间',
      endTime: '结束时间',
      runTime: '运行时长',
      capability: 'AI能力',
      engine: 'AI引擎',
      model: '模型',
      dataset: '数据集',
      summary: '合计',
      dataTitle: '数据名称',
      time: '时间',
      version: '版本',
      count: '数据量',
      totalCount: '总计',
      group: '分组',
    },
    datasetType: {
      default: '默认',
      custom: '自定义',
    },
    detail: {
      log: '日志',
    },
    unit: {
      hour: '小时',
      minute: '分钟',
      second: '秒',
      yuanEachHour: '元/小时',
      block: '块',
    },
    status: {
      active: '生效',
      archived: '已归档',
    },
    filter: {
      all: '全部',
      selected: '已选',
      active: '激活',
    },
    type: {
      system: '系统',
      custom: '自定义',
    },
    dataType: {
      label: '数据类型',
      all: '全部',
      real: '真实数据',
      synthesis: '合成数据',
      pretraining: '预训练数据',
    },
    placeholder: {
      enter: '请输入{{title}}',
      select: '请选择{{title}}',
      title: '请输入名称',
      description: '请输入描述',
      searchText: '请您输入...',
      selectDefault: '请选择...',
      copy: '点击复制',
      engine: '请选择引擎',
      capability: '请选择AI能力',
      status: '请选择状态',
      empty: '暂无数据',
    },
    rule: {
      enter: '请输入{{title}}!',
      select: '请选择{{title}}!',
      title: '请输入名称!',
      engine: '请选择引擎!',
    },
    empty: {
      loading: '加载中...',
      desc: '暂无',
    },
    permission: {
      uploadNoPermission: '没有上传权限!',
      noPermission: '没有权限!',
    },
    annotationTool: {
      cvat: 'CVAT',
      documentExtraction: '文档抽取',
    },
    msg: {
      copySuccess: '复制成功！',
      deleteSuccess: '删除成功！',
      deleteFailed: '删除失败！',
      downloadFailed: '下载失败！',
      uploadSuccess: '上传成功!',
      createSuccess: '创建成功！',
      updateSuccess: '更新成功！',
      delete: '确定要删除【{{title}}】吗?',
      addFailed: '添加失败!',
      starSuccess: '收藏成功！',
    },
    datasetSelect: {
      label: '选择数据集',
      default: '默认数据集',
    },
    engineSelect: {
      label: '选择引擎',
    },
    metricSelect: {
      label: '选择指标',
    },
    sort: {
      desc: '降序',
      asc: '升序',
      none: '不排序',
    },
    components: {
      datasetSelect: {
        label: '选择数据集',
        language: '语种',
        capability: 'AI能力',
        dataset: '数据集类型',
      },
    },
  },
};
