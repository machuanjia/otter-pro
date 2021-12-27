/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 11:49:57
 * @LastEditTime: 2021-12-25 16:30:39
 * @FilePath: /otter-pro/tailwind.config.js
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
        blueGray: colors.blueGray,
        green: colors.green,
        yellow: colors.yellow,
        orange: colors.orange,
        red: colors.red,
      },
    },
    backgroundColor: {
      white: colors.white,
      main: colors.gray[200],
      input: colors.gray[300],
      disable: colors.gray[400],
      primary: colors.blue[600],
      hover: colors.gray[200],
      active: colors.gray[200],
    },
    textColor: {
      white: colors.white,
      main: colors.gray[800],
      primary: colors.blue[600],
      secondary: colors.gray[600],
      placeholder: colors.gray[600],
      icon: colors.gray[600],
      danger: colors.red[600],
    },
    borderColor: {
      divider: colors.gray[200],
      primary: colors.blue[600],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')
  ],
};
