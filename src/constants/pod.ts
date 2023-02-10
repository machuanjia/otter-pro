import i18n from '../i18n';
import { COLORS } from './colors';

export const POD_STATES = {
  POD_STATE_UNKNOWN: {
    label: i18n.t('common.podState.unknown'),
    value: 'POD_STATE_UNKNOWN',
    color: COLORS.GRAY[500],
  },
  POD_STATE_PENDING: {
    label: i18n.t('common.podState.pending'),
    value: 'POD_STATE_PENDING',
    color: COLORS.BLUE[400],
  },
  POD_STATE_RUNNING: {
    label: i18n.t('common.podState.running'),
    value: 'POD_STATE_RUNNING',
    color: COLORS.YELLOW[500],
  },
  POD_STATE_SUCCEEDED: {
    label: i18n.t('common.podState.succeeded'),
    value: 'POD_STATE_SUCCEEDED',
    color: COLORS.GREEN[500],
  },
  POD_STATE_SKIPPED: {
    label: i18n.t('common.podState.skipped'),
    value: 'POD_STATE_SKIPPED',
    color: COLORS.GRAY[500],
  },
  POD_STATE_FAILED: {
    label: i18n.t('common.podState.failed'),
    value: 'POD_STATE_FAILED',
    color: COLORS.RED[500],
  },
  POD_STATE_ERROR: {
    label: i18n.t('common.podState.error'),
    value: 'POD_STATE_ERROR',
    color: COLORS.RED[500],
  },
  POD_STATE_OMITTED: {
    label: i18n.t('common.podState.omitted'),
    value: 'POD_STATE_OMITTED',
    color: COLORS.GRAY[500],
  },
};
