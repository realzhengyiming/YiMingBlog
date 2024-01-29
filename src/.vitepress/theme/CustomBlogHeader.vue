<script setup lang="ts">
import { usePosts } from '@jcamp/vitepress-blog-theme'

const data = usePosts()
</script>

<template>
  <div class="w-full text-blue-200">
    <!-- 最新内容: {{ data.posts[0].title }} -->
  </div>
</template>
