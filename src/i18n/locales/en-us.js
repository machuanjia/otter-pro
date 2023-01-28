export default {
  common: {
    routes: {
      login: 'Login',
      logout: 'Logout',
      project: 'Projects',
      team: 'Teams',
      main: 'Main',
      engines: 'Engines',
      capabilities: 'AI capabilities',
      basicInfo: 'Basic',
      datasetTags: 'Tags',
      annotationTemplates: 'Templates',
      defaultDatasets: 'Default datasets',
      dashboard: 'Dashboard',
      data: 'Datas',
      dataLake: 'Data lakes',
      dataset: 'Datasets',
      dataTask: 'Annotation tasks',
      dataSynthesis: 'Data synthesis',
      annotation: 'Annotation',
      autoCheck: 'Auto check',
      experiment: 'Experiment',
      trainingTask: 'Training tasks',
      viewTrainingTask: 'View',
      model: 'Model',
      modelRepos: 'Model repository',
      modelReposVersion: 'Repository version',
      test: 'Test',
      testingTask: 'Test tasks',
      trace: 'Traces',
      testingTaskAnalyze: 'Test task effects',
      testingDatasetAnalyze: 'Dataset effects',
      testingDataAnalyze: 'Data effects',
      badcase: 'Badcases',
      publish: 'Publish',
      percipience: 'Percipience',
      settingCenter: 'Settings',
      aiEngine: 'AI engines',
      aiCapability: 'AI capacities',
    },
    actions: {
      create: 'Create',
      update: 'Update',
      delete: 'Delete',
      cancel: 'Cancel',
      ok: 'OK',
      view: 'View',
      more: 'More',
      export: 'Export',
      import: 'Import',
      add: 'Add',
      superSearch: 'Search',
      reset: 'Reset',
      rename: 'Rename',
      download: 'Download',
      uploadFile: 'Upload file',
      close: 'Close',
      setting: 'Setting',
      detail: 'Detail',
      stop: 'Stop',
      upload: 'Upload',
      downloadExampleFile: 'Download example file',
      run: 'Run',
      start: 'Start',
      copy: 'Copy',
      retry: 'Retry',
      submit: 'Submit',
      uploadImg: 'Upload image',
      rerun: 'Rerun',
      annotate: 'Annotate',
      move: 'Move',
      help: 'Help',
      backToBottom: 'Back to bottom',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      error: 'Error',
      reject: 'Reject',
      save: 'Save',
      pass: 'Pass',
      nextPage: 'Next',
      select: 'Select',
      archive: 'Archive',
      unarchive: 'Unarchive',
      star: 'Star',
    },
    list: {
      label: '{{name}}',
      total: 'Total {{total}}',
      title: 'Title',
      status: 'Status',
      description: 'Description',
      createTime: 'Create time',
      creator: 'Creator',
      updateTime: 'Update time',
      updater: 'Updated by',
      actions: 'Actions',
      role: 'Role',
      members: 'Members',
      teams: 'Team',
      type: 'Type',
      size: 'Size',
      startTime: 'Start time',
      endTime: 'End time',
      runTime: 'Run time',
      capability: 'Capability',
      engine: 'Engine',
      model: 'Model',
      dataset: 'Dataset',
      summary: 'Summary',
      dataTitle: 'Data title',
      time: 'Time',
      version: 'Version',
      count: 'Count',
      totalCount: 'Total',
      group: 'Group',
    },
    datasetType: {
      default: 'Default',
      custom: 'Custom',
    },
    detail: {
      log: 'Logs',
    },
    unit: {
      hour: 'Hours', //HH
      minute: 'Minutes', //mm
      second: 'Seconds', //ss
      yuanEachHour: '¥/H',
      block: 'Block',
    },
    status: {
      active: 'Active',
      archived: 'Archived',
    },
    state: {
      unspecified: 'Unspecified',
      created: 'Created',
      running: 'Running',
      succeed: 'Succeed',
      failed: 'Failed',
      stopped: 'Stopped',
      deleted: 'Deleted',
      waiting: 'Waiting',
    },
    filter: {
      all: 'All',
      selected: 'Selected',
      active: 'Active',
    },
    type: {
      system: 'System',
      custom: 'Custom',
    },
    dataType: {
      label: 'Data types',
      all: 'All',
      real: 'Real',
      synthesis: 'Synthesise',
      pretraining: 'Pretraining',
    },
    placeholder: {
      enter: 'Please enter {{title}}.',
      select: 'Please select {{title}}.',
      title: 'Please enter title',
      description: 'Please enter description',
      searchText: 'Please enter ...',
      selectDefault: 'Please select ...',
      copy: 'Copy',
      engine: 'Please select engine',
      capability: 'Please select capability',
      empty: 'Empty.',
    },
    rule: {
      enter: 'Please enter {{title}}.',
      select: 'Please select {{title}}.',
      title: 'Please enter title.',
      engine: 'Please select engine.',
    },
    empty: {
      loading: 'Loading...',
      desc: 'No data',
    },
    permission: {
      uploadNoPermission: 'You do not have permission to upload.',
      noPermission: 'No permission.',
    },
    annotationTool: {
      cvat: 'CVAT',
      documentExtraction: 'Document extraction',
    },
    msg: {
      copySuccess: 'Successfully copied.',
      deleteSuccess: 'Successfully deleted.',
      deleteFailed: 'Failed to delete.',
      downloadFailed: 'Failed to download.',
      uploadSuccess: 'Successfully uploaded.',
      createSuccess: 'Successfully created.',
      updateSuccess: 'Successfully updated.',
      delete: 'Are you sure delete "{{title}}"?',
      addFailed: 'Failed to added.',
      starSuccess: 'Successfully stared.',
    },
    datasetSelect: {
      label: 'Select datasets',
      default: 'Default datasets',
    },
    engineSelect: {
      label: 'Select engines',
    },
    metricSelect: {
      label: 'Select metrics',
    },
    sort: {
      desc: 'Desc',
      asc: 'Asc',
      none: 'None',
    },
    components: {
      datasetSelect: {
        label: 'Select datasets',
        language: 'Language',
        capability: 'AI capability',
        dataset: 'Dataset type',
      },
    },
  },
};
