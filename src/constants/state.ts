import { COLORS } from "./colors";


export const TASK_STATE = {
  // 未知
  TASK_STATE_UNSPECIFIED: {
    key: 'TASK_STATE_UNSPECIFIED',
    color: COLORS.GRAY[600],
    label: '未知',
  },
  // 已创建
  TASK_STATE_CREATED: {
    key: 'TASK_STATE_CREATED',
    color: COLORS.BLUE[600],
    label: '已创建',
  },
  // 等待中
  TASK_STATE_WAITING: {
    key: 'TASK_STATE_WAITING',
    color: COLORS.ORANGE[600],
    label: '等待中',
  },
  // 运行中
  TASK_STATE_RUNNING: {
    key: 'TASK_STATE_RUNNING',
    color: COLORS.ORANGE[600],
    label: '运行中',
  },
  // 已完成
  TASK_STATE_SUCCESS: {
    key: 'TASK_STATE_SUCCESS',
    color: COLORS.GREEN[600],
    label: '已完成',
  },
  // 已失败
  TASK_STATE_FAILED: {
    key: 'TASK_STATE_FAILED',
    color: COLORS.RED[600],
    label: '已失败',
  },
  // 已停止
  TASK_STATE_STOPPED: {
    key: 'TASK_STATE_STOPPED',
    color: COLORS.GREEN[600],
    label: '已停止',
  },
  // 超时取消
  TASK_STATE_TIMEOUT_CANCELED: {
    key: 'TASK_STATE_STOPPED',
    color: COLORS.RED[600],
    label: '超时取消',
  },
  // 已删除
  TASK_STATE_DELETED: {
    key: 'TASK_STATE_DELETED',
    color: COLORS.RED[600],
    label: '已删除',
  },
}
