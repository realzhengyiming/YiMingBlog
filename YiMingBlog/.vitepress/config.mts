import { defineConfig } from 'vitepress'

//侧边栏的路由表
import { ai } from './router/ai_sidebar.js'
import { data } from './router/data_sidebar.js'
const vitepressCustomSyntaxPlugin = require('./vitepress-custom-syntax-plugin.js');


// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/static/yiminglogo2.png' }],
  ],
  title: "YiMing's blog",
  description: "平衡生活，享受技术",
  srcDir: 'public/', // building的时候src? 直接设置跟目录就可以全部都读取到了
  ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链

  // 输出相关的，这两个配置
  assetsDir: 'static', //输出的文件夹,build后的
  outDir: '../dist',
  cacheDir: "./cache",

    markdown: {
    config(md) {
      md.use(vitepressCustomSyntaxPlugin)
    }
  }, // render的markdown

  themeConfig: {
    logo: '/static/yiminglogo2.png',
    siteTitle: "YiMing's Blog",
    search: {
      provider: 'local'
    },

    footer: {
      message: '2024 - future',
      copyright: 'say my name!',
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'AI', items: [
          { text: '机器学习', link: '/ML/dl/深度学习.md' },
          { text: '深度学习', link: '/ML/dl/机器学习.md' },
        ]
      },
      {
        text: '数据', items: [
          { text: '爬虫', link: '/DATA/web_spider/数据.md' },
        ]
      },
      { text: '其他', link: '/OTHER/其他' },
    ],
    sidebar: {
      '/machine_learning/machine_learning/': ai,
      '/machine_learning/deep_learning/': ai,
      '/data/web_spider': data,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhengyiming.com' }
    ]
  }
})
