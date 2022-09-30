/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 11:49:57
 * @LastEditTime: 2022-01-11 17:36:41
 * @FilePath: /mlplatform/web/pro/tailwind.config.js
 * @Description:
 */
const colors = require('./colors');
module.exports = {
  content: ['./src/components/**/*.tsx'],
  darkMode: 'class', //false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        blue: colors.blue,
        green: colors.green,
        yellow: colors.yellow,
        orange: colors.orange,
        red: colors.red,
      },
    },
    backgroundColor: {
      white: colors.white,
      primary: colors.blue[600],
      primaryLightHover: colors.blue[200],
      primaryLightDefault: colors.blue[100],
      strong: colors.gray[400],
      medium: colors.gray[300],
      element: colors.gray[200],
      main: colors.gray[100],
    },
    textColor: {
      white: colors.white,
      primary: colors.blue[600],
      danger: colors.red[600],
      warning: colors.red[600],
      success: colors.green[600],
      serious: colors.orange[600],
      strong: colors.gray[800],
      medium: colors.gray[700],
      weak: colors.gray[600],
      holder: colors.gray[500],
      disable: colors.gray[400],
    },
    borderColor: {
      primary: colors.blue[600],
      strong: colors.gray[400],
      medium: colors.gray[300],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')
  ],
};
