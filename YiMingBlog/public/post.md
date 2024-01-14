---

title: 详情页
tags:
  - "#文件夹索引页"
datetime: 2024-01-13 21:32
    
---


<script setup>
import { data as posts } from './try.data.js'
</script>

<template>
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of posts.latest_blogs">
      <a :href="post">{{ post }}</a>
    </li>
  </ul>
</template>



## 给我看看