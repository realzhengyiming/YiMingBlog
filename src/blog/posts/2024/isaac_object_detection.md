---
title: 以撒目标检测
datetime: 2024-01-30
time: 12:44
description: 以撒的结合目标检测, issac object detection, 自定义数据目标检测
navbar: true
sidebar: true
footer: true
date: 2024-01-30
author: YiMing
category: Tutorial
next: true
tags:
  - 深度学习
---



# 引言  
上篇文章把《以撒的结合》图片识别的做出来了, 能用是能用, 但是使用场景比较狭隘, 还需要拍照和截图, 得部署到移动设备+编写应用的形式才可以比较好体验, 短期内不太想搞移动app. 于是就想着要不练一个目标检测的模型, 然后通过直接截取应用视频流的形式, 实时/小延时的对画面进行推理和检测, 以**外挂**的形式注入游戏中, 增强体验.  
于是就诞生了本文《以撒的结合》目标检测 :) 

---  

## 需求目标  

就是实时/小延迟的目标检测需求, 然后需要截取视频流的