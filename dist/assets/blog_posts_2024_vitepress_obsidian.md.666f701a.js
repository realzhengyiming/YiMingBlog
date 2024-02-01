import{_ as s,c as a,o as n,V as e}from"./chunks/framework.41330901.js";const o="/assets/vitepress_obsidian_combine_struct.bdc9316e.png",t="/assets/vitepress_obsidian-plus-command.5c03c3a4.png",A=JSON.parse('{"title":"vitepress_obsidian","description":"vitepress 和obsidian结合,  vitepress combine obsidian note, is good","frontmatter":{"title":"vitepress_obsidian","datetime":"2024-02-01T00:00:00.000Z","time":968,"description":"vitepress 和obsidian结合,  vitepress combine obsidian note, is good","navbar":true,"sidebar":false,"footer":true,"date":"2024-01-14T00:00:00.000Z","author":"Yi Ming","category":"Document","next":false,"tags":["vitepress","obsidian"],"blog":"post","aside":"left","prev":false},"headers":[],"relativePath":"blog/posts/2024/vitepress_obsidian.md"}'),l={name:"blog/posts/2024/vitepress_obsidian.md"},i=e('<h1 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h1><p>在此之前很长时间我都折腾过好几个博客 🥲, 有django + mdui 自建博客; 有wordpress 框架博客...但是我每次回头都会发现, 一年到头没写几篇内容. 复盘一下, 总得来说来来去去都是一下这几个问题纠缠着:</p><ol><li>写作不方便: 可视化富文本编辑器实在用得难受</li><li>发布不方便: 只能用网页进行编辑的话, 流程繁琐</li><li>站点访问卡顿:(本人服务器配置是最低档)</li><li>习惯难以养成: 自己虽然说有写笔记的习惯, 但是并没有打开网页写文章的习惯, 加上(1,2,3的难受用户体验, 进一步在开头的热情结束后, 打消了自己写东西的热情)</li></ol><hr><p>刚好, 今年2024年开头, 我发现了一个不错的笔记应用obsidian, 初步体验下来, 我直接放弃了notion (使用notion的时候遇到了上面列出来的问题). 并且机缘巧合查阅资料之时, 也让我看到了vitepress 博客, 于是两者一拍即合, 有了新文章和这个新博客.</p><h1 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h1><p>组合的流程结构图如下:<br><img src="'+o+'" alt=""></p><h2 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h2><p>可以基于markdown 生成静态博客页面的简约框架, 我很喜欢他简洁朴素的主题风格. 可以清晰简洁舒适的展示markdown文章内容, 部署模式,可以build成dist静态资源. 方便部署在轻量级的服务器上.</p><h2 id="obsidian" tabindex="-1">Obsidian <a class="header-anchor" href="#obsidian" aria-label="Permalink to &quot;Obsidian&quot;">​</a></h2><p>markdown的笔记应用, 很好用.然后他还支持很多插件. 此处通过电脑客户端上安装obsidian <code>shell commands</code>插件, 配置好一键执行的命令, 使用起来就可以很方便了, 我配置的命令如下:<br><img src="'+t+`" alt=""> 命令解释: 触发本地同文件夹下的vitepress对markdown进行编译, 然后提交到github上, 再开启<code>/</code>斜杠触发重新构建和push到github, 一键操作了, 非常的方便!</p><h2 id="github" tabindex="-1">github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;github&quot;">​</a></h2><p>github的仓库既可以作为云备份用, 也可以作为触发器, 利用其上的webhook功能, 再检测到push命令的时候, 给<code>博客服务器</code>发送webhook 信息请求. 然后触发<code>博客服务器</code>上进行拉取和更新操作.<br> 服务器上的简单webhook重启接收端, 我直接编写了一个基于flask简单服务, 功能很简单,就是提来git最新代码(博文静态文件), 然后复制到指定位置, 让nginx重载,完成更新.</p><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p>作为一个高性能静态页面服务器, 用起来也是非常的简单和容易, 特别对于我这种,博客服务器配置非常低的使用者来说, 以前的wordpress/ django, 都需要安装数据库, 或者占用很多资源, 安装很多环境依赖, 有了nginx + vitepress 就不需要考虑这么多了. 直接让他处理vitepress build后的dist博客静态资源, 简直舒服. nginx配置也很简单, 安装好后, nginx 即可启动.</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {  </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">[yourdomain.com](https://yourdomain.com/ </span><span style="color:#C3E88D;">&quot;https://yourdomain.com&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 将此处换成你的域名或者公网 IP  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/var/www/blog/dist</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 将此处修改为你的博客静态页面存放的路径  </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;">index.html</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设定默认访问的网页文件  </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ </span><span style="color:#F78C6C;">=404</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 按请求的URI来寻找文件，找不到则返回404  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>更新推送也只需要<code>nginx -s reload</code>就可以完成.</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>obsidian 写笔记/博文 --&gt; vitepress build --&gt; github --&gt; nginx.<br> 详细请查看仓库代码. 体验非常简单和舒服! 这下没有理由不输出文章了🤡hhh...</p><blockquote><p><a href="https://github.com/realzhengyiming/YiMingBlog" target="_blank" rel="noreferrer">realzhengyiming/YiMingBlog: a... new blog again</a></p></blockquote>`,20),p=[i];function r(c,d,h,b,C,y){return n(),a("div",null,p)}const u=s(l,[["render",r]]);export{A as __pageData,u as default};
