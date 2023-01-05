import i18n from '../i18n';

export const DATASET_TYPES = {
  REAL: {
    label: i18n.t('common.dataType.real'),
    value: 'DATASET_TYPE_REAL',
    enumValue: 1,
  },
  SYNTHETIC: {
    label: i18n.t('common.dataType.synthesis'),
    value: 'DATASET_TYPE_SYNTHETIC',
    enumValue: 2,
  },
  PRETRAINED: {
    label: i18n.t('common.dataType.pretraining'),
    value: 'DATASET_TYPE_PRETRAINED',
    enumValue: 3,
  },
};
