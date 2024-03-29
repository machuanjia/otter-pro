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
      flow: '流程图',
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
      update: '更新',
      edit: '编辑',
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
      preview: '预览',
      share: '分享',
      fullScreen: '全屏',
    },
    list: {
      label: '{{name}}列表',
      total: '共{{total}}条',
      page: '第{{page}}页',
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
      language: '语言',
      totalNumber: '总数量',
      field: '字段',
      expect: '标注值',
      actual: '识别值',
      idx: '实体序号',
    },
    languageType: {
      'zh-CN': '中文',
      'en-US': 'English',
    },
    datasetType: {
      default: '默认',
      custom: '自定义',
    },
    detail: {
      log: '日志',
      webShell: '命令行',
      debugger: '调试',
      stopDebugger: '停止调试',
    },
    unit: {
      hour: '小时',
      minute: '分钟',
      second: '秒',
      yuanEachHour: '元/小时',
      block: '块',
      core: '核',
    },
    status: {
      active: '生效',
      archived: '已归档',
    },
    state: {
      unspecified: '未知',
      created: '已创建',
      running: '运行中',
      succeed: '已完成',
      failed: '已失败',
      stopped: '已停止',
      deleted: '已删除',
      waiting: '等待中',
      overtime: '超时取消',
      unstart: '未开始',
      annotating: '标注中',
      annotated: '标注完成',
      deferred: '已延期',
      autoaccepting: '自动验收中',
      autoaccepted: '自动验收通过',
      autoacceptefailed: '自动验收不通过',
      submited: '已提交',
      tobeaccept: '待验收',
      accepting: '验收中',
      autochecking: '校对中',
      reannotating: '重新标注中',
    },
    podState: {
      unknown: '未知',
      pending: '等待',
      running: '运行中',
      succeeded: '成功',
      skipped: '跳过',
      failed: '失败',
      error: '错误',
      omitted: '省略',
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
      label: '无',
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
      stop: '确定要停止【{{title}}】吗?',
      stopSuccess: '停止成功！',
      addFailed: '添加失败!',
      addSuccess: '添加成功!',
      starSuccess: '收藏成功！',
    },
    datasetSelect: {
      label: '选择数据集',
      default: '默认数据集',
      trainingDataCount: '训练数据',
      testingDataCount: '测试数据',
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
    upload: {
      label: '上传',
      img: '图片',
      zip: '压缩包',
      uploading: '上传中',
      success: '上传成功!',
      failed: '上传失败!',
      tip: '文件不能超过10M',
      zipTip: '文件不能大于500M',
      uploadHasNoPermission: '上传权限获取失败!',
      uploaded: '已成功上传{{uploaded}}个，共{{total}}个',
      uploadFailed: '部分文件上传失败，{{uploaded}}个文件上成功，共{{total}}个。',
    },
    components: {
      datasetSelect: {
        label: '选择数据集',
        language: '语种',
        capability: 'AI能力',
        dataset: '数据集类型',
      },
      sheet: {
        copyOriginalText: '复制原始数据文案',
        copyFormatText: '复制格式化数据文案',
        downloadOriginalText: '下载原始数据文案',
        downloadFormatText: '下载格式化数据文案',
      },
    },
  },
};
