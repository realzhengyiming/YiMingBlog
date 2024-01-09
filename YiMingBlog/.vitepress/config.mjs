import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', {rel: 'icon', href: '/static/yiminglogo2.png'}],
    ],
    title: "My Awesome Project",
    description: "A VitePress Site",
    srcDir: 'public', // building的时候src? 直接设置跟目录就可以全部都读取到了
    ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链

    // 输出相关的，这两个配置
    assetsDir: 'static', //输出的文件夹,build后的
    outDir: '../dist',
    // cacheDir: "../cache",
  cache: false, // 禁用缓存机制

    plugins: [
        '@vuepress/plugin-active-header-links'
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'AI', link: '/Ai/Ai'},
            {text: '其他', link: '/其他/其他'},
            {text: '后端', link: '/后端/后端'},
            {text: 'example', link: '/markdown-examples'},
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: '测试文章', link: '/如何搭建obsidian-vitepress-github的协同的笔记博客系统'}
                ]
            },
            {
                text: 'AI',
                items: [
                    {text: '大语言模型的微调', link: '/Ai/大语言模型的微调'},
                    {text: '这个是深度学习相关的.md', link: '/Ai/这个是深度学习相关的'},
                ]
            },


        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/realzhengyiming'}
        ],
    }
})
