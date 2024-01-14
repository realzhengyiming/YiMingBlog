---
layout: doc
title: vitepress & obsidian 结合
tags:
  - "#博文"
datetime: 2024-01-14
time: 15:23
description: 
navbar: true
sidebar: true
footer: true
---

对我而言, 博客站点的目的是记录和展示自己的生活, 以此来作为自己在自己的生活的时间尺度上留下过痕迹的证明.  

---
# 引言

在此之前很长时间我都折腾过好几个博客 🥲, 有django + mdui 自建博客; 有wordpress 框架博客...但是我每次回头都会发现, 一年到头没写几篇内容. 
复盘一下, 总得来说来来去去都是一下这几个问题纠缠着: 

1. 写作不方便: 可视化富文本编辑器实在用得难受
2. 发布不方便: 只能用网页进行编辑的话, 流程繁琐
3. 站点访问卡顿:(本人服务器配置是最低档)
4. 习惯难以养成: 自己虽然说有写笔记的习惯, 但是并没有打开网页写文章的习惯, 加上(1,2,3的难受用户体验, 进一步在开头的热情结束后, 打消了自己写东西的热情)  

刚好, 今年2024年开头, 我发现了一个不错的笔记应用obsidian, 初步体验下来, 我直接放弃了notion (使用notion的时候遇到了上面列出来的问题).  并且机缘巧合查阅资料之时, 也让我看到了vitepress 博客, 于是两者一拍即合, 有了新文章和这个新博客.

---

# 配合思路 

vitepress: 可以基于markdown 生成静态博客页面的简约框架, 我很喜欢他朴素的主题风格.
obsidian: 异常好用的双链markdown笔记应用,支持非常多的插件, 觉得不好用, 还可以自己写: ). 
nginx: 高性能静态页面服务器, 当然就是用来部署vitepress build 出来的dist html文件了

![[obsidian-vitepress结构.svg]]
解释: 
obsidian: 这个就是默认写文章的地方, 直接通过obsidian 写markdown文章 

github: obsidian安装git插件, 可以方便的push文章到github仓库中. 配置好webhook, 文章push到仓库的时候, 触发webhook. 

vitepress: 服务器上安装好vitepress, 和接受hook响应的服务(此处我直接用flask写了一个简单的服务器用来响应), 响应后, 触发 vitepress build 命令 

python script: 这个属于个人需求, 用来处理obsidian图片/文章链接格式转化回html支持的格式, 还有就是以支持obsidian 把静态图片文件统一放置一个文件夹的引用方式. (vitepress 渲染默认使用相对路径渲染, 只能找到markdown 统计目录下的图片, 放在其他目录下就回build报错, 于是暂时这样处理, 应该也可以通过修改vitepress源码处理, 此处我先用最快的方式处理了)

nginx deploy: 使用此种方式也是因为默认的vitepress preview 有bug, 并不是原生的读取html页面,(默认会有构建缓存?) 总之不够纯粹的静态html, 导致前面python script 重新渲染替换了的html 不生效.(总之目前这种方式结合起来是解决了问题😜)

思路主题其实就是 **obsidian写** -> **github触发自动发布** -> **vitepress分享展示**. 其他的节点都是为了解决遇到的坑而增加的一些措施
# 动手吧! 
## 安装 
省略vitepress的[环境配置和安装过程]([快速开始 | VitePress](https://vitepress.dev/zh/guide/getting-started)),...
省略obsidian的[安装和配置]([Obsidian - Sharpen your thinking](https://obsidian.md/))
省略安装nginx的过程...
...  
## obsidian 文件结构 

目前我的obsidian笔记仓库的文件夹结构如下:  
![[vitepress & obsidian 结合-obsidian文件夹结构-2024-01-14.png]]
首先, `public`目录,  发布在vitepress 的文章所在目录. 
其次, `personal`目录, 这个是我自定义的个人笔记的目录, 笔记软件嘛, 最基础的功能依然是服务好我自己的知识整理. 
最后, `git`仓库下会配置过滤掉`personal`的 `.gitignore`, 这样就可以平衡好自己个人知识梳理的习惯, 和发布内容的便利了.


## 配置github仓库 和 vitepress
之后便是配置本地仓库,  创建并且配置远程仓库, 开启 webhook~

vitepress 按照官方教程配置好了就可以, 我这边的配置文件是这样的, 具体可以查看结尾的仓库地址查看配置, 介于我暂时对这个框架没有特别熟悉, 对前端的框架结构体系了解得不算太多, 就不具体展开vitepress了, 只打算把这个做成简易的工具进行简单的展示使用.

## 部署 
服务器上的简单webhook重启接收端, 我直接编写了一个基于flask简单服务. 

最后一步就是启动接收webhook请求的服务, 在github 接收到push的时候发送webhook请求, 触发服务器重新build和重启nginx服务即可.




>[realzhengyiming/YiMingBlog: a... new blog again ,:) (github.com)](https://github.com/realzhengyiming/YiMingBlog)