import{A as M,m as k,d as _,u as v,o as n,c,b as s,n as B,G as u,C as r,t as i,_ as S,y as x,I as g,E as C,a as L,F as $,R as I,S as O,U as J,D as b,h as z,Q as D,J as Q,a5 as Y,a6 as K,q as X,k as tt,a7 as et,a8 as st,a9 as ot,aa as at,ab as rt,ac as nt,ad as ct,ae as lt,af as it,ag as dt,ah as ut,ai as _t,M as ht}from"./chunks/framework.41330901.js";import{t as q}from"./chunks/theme.87420cf4.js";const y=JSON.parse('[{"title":"以撒目标检测","author":"Yi Ming","url":"/blog/posts/2024/isaac_object_detection.html","excerpt":"<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p>上篇文章把《以撒的结合》道具/饰品图片识别的做出来了, 能用是能用, 但是使用场景比较狭隘, 还需要拍照和截图, 得部署到移动设备+编写应用的形式才可以比较好体验, 短期内不太想搞移动app. 于是就想着要不练一个目标检测的模型, 然后通过直接截取应用视频流的形式, 实时/小延时的对画面进行推理和检测, 以<strong>外挂</strong>的形式注入游戏中, 增强体验.<br>\\n于是就诞生了本文《以撒的结合》目标检测 😃</p>\\n","tags":["深度学习"],"category":"Tutorial","date":{"raw":"2024-01-30","time":1706616000000,"formatted":"January 30, 2024","since":"2 days ago"}},{"title":"以撒道具/饰品图像识别","author":"Yi Ming","url":"/blog/posts/2024/Isaac_image_recognition.html","excerpt":"<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p><img src=\\"./pic/自定义训练数据图像识别-2024-01-29.png\\" alt=\\"\\">\\n最近在玩《以撒的结合:忏悔》, ns版本. 游戏确实上头好玩, 内容很多. 但是游玩下来遇到一个纠结头疼的问题就是, 道具/ 装备 有时候捡起来后的效果, 还不如不捡. 装备/道具只会在捡起来的时候才能看到道具和状态是什么, 甚至, 有时候捡起来后描述也看不出这个道具到底能用来干嘛,  魂系叙事那一套......虽然也找到不错的<a href=\\"https://isaac.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5\\" target=\\"_blank\\" rel=\\"noreferrer\\">以撒的结合中文维基</a>, 但是, 站点只能文字搜索, 再加上其道具和饰品加起来总数量有900多个, 相当于ImageNet的种类了.\\n于是就想到, 干脆做一个“以撒道具图像识别功能” 好了, 优化体验: ) .</p>\\n","tags":["深度学习","图像识别","以撒的结合"],"category":"Tutorial","date":{"raw":"2024-01-29","time":1706529600000,"formatted":"January 29, 2024","since":"3 days ago"}},{"title":"LLM Agent 解读","author":"Yi Ming","url":"/blog/posts/2024/llm_agent.html","excerpt":"<h1 id=\\"什么是llm-agent\\" tabindex=\\"-1\\">什么是llm Agent <a class=\\"header-anchor\\" href=\\"#什么是llm-agent\\" aria-label=\\"Permalink to &quot;什么是llm Agent&quot;\\">&ZeroWidthSpace;</a></h1>\\n<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p><img src=\\"./pic/rag和agent的关系.excalidraw.png\\" alt=\\"\\">\\n代理(agent)的核心思想是使用语言模型来选择要<strong>执行</strong>的<strong>一系列操作</strong>。在链中，一系列操作是硬编码的（在代码中）。在代理中，语言模型用作<strong>推理引擎</strong>，以确定要执行哪些操作以及按何种顺序执行。</p>\\n<p>简单的理解就是, 让llm成为大脑, 然后通过agent技术,可以让llm判断和使用工具拓展他的功能, 以达到完成复杂任务的目的.</p>\\n","tags":["深度学习","Agent"],"category":"Article","date":{"raw":"2024-01-15","time":1705320000000,"formatted":"January 15, 2024","since":"17 days ago"}},{"title":"vitepress_obsidian","author":"Yi Ming","url":"/blog/posts/2024/vitepress_obsidian.html","excerpt":"<h1 id=\\"引言\\" tabindex=\\"-1\\">引言 <a class=\\"header-anchor\\" href=\\"#引言\\" aria-label=\\"Permalink to &quot;引言&quot;\\">&ZeroWidthSpace;</a></h1>\\n<p>在此之前很长时间我都折腾过好几个博客 🥲, 有django + mdui 自建博客; 有wordpress 框架博客...但是我每次回头都会发现, 一年到头没写几篇内容.\\n复盘一下, 总得来说来来去去都是一下这几个问题纠缠着:</p>\\n<ol>\\n<li>写作不方便: 可视化富文本编辑器实在用得难受</li>\\n<li>发布不方便: 只能用网页进行编辑的话, 流程繁琐</li>\\n<li>站点访问卡顿:(本人服务器配置是最低档)</li>\\n<li>习惯难以养成: 自己虽然说有写笔记的习惯, 但是并没有打开网页写文章的习惯, 加上(1,2,3的难受用户体验, 进一步在开头的热情结束后, 打消了自己写东西的热情)<br>\\n刚好, 今年2024年开头, 我发现了一个不错的笔记应用obsidian, 初步体验下来, 我直接放弃了notion (使用notion的时候遇到了上面列出来的问题).  并且机缘巧合查阅资料之时, 也让我看到了vitepress 博客, 于是两者一拍即合, 有了新文章和这个新博客.</li>\\n</ol>\\n","tags":["vitepress","obsidian"],"category":"Document","date":{"raw":"2024-01-14","time":1705233600000,"formatted":"January 14, 2024","since":"18 days ago"}}]');function w(){const t=M(),e=t.path;function o(){const h=y.findIndex(p=>p.url===t.path);return h===-1&&console.error(`blog post missing: ${t.path}`),h}const a=k(()=>y[o()]),l=k(()=>y[o()-1]),d=k(()=>y[o()+1]);return{posts:y,post:a,nextPost:l,prevPost:d,path:e}}const pt=_({__name:"VPBPostCategory",props:{category:null},setup(t){const{theme:e}=v();return(o,a)=>{var l;return n(),c("div",null,[(l=s(e).blog)!=null&&l.categoryIcons&&s(e).blog.categoryIcons[t.category.toLowerCase()]?(n(),c("div",{key:0,class:B([s(e).blog.categoryIcons[t.category.toLowerCase()],"mr-2"])},null,2)):u("",!0),r("span",null,i(t.category),1)])}}});const R=S(pt,[["__scopeId","data-v-262d93ff"]]),V=JSON.parse('[{"name":"Yi Ming","avatar":"https://avatars.githubusercontent.com/u/26131338?v=4","gravatar":null,"twitter":null,"url":"/blog/authors/yi-ming.html","excerpt":""}]');function H(){const t=M(),e=t.path;function o(p){return V.find(m=>m.name===p)}function a(){const p=V.findIndex(m=>m.url===t.path);return p===-1&&console.error(`author page missing: ${t.path}`),p}const l=k(()=>V[a()]),d=k(()=>V[a()-1]),h=k(()=>V[a()+1]);return{authors:V,author:l,nextAuthor:d,prevAuthor:h,findByName:o,path:e}}const mt={key:0,class:"flex items-center space-x-4"},gt=["src","alt"],xt=["src","alt"],vt=["href"],ft={class:"font-medium dark:text-white"},bt={key:1},yt=_({__name:"VPBHomeAuthor",props:{name:null},setup(t){const e=t;v();const{findByName:o}=H(),a=k(()=>o(e.name));return(l,d)=>s(a)?(n(),c("div",mt,[s(a).avatar?(n(),c("img",{key:0,class:"h-7 w-7 rounded-full",src:s(a).avatar,alt:s(a).name},null,8,gt)):s(a).gravatar?(n(),c("img",{key:1,class:"h-7 w-7 rounded-full",src:`https://gravatar.com/avatar/${s(a).gravatar}`,alt:s(a).name},null,8,xt)):u("",!0),r("a",{href:s(x)(s(a).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[r("span",ft,i(s(a).name),1)],8,vt)])):(n(),c("div",bt))}}),$t={class:"rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"},kt={class:"mb-5 flex items-center justify-between text-gray-500"},wt={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Pt={class:"text-sm"},Bt={class:"mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},At=["href"],Vt=["innerHTML"],Ct={class:"flex items-center justify-between"},Lt=["href"],Tt=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),F=_({__name:"VPBHomePost",props:{post:null},setup(t){return(e,o)=>(n(),c("article",$t,[r("div",kt,[r("span",wt,[g(R,{category:t.post.category},{default:C(()=>[r("span",Pt,i(t.post.date.since),1)]),_:1},8,["category"])])]),r("h2",Bt,[r("a",{href:t.post.url},i(t.post.title),9,At)]),r("div",{class:"mb-5 font-light",innerHTML:t.post.excerpt},null,8,Vt),r("div",Ct,[g(yt,{name:t.post.author},null,8,["name"]),r("a",{href:t.post.url,class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[L(" Read more "),Tt],8,Lt)])]))}}),It={class:"mx-auto max-w-screen-xl lg:px-6 lg:py-16"},St={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Dt={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},jt={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},qt={class:"grid gap-6 p-2 lg:grid-cols-2"},Et=_({__name:"VPBHome",setup(t){const{posts:e}=w(),{theme:o}=v();return(a,l)=>{var d,h;return n(),c("div",It,[r("div",St,[r("h2",Dt,i((d=s(o).blog)==null?void 0:d.title),1),r("p",jt,i((h=s(o).blog)==null?void 0:h.description),1)]),r("div",qt,[(n(!0),c($,null,I(s(e),p=>(n(),c("div",{key:p.url},[g(F,{post:p},null,8,["post"])]))),128))])])}}}),Rt=r("dt",{class:"sr-only"},"Published on",-1),Ht={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-300"},Mt=["datetime"],Ot=_({__name:"VPBPostDate",setup(t){const{post:e}=w();function o(){return new Date(e.value.date.time).toISOString()}return(a,l)=>(n(),c("dl",null,[Rt,r("dd",Ht,[r("time",{datetime:o()},i(s(e).date.formatted),9,Mt)])]))}}),W=t=>(O("data-v-f51709bc"),t=t(),J(),t),Jt=W(()=>r("dt",{class:"sr-only"},"Authors",-1)),Yt={class:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"},Ft={key:0,class:"flex items-center space-x-2"},Wt=["src"],Zt=["src"],Nt={class:"whitespace-nowrap text-sm font-medium leading-5"},Ut=W(()=>r("dt",{class:"sr-only"},"Name",-1)),Gt={class:"text-gray-900 dark:text-white"},zt=["href"],Qt={key:0,class:"sr-only"},Kt={key:1},Xt=["href"],te=_({__name:"VPBPostAuthor",props:{insideDoc:{type:Boolean}},setup(t){const{findByName:e}=H(),{post:o}=w(),a=k(()=>e(o.value.author));return(l,d)=>(n(),c("dl",{class:B(["pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200/5",{"xs:show xl:hidden":t.insideDoc}])},[Jt,r("dd",null,[r("ul",Yt,[s(a)?(n(),c("li",Ft,[s(a).gravatar?(n(),c("img",{key:0,src:`https://gravatar.com/avatar/${s(a).gravatar}`,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Wt)):s(a).avatar?(n(),c("img",{key:1,src:s(a).avatar,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Zt)):u("",!0),r("dl",Nt,[Ut,r("dd",Gt,[r("a",{href:s(x)(s(a).url),class:"text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"},i(s(a).name),9,zt)]),s(a).twitter?(n(),c("dt",Qt,"Twitter")):u("",!0),s(a).twitter?(n(),c("dd",Kt,[r("a",{href:`https://twitter.com/${s(a).twitter}`,target:"_blank",rel:"noopener noreferrer"},i(s(a).twitter),9,Xt)])):u("",!0)])])):u("",!0)])])],2))}});const Z=S(te,[["__scopeId","data-v-f51709bc"]]),ee={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},se=_({__name:"VPBPostDetails",props:{insideDoc:{type:Boolean}},setup(t){const{post:e}=w();return(o,a)=>(n(),c($,null,[r("div",{class:B(["flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",{"xs:show xl:hidden":t.insideDoc}])},[r("span",ee,[g(R,{category:s(e).category},null,8,["category"])])],2),g(Z,{"inside-doc":""})],64))}}),oe={class:"space-y-1 pt-6 text-center xl:pb-10"},ae={class:"md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)] sm:text-4xl sm:leading-10 md:text-5xl"},re=_({__name:"VPBLayoutPostTop",setup(t){const{post:e}=w();return(o,a)=>(n(),c($,null,[r("header",oe,[g(Ot),r("h1",ae,i(s(e).title),1)]),g(se,{"inside-doc":""})],64))}}),N=t=>(O("data-v-2f3a5683"),t=t(),J(),t),ne={key:0,class:"py-3"},ce=N(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Next Article ",-1)),le={class:"link"},ie=["href"],de={key:1,class:"py-3"},ue=N(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Previous Article ",-1)),_e={class:"link"},he=["href"],pe={class:"pt-3"},me=["href"],ge=_({__name:"VPBPostLinks",props:{insideDoc:{type:Boolean}},setup(t){var h;const{site:e}=v(),{nextPost:o,prevPost:a}=w(),l=e.value.themeConfig,d=x(((h=l.blog)==null?void 0:h.path)??"/blog/");return(p,m)=>(n(),c("footer",{class:B(["mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5",{"xs:show lg:hidden":t.insideDoc}])},[s(o)?(n(),c("div",ne,[ce,r("div",le,[r("a",{href:`${s(o).url}`},i(s(o).title),9,ie)])])):u("",!0),s(a)?(n(),c("div",de,[ue,r("div",_e,[r("a",{href:`${s(a).url}`},i(s(a).title),9,he)])])):u("",!0),r("div",pe,[r("a",{class:"link",href:s(x)(s(d))},"← Back to the blog",8,me)])],2))}});const U=S(ge,[["__scopeId","data-v-2f3a5683"]]),xe=_({__name:"VPBLayoutPostBottom",setup(t){return(e,o)=>(n(),b(U,{"inside-doc":""}))}}),E=_({__name:"VPBTagIcon",props:{tag:null},setup(t){const{theme:e}=v();return(o,a)=>{var l;return(l=s(e).blog)!=null&&l.tagIcons&&s(e).blog.tagIcons[t.tag.toLowerCase()]?(n(),c("div",{key:0,class:B([s(e).blog.tagIcons[t.tag.toLowerCase()],"mr-2"])},null,2)):u("",!0)}}}),ve={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},fe={class:"bg-primary-100 inline-flex rounded text-sm font-medium"},be={class:"flex flex-wrap gap-2 py-5"},ye=["href"],$e=_({__name:"VPBLayoutPostAsideTop",setup(t){var d;const{site:e}=v(),{post:o}=w(),a=e.value.themeConfig,l=x(((d=a.blog)==null?void 0:d.tagsPath)??"/blog/tags");return(h,p)=>(n(),c($,null,[r("span",ve,[g(R,{category:s(o).category},null,8,["category"])]),r("span",fe,[r("div",be,[(n(!0),c($,null,I(s(o).tags,m=>(n(),c("a",{key:m,class:"rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600",href:`${s(l)}?init=${m}`},[g(E,{tag:m},null,8,["tag"]),L(" "+i(m),1)],8,ye))),128))])]),g(Z)],64))}}),ke=_({__name:"VPBLayoutPostAsideBottom",setup(t){return(e,o)=>(n(),b(U))}}),we={class:"mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"},Pe={class:"pt-3"},Be=["href"],Ae=_({__name:"VPBLayoutAuthorAsideBottom",setup(t){var l;const{site:e}=v(),o=e.value.themeConfig,a=x(((l=o.blog)==null?void 0:l.path)??"/blog/");return(d,h)=>(n(),c("footer",we,[r("div",Pe,[r("a",{class:"link",href:s(x)(s(a))},"← Back to the blog",8,Be)])]))}});const Ve=S(Ae,[["__scopeId","data-v-0739fb2a"]]),Ce={class:"mb-1 flex items-center justify-between text-gray-500"},Le=["src"],Te=["src"],Ie={class:"ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Se={class:"mt-4 flex items-center justify-between text-gray-500"},De=["href"],je=r("div",{class:"i-[bx/arrow-back] mr-2"},null,-1),qe=r("span",null,"Previous Author",-1),Ee=[je,qe],Re={key:1},He=["href"],Me=r("span",null,"Next Author",-1),Oe=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),Je=[Me,Oe],Ye=_({__name:"VPBLayoutAuthorTop",setup(t){const{author:e,prevAuthor:o,nextAuthor:a}=H();return(l,d)=>(n(),c("div",null,[r("div",Ce,[s(e).gravatar?(n(),c("img",{key:0,src:`https://gravatar.com/avatar/${s(e).gravatar}`,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Le)):s(e).avatar?(n(),c("img",{key:1,src:s(e).avatar,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Te)):u("",!0),r("span",Ie,i(s(e).name),1)]),r("div",Se,[s(o)?(n(),c("a",{key:0,href:s(x)(s(o).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},Ee,8,De)):u("",!0),s(o)?u("",!0):(n(),c("div",Re)),s(a)?(n(),c("a",{key:2,href:s(x)(s(a).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},Je,8,He)):u("",!0)])]))}}),Fe=_({__name:"VPBLayout",setup(t){const{Layout:e}=q,{frontmatter:o}=v();return(a,l)=>(n(),b(s(e),null,{"doc-before":C(()=>[s(o).blog==="post"?(n(),b(re,{key:0})):u("",!0),s(o).blog==="author"?(n(),b(Ye,{key:1})):u("",!0)]),"doc-footer-before":C(()=>[s(o).blog==="post"?(n(),b(xe,{key:0})):u("",!0)]),"aside-top":C(()=>[s(o).blog==="post"?(n(),b($e,{key:0})):u("",!0)]),"aside-bottom":C(()=>[s(o).blog==="post"?(n(),b(ke,{key:0})):u("",!0),s(o).blog==="author"?(n(),b(Ve,{key:1})):u("",!0)]),_:1}))}});function We(){const t=[];let e="0",o=-1;for(let a=0;a<y.length;a++){const l=y[a];if(l.date){const d=l.date.raw.split("-")[0];d===e?t[o].push(l):(o++,t[o]=[],t[o].push(l),e=d)}}return{postsByYear:t}}const Ze={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},Ne={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Ue={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Ge={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},ze={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Qe=["href"],Ke={class:"cursor-pointer leading-6"},Xe=r("div",{class:"title-o"},null,-1),ts={class:"cursor-pointer font-sans leading-6"},es=_({__name:"VPBArchives",setup(t){const{postsByYear:e}=We(),{theme:o}=v();return(a,l)=>{var d,h;return n(),c("div",Ze,[r("div",Ne,[r("h2",Ue,i((d=s(o).blog)==null?void 0:d.title)+" Archives ",1),r("p",Ge,i((h=s(o).blog)==null?void 0:h.description),1)]),(n(!0),c($,null,I(s(e),(p,m)=>(n(),c("div",{key:m},[r("div",ze,i(p[0].date.raw.split("-")[0]),1),(n(!0),c($,null,I(p,(A,P)=>(n(),c("a",{key:P,href:s(x)(A.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6 hover:text-[color:var(--vp-c-brand-dark)] dark:hover:text-[color:var(--vp-c-brand-light)]"},[r("div",Ke,[Xe,L(" "+i(A.title),1)]),r("div",ts,i(A.date.raw.slice(5)),1)],8,Qe))),128))]))),128))])}}});function ss(){const t={};for(let e=0;e<y.length;e++){const o=y[e],a=o.tags;Array.isArray(a)&&a.forEach(l=>{t[l]||(t[l]=[]),t[l].push(o)})}return{postsByTag:t}}const os={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},as={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},rs={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},ns={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},cs={class:"flex flex-wrap justify-center gap-2 p-4"},ls=["onClick"],is={key:0},ds={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},us={class:"text-xs"},_s=["href"],hs={class:"cursor-pointer leading-6"},ps=r("div",{class:"title-o"},null,-1),ms={class:"cursor-pointer font-sans leading-6"},gs=_({__name:"VPBTags",setup(t){const{postsByTag:e}=ss(),{theme:o}=v(),a=z("");function l(d){a.value=d}if(D){const h=new URLSearchParams(window.location.search).get("init");h&&l(h)}return(d,h)=>{const p=Q("ClientOnly");return n(),b(p,null,{default:C(()=>{var m,A;return[r("div",os,[r("div",as,[r("h2",rs,i((m=s(o).blog)==null?void 0:m.title)+" Tags ",1),r("p",ns,i((A=s(o).blog)==null?void 0:A.description),1)]),r("div",cs,[(n(!0),c($,null,I(s(e),(P,f)=>(n(),c("div",{key:f,class:B({"cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600":a.value!==f,"rounded-full bg-[color:var(--vp-c-brand-light)] px-3 py-1 text-sm font-semibold text-gray-100 dark:bg-[color:var(--vp-c-brand-dark)]":a.value===f}),onClick:Vs=>l(f)},[g(E,{tag:f},null,8,["tag"]),L(" "+i(f)+" ",1),r("span",{class:B({"ml-3 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]":a.value!==f,"ml-3 text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)]":a.value===f})},i(P.length),3)],10,ls))),128))]),a.value?(n(),c("div",is,[r("div",ds,[g(E,{tag:a.value},null,8,["tag"]),L(i(a.value)+" ",1),r("span",us," ( "+i(s(e)[a.value].length)+" )",1)]),(n(!0),c($,null,I(s(e)[a.value],(P,f)=>(n(),c("a",{key:f,href:s(x)(P.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6"},[r("div",hs,[ps,L(" "+i(P.title),1)]),r("div",ms,i(P.date.raw),1)],8,_s))),128))])):u("",!0)])]}),_:1})}}}),xs={},vs={class:"theme-style-div"};function fs(t,e){return n(),c("div",vs,"This is a test theme component")}const bs=S(xs,[["render",fs]]),j={...q,Layout:Fe,enhanceApp({app:t,router:e,siteData:o}){q.enhanceApp({app:t,router:e,siteData:o}),t.component("VPBHome",Et),t.component("VPBArchives",es),t.component("VPBTags",gs),t.component("VPBTestComponent",bs),t.component("VPBHomePost",F)}};const ys={class:"w-full text-blue-200"},$s=_({__name:"CustomBlogHeader",setup(t){return w(),(e,o)=>(n(),c("div",ys))}}),ks={...j,Layout:()=>Y(j.Layout,null,{}),enhanceApp({app:t,router:e,siteData:o}){j.enhanceApp({app:t,router:e,siteData:o}),t.component("CustomBlogHeader",$s)}};function G(t){if(t.extends){const e=G(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const T=G(ks),ws=_({name:"VitePressApp",setup(){const{site:t}=v();return X(()=>{tt(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),et(),st(),ot(),T.setup&&T.setup(),()=>Y(T.Layout)}});async function Ps(){const t=As(),e=Bs();e.provide(at,t);const o=rt(t.route);return e.provide(nt,o),e.component("Content",ct),e.component("ClientOnly",lt),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),T.enhanceApp&&await T.enhanceApp({app:e,router:t,siteData:it}),{app:e,router:t,data:o}}function Bs(){return dt(ws)}function As(){let t=D,e;return ut(o=>{let a=_t(o);return t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),D&&(t=!1),ht(()=>import(a),[])},T.NotFound)}D&&Ps().then(({app:t,router:e,data:o})=>{e.go().then(()=>{K(e.route,o.site),t.mount("#app")})});export{Ps as createApp};
