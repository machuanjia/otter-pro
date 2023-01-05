import i18n from '../i18n';

export const DATASET_TYPES = {
  REAL: {
    label: i18n.t('common.dataType.real'),
    key: 'DATASET_TYPE_REAL',
  },
  SYNTHETIC: {
    label: i18n.t('common.dataType.synthesis'),
    key: 'DATASET_TYPE_SYNTHETIC',
  },
  PRETRAINED: {
    label: i18n.t('common.dataType.pretraining'),
    key: 'DATASET_TYPE_PRETRAINED',
  },
};
