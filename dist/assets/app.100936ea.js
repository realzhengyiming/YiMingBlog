import{A as Y,m as $,d as h,u as f,o as n,c as l,b as o,n as P,G as _,C as r,t as u,_ as C,y as x,I as g,E as V,a as B,F as k,R as T,S as F,U as W,D as y,h as K,Q as H,J as X,L as O,a5 as J,a6 as tt,q as et,k as st,a7 as at,a8 as ot,a9 as rt,aa as nt,ab as ct,ac as lt,ad as it,ae as dt,af as ut,ag as _t,ah as ht,ai as pt,M as mt}from"./chunks/framework.41330901.js";import{t as j}from"./chunks/theme.928137c4.js";const b=JSON.parse('[{"title":"主流llm大模型微调小结","author":"Yi Ming","url":"/blog/posts/2024/latest-llm-model-fine-tune.html","excerpt":"<h2 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h2>\\n<p>llm大模型目前比较火的两个垂直领域应用的技术路线: PEFT(参数有效微调)和RAG(检索增强生成). 目前这两个方向按实用性来说, 如果单看垂直领域知识库, 那确实RAG能以更低的成本和更快的速度应用起来.<br>\\n但是<strong>微调训练</strong>能为大语言模型增加新的功能, 比如翻译, 使用agent(agent工具调用微调), 所以它依然非常重要, 并且微调技术的增强和RAG是可以共同促进的.\\n下文就以简单的身份微调作为例子, 简单实践下llm微调.</p>\\n","tags":["深度学习"],"category":"Document","date":{"raw":"2024-02-25","time":1708862400000,"formatted":"February 25, 2024","since":"3 days ago"}},{"title":"Ollama本地推理&文本标题生成","author":"Yi Ming","url":"/blog/posts/2024/Ollama_Local_Inference&Summary_Generation_Capability.html","excerpt":"<h2 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h2>\\n<p>前段时间编写了“闪念胶囊”的ios快捷指令脚本,功能是方便我随时通过敲击手机快速记录自己的灵感, 然后写入到icloud的obsidian灵感笔记区中.这样灵感就可以手机和电脑都同步了.<br>\\n但是当时记录的灵感为了快速为主, 所以markdown文件的标题都是时间戳, 这样会带来一个问题, 那就是哪怕同步到了电脑上, 用电脑浏览的时候,未点开前也是一连串的时间序列, 不能方便的进行灵感的整理和归档,这不是我想要的效果.<br>\\n所以就需要一个<strong>自动生成标题</strong>的功能.</p>\\n","tags":["深度学习","自然语言处理","NLP","文章摘要生成"],"category":"Article","date":{"raw":"2024-02-17","time":1708171200000,"formatted":"February 17, 2024","since":"11 days ago"}},{"title":"以撒道具/饰品图像识别","author":"Yi Ming","url":"/blog/posts/2024/Isaac_image_recognition.html","excerpt":"<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p><img src=\\"./pic/自定义训练数据图像识别-2024-01-29.png\\" alt=\\"\\">\\n最近在玩《以撒的结合:忏悔》, ns版本. 游戏确实上头好玩, 内容很多. 但是游玩下来遇到一个纠结头疼的问题就是, 道具/ 装备 有时候捡起来后的效果, 还不如不捡. 装备/道具只会在捡起来的时候才能看到道具和状态是什么, 甚至, 有时候捡起来后描述也看不出这个道具到底能用来干嘛,  魂系叙事那一套......虽然也找到不错的<a href=\\"https://isaac.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5\\" target=\\"_blank\\" rel=\\"noreferrer\\">以撒的结合中文维基</a>, 但是, 站点只能文字搜索, 再加上其道具和饰品加起来总数量有900多个, 相当于ImageNet的种类了.\\n于是就想到, 干脆做一个<strong>以撒道具图像识别功能</strong> 好了, 优化体验: ) .</p>\\n","tags":["深度学习","图像识别","以撒的结合"],"category":"Tutorial","date":{"raw":"2024-01-29","time":1706529600000,"formatted":"January 29, 2024","since":"30 days ago"}},{"title":"LLM Agent 解读","author":"Yi Ming","url":"/blog/posts/2024/llm_agent.html","excerpt":"<h1 id=\\"什么是llm-agent\\" tabindex=\\"-1\\">什么是llm Agent <a class=\\"header-anchor\\" href=\\"#什么是llm-agent\\" aria-label=\\"Permalink to &quot;什么是llm Agent&quot;\\">&ZeroWidthSpace;</a></h1>\\n<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p><img src=\\"./pic/rag和agent的关系.excalidraw.png\\" alt=\\"\\">\\n代理(agent)的核心思想是使用语言模型来选择要<strong>执行</strong>的<strong>一系列操作</strong>。在链中，一系列操作是硬编码的（在代码中）。在代理中，语言模型用作<strong>推理引擎</strong>，以确定要执行哪些操作以及按何种顺序执行。</p>\\n<p>简单的理解就是, 让llm成为大脑, 然后通过agent技术,可以让llm判断和使用工具拓展他的功能, 以达到完成复杂任务的目的.</p>\\n","tags":["深度学习","Agent"],"category":"Article","date":{"raw":"2024-01-15","time":1705320000000,"formatted":"January 15, 2024","since":"about 1 month ago"}},{"title":"vitepress自定义vue组件","author":"Yi Ming","url":"/blog/posts/2024/vitepress_use_vue_animation.html","excerpt":"<BabyPulm /><h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p>前端的所见即所得, 还是很有意思的. 作为程序员, 没理由拒绝了解各种技术的机会. 这不, 这段时间看以撒的wiki看得多, 然后看到“梅糖宝宝”这个boss在网页上竟然有个动画角色, 点击还会跑, 还带交互和丰富的动画(和游戏中一样).这就让我产生了兴趣. 突然对前端控制动画的功能和原理有兴趣了.  特别是之前我还特别看过一下godot框架的动画.<br>\\n然后又想到, vitepress是支持自定义vue组件的, 然后动画的功能应该不需要和后端交互, 就想着干脆了解一下vue组件, 还有前端css动画. 看看能不能也给自己的vitepress博客也增加一个这样小动画组件, 感觉很有趣.</p>\\n","tags":["vitepress","vue","以撒的结合","前端技术"],"category":"Article","date":{"raw":"2024-01-15","time":1705320000000,"formatted":"January 15, 2024","since":"about 1 month ago"}},{"title":"vitepress和obsidian一键舒适写文/发文","author":"Yi Ming","url":"/blog/posts/2024/vitepress_obsidian.html","excerpt":"<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p>在此之前很长时间我都折腾过好几个博客 🥲, 有django + mdui 自建博客; 有wordpress 框架博客...但是我每次回头都会发现, 一年到头没写几篇内容.\\n复盘一下, 总得来说来来去去都是一下这几个问题纠缠着:</p>\\n<ol>\\n<li>写作不方便: 可视化富文本编辑器实在用得难受</li>\\n<li>发布不方便: 只能用网页进行编辑的话, 流程繁琐</li>\\n<li>站点访问卡顿:(本人服务器配置是最低档)</li>\\n<li>习惯难以养成: 自己虽然说有写笔记的习惯, 但是并没有打开网页写文章的习惯, 加上(1,2,3的难受用户体验, 进一步在开头的热情结束后, 打消了自己写东西的热情)</li>\\n</ol>\\n","tags":["vitepress","obsidian"],"category":"Article","date":{"raw":"2024-01-14","time":1705233600000,"formatted":"January 14, 2024","since":"about 1 month ago"}}]');function w(){const t=Y(),e=t.path;function a(){const d=b.findIndex(p=>p.url===t.path);return d===-1&&console.error(`blog post missing: ${t.path}`),d}const s=$(()=>b[a()]),c=$(()=>b[a()-1]),i=$(()=>b[a()+1]);return{posts:b,post:s,nextPost:c,prevPost:i,path:e}}const gt=h({__name:"VPBPostCategory",props:{category:null},setup(t){const{theme:e}=f();return(a,s)=>{var c;return n(),l("div",null,[(c=o(e).blog)!=null&&c.categoryIcons&&o(e).blog.categoryIcons[t.category.toLowerCase()]?(n(),l("div",{key:0,class:P([o(e).blog.categoryIcons[t.category.toLowerCase()],"mr-2"])},null,2)):_("",!0),r("span",null,u(t.category),1)])}}});const E=C(gt,[["__scopeId","data-v-262d93ff"]]),I=JSON.parse('[{"name":"Yi Ming","avatar":"https://avatars.githubusercontent.com/u/26131338?v=4","gravatar":null,"twitter":null,"url":"/blog/authors/yi-ming.html","excerpt":""}]');function R(){const t=Y(),e=t.path;function a(p){return I.find(m=>m.name===p)}function s(){const p=I.findIndex(m=>m.url===t.path);return p===-1&&console.error(`author page missing: ${t.path}`),p}const c=$(()=>I[s()]),i=$(()=>I[s()-1]),d=$(()=>I[s()+1]);return{authors:I,author:c,nextAuthor:i,prevAuthor:d,findByName:a,path:e}}const xt={key:0,class:"flex items-center space-x-4"},ft=["src","alt"],vt=["src","alt"],yt=["href"],bt={class:"font-medium dark:text-white"},kt={key:1},$t=h({__name:"VPBHomeAuthor",props:{name:null},setup(t){const e=t;f();const{findByName:a}=R(),s=$(()=>a(e.name));return(c,i)=>o(s)?(n(),l("div",xt,[o(s).avatar?(n(),l("img",{key:0,class:"h-7 w-7 rounded-full",src:o(s).avatar,alt:o(s).name},null,8,ft)):o(s).gravatar?(n(),l("img",{key:1,class:"h-7 w-7 rounded-full",src:`https://gravatar.com/avatar/${o(s).gravatar}`,alt:o(s).name},null,8,vt)):_("",!0),r("a",{href:o(x)(o(s).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[r("span",bt,u(o(s).name),1)],8,yt)])):(n(),l("div",kt))}}),Pt={class:"rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"},wt={class:"mb-5 flex items-center justify-between text-gray-500"},At={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Bt={class:"text-sm"},Ct={class:"mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Lt=["href"],It=["innerHTML"],Vt={class:"flex items-center justify-between"},St=["href"],Tt=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),Z=h({__name:"VPBHomePost",props:{post:null},setup(t){return(e,a)=>(n(),l("article",Pt,[r("div",wt,[r("span",At,[g(E,{category:t.post.category},{default:V(()=>[r("span",Bt,u(t.post.date.since),1)]),_:1},8,["category"])])]),r("h2",Ct,[r("a",{href:t.post.url},u(t.post.title),9,Lt)]),r("div",{class:"mb-5 font-light",innerHTML:t.post.excerpt},null,8,It),r("div",Vt,[g($t,{name:t.post.author},null,8,["name"]),r("a",{href:t.post.url,class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[B(" Read more "),Tt],8,St)])]))}}),Dt={class:"mx-auto max-w-screen-xl lg:px-6 lg:py-16"},Ht={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Mt={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},jt={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},qt={class:"grid gap-6 p-2 lg:grid-cols-2"},Et=h({__name:"VPBHome",setup(t){const{posts:e}=w(),{theme:a}=f();return(s,c)=>{var i,d;return n(),l("div",Dt,[r("div",Ht,[r("h2",Mt,u((i=o(a).blog)==null?void 0:i.title),1),r("p",jt,u((d=o(a).blog)==null?void 0:d.description),1)]),r("div",qt,[(n(!0),l(k,null,T(o(e),p=>(n(),l("div",{key:p.url},[g(Z,{post:p},null,8,["post"])]))),128))])])}}}),Rt=r("dt",{class:"sr-only"},"Published on",-1),Ot={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-300"},Yt=["datetime"],Ft=h({__name:"VPBPostDate",setup(t){const{post:e}=w();function a(){return new Date(e.value.date.time).toISOString()}return(s,c)=>(n(),l("dl",null,[Rt,r("dd",Ot,[r("time",{datetime:a()},u(o(e).date.formatted),9,Yt)])]))}}),G=t=>(F("data-v-f51709bc"),t=t(),W(),t),Wt=G(()=>r("dt",{class:"sr-only"},"Authors",-1)),Jt={class:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"},Zt={key:0,class:"flex items-center space-x-2"},Gt=["src"],Nt=["src"],zt={class:"whitespace-nowrap text-sm font-medium leading-5"},Ut=G(()=>r("dt",{class:"sr-only"},"Name",-1)),Qt={class:"text-gray-900 dark:text-white"},Kt=["href"],Xt={key:0,class:"sr-only"},te={key:1},ee=["href"],se=h({__name:"VPBPostAuthor",props:{insideDoc:{type:Boolean}},setup(t){const{findByName:e}=R(),{post:a}=w(),s=$(()=>e(a.value.author));return(c,i)=>(n(),l("dl",{class:P(["pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200/5",{"xs:show xl:hidden":t.insideDoc}])},[Wt,r("dd",null,[r("ul",Jt,[o(s)?(n(),l("li",Zt,[o(s).gravatar?(n(),l("img",{key:0,src:`https://gravatar.com/avatar/${o(s).gravatar}`,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Gt)):o(s).avatar?(n(),l("img",{key:1,src:o(s).avatar,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Nt)):_("",!0),r("dl",zt,[Ut,r("dd",Qt,[r("a",{href:o(x)(o(s).url),class:"text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"},u(o(s).name),9,Kt)]),o(s).twitter?(n(),l("dt",Xt,"Twitter")):_("",!0),o(s).twitter?(n(),l("dd",te,[r("a",{href:`https://twitter.com/${o(s).twitter}`,target:"_blank",rel:"noopener noreferrer"},u(o(s).twitter),9,ee)])):_("",!0)])])):_("",!0)])])],2))}});const N=C(se,[["__scopeId","data-v-f51709bc"]]),ae={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},oe=h({__name:"VPBPostDetails",props:{insideDoc:{type:Boolean}},setup(t){const{post:e}=w();return(a,s)=>(n(),l(k,null,[r("div",{class:P(["flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",{"xs:show xl:hidden":t.insideDoc}])},[r("span",ae,[g(E,{category:o(e).category},null,8,["category"])])],2),g(N,{"inside-doc":""})],64))}}),re={class:"space-y-1 pt-6 text-center xl:pb-10"},ne={class:"md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)] sm:text-4xl sm:leading-10 md:text-5xl"},ce=h({__name:"VPBLayoutPostTop",setup(t){const{post:e}=w();return(a,s)=>(n(),l(k,null,[r("header",re,[g(Ft),r("h1",ne,u(o(e).title),1)]),g(oe,{"inside-doc":""})],64))}}),z=t=>(F("data-v-2f3a5683"),t=t(),W(),t),le={key:0,class:"py-3"},ie=z(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Next Article ",-1)),de={class:"link"},ue=["href"],_e={key:1,class:"py-3"},he=z(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Previous Article ",-1)),pe={class:"link"},me=["href"],ge={class:"pt-3"},xe=["href"],fe=h({__name:"VPBPostLinks",props:{insideDoc:{type:Boolean}},setup(t){var d;const{site:e}=f(),{nextPost:a,prevPost:s}=w(),c=e.value.themeConfig,i=x(((d=c.blog)==null?void 0:d.path)??"/blog/");return(p,m)=>(n(),l("footer",{class:P(["mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5",{"xs:show lg:hidden":t.insideDoc}])},[o(a)?(n(),l("div",le,[ie,r("div",de,[r("a",{href:`${o(a).url}`},u(o(a).title),9,ue)])])):_("",!0),o(s)?(n(),l("div",_e,[he,r("div",pe,[r("a",{href:`${o(s).url}`},u(o(s).title),9,me)])])):_("",!0),r("div",ge,[r("a",{class:"link",href:o(x)(o(i))},"← Back to the blog",8,xe)])],2))}});const U=C(fe,[["__scopeId","data-v-2f3a5683"]]),ve=h({__name:"VPBLayoutPostBottom",setup(t){return(e,a)=>(n(),y(U,{"inside-doc":""}))}}),q=h({__name:"VPBTagIcon",props:{tag:null},setup(t){const{theme:e}=f();return(a,s)=>{var c;return(c=o(e).blog)!=null&&c.tagIcons&&o(e).blog.tagIcons[t.tag.toLowerCase()]?(n(),l("div",{key:0,class:P([o(e).blog.tagIcons[t.tag.toLowerCase()],"mr-2"])},null,2)):_("",!0)}}}),ye={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},be={class:"bg-primary-100 inline-flex rounded text-sm font-medium"},ke={class:"flex flex-wrap gap-2 py-5"},$e=["href"],Pe=h({__name:"VPBLayoutPostAsideTop",setup(t){var i;const{site:e}=f(),{post:a}=w(),s=e.value.themeConfig,c=x(((i=s.blog)==null?void 0:i.tagsPath)??"/blog/tags");return(d,p)=>(n(),l(k,null,[r("span",ye,[g(E,{category:o(a).category},null,8,["category"])]),r("span",be,[r("div",ke,[(n(!0),l(k,null,T(o(a).tags,m=>(n(),l("a",{key:m,class:"rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600",href:`${o(c)}?init=${m}`},[g(q,{tag:m},null,8,["tag"]),B(" "+u(m),1)],8,$e))),128))])]),g(N)],64))}}),we=h({__name:"VPBLayoutPostAsideBottom",setup(t){return(e,a)=>(n(),y(U))}}),Ae={class:"mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"},Be={class:"pt-3"},Ce=["href"],Le=h({__name:"VPBLayoutAuthorAsideBottom",setup(t){var c;const{site:e}=f(),a=e.value.themeConfig,s=x(((c=a.blog)==null?void 0:c.path)??"/blog/");return(i,d)=>(n(),l("footer",Ae,[r("div",Be,[r("a",{class:"link",href:o(x)(o(s))},"← Back to the blog",8,Ce)])]))}});const Ie=C(Le,[["__scopeId","data-v-0739fb2a"]]),Ve={class:"mb-1 flex items-center justify-between text-gray-500"},Se=["src"],Te=["src"],De={class:"ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},He={class:"mt-4 flex items-center justify-between text-gray-500"},Me=["href"],je=r("div",{class:"i-[bx/arrow-back] mr-2"},null,-1),qe=r("span",null,"Previous Author",-1),Ee=[je,qe],Re={key:1},Oe=["href"],Ye=r("span",null,"Next Author",-1),Fe=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),We=[Ye,Fe],Je=h({__name:"VPBLayoutAuthorTop",setup(t){const{author:e,prevAuthor:a,nextAuthor:s}=R();return(c,i)=>(n(),l("div",null,[r("div",Ve,[o(e).gravatar?(n(),l("img",{key:0,src:`https://gravatar.com/avatar/${o(e).gravatar}`,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Se)):o(e).avatar?(n(),l("img",{key:1,src:o(e).avatar,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Te)):_("",!0),r("span",De,u(o(e).name),1)]),r("div",He,[o(a)?(n(),l("a",{key:0,href:o(x)(o(a).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},Ee,8,Me)):_("",!0),o(a)?_("",!0):(n(),l("div",Re)),o(s)?(n(),l("a",{key:2,href:o(x)(o(s).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},We,8,Oe)):_("",!0)])]))}}),Ze=h({__name:"VPBLayout",setup(t){const{Layout:e}=j,{frontmatter:a}=f();return(s,c)=>(n(),y(o(e),null,{"doc-before":V(()=>[o(a).blog==="post"?(n(),y(ce,{key:0})):_("",!0),o(a).blog==="author"?(n(),y(Je,{key:1})):_("",!0)]),"doc-footer-before":V(()=>[o(a).blog==="post"?(n(),y(ve,{key:0})):_("",!0)]),"aside-top":V(()=>[o(a).blog==="post"?(n(),y(Pe,{key:0})):_("",!0)]),"aside-bottom":V(()=>[o(a).blog==="post"?(n(),y(we,{key:0})):_("",!0),o(a).blog==="author"?(n(),y(Ie,{key:1})):_("",!0)]),_:1}))}});function Ge(){const t=[];let e="0",a=-1;for(let s=0;s<b.length;s++){const c=b[s];if(c.date){const i=c.date.raw.split("-")[0];i===e?t[a].push(c):(a++,t[a]=[],t[a].push(c),e=i)}}return{postsByYear:t}}const Ne={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},ze={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Ue={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Qe={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},Ke={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Xe=["href"],ts={class:"cursor-pointer leading-6"},es=r("div",{class:"title-o"},null,-1),ss={class:"cursor-pointer font-sans leading-6"},as=h({__name:"VPBArchives",setup(t){const{postsByYear:e}=Ge(),{theme:a}=f();return(s,c)=>{var i,d;return n(),l("div",Ne,[r("div",ze,[r("h2",Ue,u((i=o(a).blog)==null?void 0:i.title)+" Archives ",1),r("p",Qe,u((d=o(a).blog)==null?void 0:d.description),1)]),(n(!0),l(k,null,T(o(e),(p,m)=>(n(),l("div",{key:m},[r("div",Ke,u(p[0].date.raw.split("-")[0]),1),(n(!0),l(k,null,T(p,(L,A)=>(n(),l("a",{key:A,href:o(x)(L.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6 hover:text-[color:var(--vp-c-brand-dark)] dark:hover:text-[color:var(--vp-c-brand-light)]"},[r("div",ts,[es,B(" "+u(L.title),1)]),r("div",ss,u(L.date.raw.slice(5)),1)],8,Xe))),128))]))),128))])}}});function os(){const t={};for(let e=0;e<b.length;e++){const a=b[e],s=a.tags;Array.isArray(s)&&s.forEach(c=>{t[c]||(t[c]=[]),t[c].push(a)})}return{postsByTag:t}}const rs={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},ns={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},cs={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},ls={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},is={class:"flex flex-wrap justify-center gap-2 p-4"},ds=["onClick"],us={key:0},_s={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},hs={class:"text-xs"},ps=["href"],ms={class:"cursor-pointer leading-6"},gs=r("div",{class:"title-o"},null,-1),xs={class:"cursor-pointer font-sans leading-6"},fs=h({__name:"VPBTags",setup(t){const{postsByTag:e}=os(),{theme:a}=f(),s=K("");function c(i){s.value=i}if(H){const d=new URLSearchParams(window.location.search).get("init");d&&c(d)}return(i,d)=>{const p=X("ClientOnly");return n(),y(p,null,{default:V(()=>{var m,L;return[r("div",rs,[r("div",ns,[r("h2",cs,u((m=o(a).blog)==null?void 0:m.title)+" Tags ",1),r("p",ls,u((L=o(a).blog)==null?void 0:L.description),1)]),r("div",is,[(n(!0),l(k,null,T(o(e),(A,v)=>(n(),l("div",{key:v,class:P({"cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600":s.value!==v,"rounded-full bg-[color:var(--vp-c-brand-light)] px-3 py-1 text-sm font-semibold text-gray-100 dark:bg-[color:var(--vp-c-brand-dark)]":s.value===v}),onClick:Es=>c(v)},[g(q,{tag:v},null,8,["tag"]),B(" "+u(v)+" ",1),r("span",{class:P({"ml-3 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]":s.value!==v,"ml-3 text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)]":s.value===v})},u(A.length),3)],10,ds))),128))]),s.value?(n(),l("div",us,[r("div",_s,[g(q,{tag:s.value},null,8,["tag"]),B(u(s.value)+" ",1),r("span",hs," ( "+u(o(e)[s.value].length)+" )",1)]),(n(!0),l(k,null,T(o(e)[s.value],(A,v)=>(n(),l("a",{key:v,href:o(x)(A.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6"},[r("div",ms,[gs,B(" "+u(A.title),1)]),r("div",xs,u(A.date.raw),1)],8,ps))),128))])):_("",!0)])]}),_:1})}}}),vs={},ys={class:"theme-style-div"};function bs(t,e){return n(),l("div",ys,"This is a test theme component")}const ks=C(vs,[["render",bs]]),M={...j,Layout:Ze,enhanceApp({app:t,router:e,siteData:a}){j.enhanceApp({app:t,router:e,siteData:a}),t.component("VPBHome",Et),t.component("VPBArchives",as),t.component("VPBTags",fs),t.component("VPBTestComponent",ks),t.component("VPBHomePost",Z)}};const $s={class:"w-full text-blue-200"},Ps=h({__name:"CustomBlogHeader",setup(t){return w(),(e,a)=>(n(),l("div",$s))}});let D=!1;const ws={data(){return{isIdle:!0,isClick:!1,babyPlumClass:"baby_plum_anm_Idle",mainDivStyles:{zIndex:1e3,position:"absolute",left:"0px",top:"0px",transform:"translate(100.484px, 200.938px)",transition:"transform 2s"},babyPlumStyles:{position:"absolute",left:"0px",top:"0px"},targetPosition:{x:100.484,y:200.938}}},methods:{mouseoverHandler(){this.babyPlumClass="baby_plum_anm_HelloLoop"},mouseoutHandler(){D?this.babyPlumClass="baby_plum_anm_Idle":setTimeout(()=>{this.babyPlumClass="baby_plum_anm_Idle",this.isIdle=!0,this.isClick=!1,D=!1},500)},changeStatus(){this.isIdle=!1,this.isClick=!0,this.babyPlumClass="baby_plum_anm_Attack1",D=!0,this.targetPosition.x=Math.random()*window.innerWidth-128/2,this.targetPosition.y=Math.random()*window.innerHeight-128/2,this.mainDivStyles.transform=`translate(${this.targetPosition.x}px, ${this.targetPosition.y}px)`,setTimeout(()=>{this.babyPlumClass="baby_plum_anm_Idle",this.isIdle=!0,this.isClick=!1,D=!1},1e3)}}};function As(t,e,a,s,c,i){return n(),l("div",{style:O(c.mainDivStyles),onClick:e[3]||(e[3]=(...d)=>i.changeStatus&&i.changeStatus(...d))},[r("div",{id:"baby_plum",class:P(["baby_plum_anim",c.babyPlumClass]),style:O(c.babyPlumStyles),onMouseover:e[0]||(e[0]=(...d)=>i.mouseoverHandler&&i.mouseoverHandler(...d)),onMouseout:e[1]||(e[1]=(...d)=>i.mouseoutHandler&&i.mouseoutHandler(...d)),onAnimationend:e[2]||(e[2]=(...d)=>t.animationEndHandler&&t.animationEndHandler(...d))},null,38)],4)}const Bs=C(ws,[["render",As],["__scopeId","data-v-896f29e3"]]);const Cs={name:"MusicPlayer",data(){return{audioSource:"/black.mp3",isPlaying:!1,lyrics:[],currentLyricIndex:0,displayedLyric:""}},mounted(){this.loadLyrics("/black.lrc")},methods:{togglePlayback(){const t=this.$refs.musicPlayer;t.paused?t.play().then(()=>{this.isPlaying=!0}).catch(e=>{console.log("播放被阻止:",e)}):(t.pause(),this.isPlaying=!1)},loadLyrics(t){fetch(t).then(e=>e.text()).then(e=>{this.lyrics=this.parseLyrics(e),setInterval(this.checkLyrics,100)}).catch(e=>console.error(e))},parseLyrics(t){const e=t.split(`
`),a=/\[(\d{2}):(\d{2})\.(\d{2,3})]/;return e.map(s=>{const c=a.exec(s);if(c)return{time:parseInt(c[1])*60*1e3+parseInt(c[2])*1e3+parseInt(c[3].padEnd(3,"0")),text:s.replace(a,"").trim()}}).filter(s=>s)},checkLyrics(){const t=this.$refs.musicPlayer;if(!t)return;const e=t.currentTime*1e3;let a=this.lyrics[this.currentLyricIndex];if(a&&e>=a.time){for(let s=this.currentLyricIndex+1;s<this.lyrics.length&&!(this.lyrics[s].time>e);s++)this.currentLyricIndex=s,a=this.lyrics[s];this.displayedLyric=a.text}}}},Ls={ref:"musicPlayer",loop:""},Is=["src"],Vs={class:"lyrics"};function Ss(t,e,a,s,c,i){return n(),l("div",null,[r("audio",Ls,[r("source",{src:c.audioSource,type:"audio/mp3"},null,8,Is),B(" Your browser does not support the audio element. ")],512),r("button",{onClick:e[0]||(e[0]=(...d)=>i.togglePlayback&&i.togglePlayback(...d)),class:"playback-button"},u(c.isPlaying?"🎵 暂停":"▶️ 播放"),1),r("div",Vs,u(c.displayedLyric),1)])}const Ts=C(Cs,[["render",Ss],["__scopeId","data-v-a1d40d06"]]),Ds={...M,Layout:()=>J(M.Layout,null,{}),enhanceApp({app:t,router:e,siteData:a}){M.enhanceApp({app:t,router:e,siteData:a}),t.component("CustomBlogHeader",Ps),t.component("AutoMusic",Ts),t.component("BabyPulm",Bs)}};function Q(t){if(t.extends){const e=Q(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const S=Q(Ds),Hs=h({name:"VitePressApp",setup(){const{site:t}=f();return et(()=>{st(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),at(),ot(),rt(),S.setup&&S.setup(),()=>J(S.Layout)}});async function Ms(){const t=qs(),e=js();e.provide(nt,t);const a=ct(t.route);return e.provide(lt,a),e.component("Content",it),e.component("ClientOnly",dt),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),S.enhanceApp&&await S.enhanceApp({app:e,router:t,siteData:ut}),{app:e,router:t,data:a}}function js(){return _t(Hs)}function qs(){let t=H,e;return ht(a=>{let s=pt(a);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),H&&(t=!1),mt(()=>import(s),[])},S.NotFound)}H&&Ms().then(({app:t,router:e,data:a})=>{e.go().then(()=>{tt(e.route,a.site),t.mount("#app")})});export{Ms as createApp};
