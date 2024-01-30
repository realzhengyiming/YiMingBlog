import{_ as a,c as e,o as t,V as o}from"./chunks/framework.41330901.js";const u=JSON.parse('{"title":"以撒目标检测","description":"以撒的结合目标检测, issac object detection, 自定义数据目标检测","frontmatter":{"title":"以撒目标检测","datetime":"2024-01-30T00:00:00.000Z","time":764,"description":"以撒的结合目标检测, issac object detection, 自定义数据目标检测","navbar":true,"sidebar":false,"footer":true,"date":"2024-01-30T00:00:00.000Z","author":"Yi Ming","category":"Tutorial","next":false,"tags":["深度学习"],"blog":"post","aside":"left","prev":false},"headers":[],"relativePath":"blog/posts/2024/isaac_object_detection.md"}'),r={name:"blog/posts/2024/isaac_object_detection.md"},i=o('<h1 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h1><p>上篇文章把《以撒的结合》道具/饰品图片识别的做出来了, 能用是能用, 但是使用场景比较狭隘, 还需要拍照和截图, 得部署到移动设备+编写应用的形式才可以比较好体验, 短期内不太想搞移动app. 于是就想着要不练一个目标检测的模型, 然后通过直接截取应用视频流的形式, 实时/小延时的对画面进行推理和检测, 以<strong>外挂</strong>的形式注入游戏中, 增强体验.<br> 于是就诞生了本文《以撒的结合》目标检测 😃</p><hr><h2 id="需求目标" tabindex="-1">需求目标 <a class="header-anchor" href="#需求目标" aria-label="Permalink to &quot;需求目标&quot;">​</a></h2><p>就是实时/小延迟的目标检测需求, 然后需要截取视频流的.</p><h2 id="模型选择" tabindex="-1">模型选择 <a class="header-anchor" href="#模型选择" aria-label="Permalink to &quot;模型选择&quot;">​</a></h2><h2 id="数据准备" tabindex="-1">数据准备 <a class="header-anchor" href="#数据准备" aria-label="Permalink to &quot;数据准备&quot;">​</a></h2><h2 id="模型训练" tabindex="-1">模型训练 <a class="header-anchor" href="#模型训练" aria-label="Permalink to &quot;模型训练&quot;">​</a></h2><h2 id="验证结果" tabindex="-1">验证结果 <a class="header-anchor" href="#验证结果" aria-label="Permalink to &quot;验证结果&quot;">​</a></h2>',9),s=[i];function c(n,l,d,h,_,b){return t(),e("div",null,s)}const f=a(r,[["render",c]]);export{u as __pageData,f as default};
