/*
 * @Author: D.Y.M
 * @Date: 2021-12-25 10:37:46
 * @LastEditTime: 2021-12-25 16:16:00
 * @FilePath: /otter-pro/.umirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';
import { resolve } from 'path'

// const modifyVars = resolve(__dirname, './src/styles/variables.less')

export default defineConfig({
  title: 'otter-pro',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    })
  ],

  // lessLoader: {
  //   modifyVars: {
  //     hack: `true; @import "${modifyVars}";`,
  //   },
  // },

  extraBabelPlugins: [
   [
      'import',
      {
        libraryName: 'otter-pro',
        libraryDirectory: 'src/components',
        style: true
      },
    ],
  ]
});
