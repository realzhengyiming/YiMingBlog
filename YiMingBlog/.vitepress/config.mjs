import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', {rel: 'icon', href: '5-kirby-su-topo.jpeg'}],
    ],
    title: "My Awesome Project",
    description: "A VitePress Site",
    srcDir: 'docs',
    // base:"./",
    assetsDir: 'static',

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
        ]
    }
})
