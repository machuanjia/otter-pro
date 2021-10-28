/*
 * @Author: D.Y.M
 * @Date: 2021-10-08 19:46:32
 * @LastEditTime: 2021-10-27 11:13:31
 * @FilePath: /doc-test/.umirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'otter-pro',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
});
