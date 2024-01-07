import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', {rel: 'icon', href: '/static/这个是深度学习相关的-2024-01-07.MQeu-PS0.png'}],
    ],
    title: "My Awesome Project",
    description: "A VitePress Site",
    srcDir: 'public', // building的时候src? 直接设置跟目录就可以全部都读取到了
    ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链

    // 输出相关的，这两个配置
    assetsDir: 'static', //输出的文件夹,build后的
    outDir: '../dist',
    cacheDir: "../cache",

    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: '测试文章', link: '/如何搭建obsidian-vitepress-github的协同的笔记博客系统'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/realzhengyiming'}
        ],
    }
})
