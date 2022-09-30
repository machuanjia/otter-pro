/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:03:22
 * @LastEditTime: 2022-02-15 10:57:46
 * @FilePath: /pro/src/i18n/index.ts
 * @Description:
 */
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next, useTranslation} from 'react-i18next'

// @ts-ignore
import enUsTrans from './locales/en-us.js'
// @ts-ignore
import zhCnTrans from './locales/zh-cn.js'

export const LOCAL_TYPES = {
  zhCN: 'zh-CN',
  enUS: 'en-US'
}

const ANTD_LOCAL_MAP = {
  [LOCAL_TYPES.enUS]: enUS,
  [LOCAL_TYPES.zhCN]: zhCN,
}

export const getLanguage = () => {
  const i18nextLng = localStorage.getItem('i18nextLng')
  if (i18nextLng) {
    return i18nextLng
  }
  return 'LOCAL_TYPES.zhCN'
}

export const getAntdLocal = () => {
  return ANTD_LOCAL_MAP[getLanguage()]
}

export const changeLocal = (local = LOCAL_TYPES.zhCN) => {
  i18n.changeLanguage(local);
}

export const ut = useTranslation

export const setI18nResources = (props: {
  key: string
  source: Object
}[]) => {
  props.map(({ key, source }) => {
    i18n.addResourceBundle(key, 'translation', source, true, true);
  })
}

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next) //init i18next
  .init({
    //引入资源文件
    resources: {
      [LOCAL_TYPES.enUS]: {
        translation: enUsTrans,
      },
      [LOCAL_TYPES.zhCN]: {
        translation: zhCnTrans,
      },
    },
    fallbackLng: LOCAL_TYPES.zhCN,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
