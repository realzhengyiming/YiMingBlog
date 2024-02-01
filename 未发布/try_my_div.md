---
title: try my div
time: 14:37
description: llm agent 解读
navbar: true
sidebar: true
footer: true
date: 2024-01-15
category: Article
author: Yi Ming
next: true
tags:
  - 深度学习
  - Agent
---

<!-- <MyDiv /> -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>