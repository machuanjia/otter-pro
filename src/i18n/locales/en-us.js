export default {
  common: {
    routes: {
      login: 'Login',
      logout: 'Logout',
      project: 'Projects',
      team: 'Teams',
      main: 'Main',
      engines: 'AI Engines',
      capabilities: 'AI Capabilities',
      basicInfo: 'Basic',
      datasetTags: 'Tags',
      annotationTemplates: 'Templates',
      defaultDatasets: 'Default Datasets',
      dashboard: 'Dashboard',
      data: 'Data',
      dataLake: 'Data Lakes',
      dataset: 'Datasets',
      dataTask: 'Annotation Tasks',
      dataSynthesis: 'Data Synthesis',
      annotation: 'Annotation',
      autoCheck: 'Auto Check',
      experiment: 'Experiments',
      trainingTask: 'Training Tasks',
      viewTrainingTask: 'View',
      model: 'Models',
      modelRepos: 'Model Repository',
      modelReposVersion: 'Repository Version',
      test: 'Testings',
      testingTask: 'Testing Tasks',
      trace: 'Traces',
      testingTaskAnalyze: 'Task Evalutation',
      testingDatasetAnalyze: 'Dataset Evalutation',
      testingDataAnalyze: 'Data Evalutation',
      badcase: 'Badcases',
      publish: 'Publish',
      percipience: 'Percipience',
      settingCenter: 'Settings',
      aiEngine: 'AI Engines',
      aiCapability: 'AI Capabilities',
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
      page: 'Page {{page}}',
      title: 'Title',
      status: 'Status',
      description: 'Description',
      createTime: 'Create Time',
      creator: 'Creator',
      updateTime: 'Update Time',
      updater: 'Updated By',
      actions: 'Actions',
      role: 'Role',
      members: 'Members',
      teams: 'Team',
      type: 'Type',
      size: 'Size',
      startTime: 'Start Time',
      endTime: 'End Time',
      runTime: 'Run Time',
      capability: 'AI Capability',
      engine: 'AI Engine',
      model: 'Model',
      dataset: 'Dataset',
      summary: 'Summary',
      dataTitle: 'Data Title',
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
      label: 'Data Types',
      all: 'All',
      real: 'Real Data',
      synthesis: 'Synthetic Data',
      pretraining: 'Pretraining Data',
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
    upload: {
      label: 'Upload',
      img: 'Image',
      zip: 'Zip',
      uploading: 'Uploading',
      success: 'Successfully uploaded.',
      failed: 'Failed to upload.',
      tip: 'The file cannot exceed 10M.',
      zipTip: 'The file cannot exceed 500M.',
      uploadHasNoPermission: 'Failed to obtain upload permission.',
      uploaded: '{{uploaded}} of {{total}} have been uploaded successfully',
      uploadFailed:
        'Some files failed to upload. {{uploaded}} of {{total}} have been uploaded successfully.',
    },
    components: {
      datasetSelect: {
        label: 'Select Datasets',
        language: 'Language',
        capability: 'AI Capability',
        dataset: 'Dataset Type',
      },
    },
  },
};
