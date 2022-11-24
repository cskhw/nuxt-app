<template>
  <div class="posts">
    <h1>Posts Page</h1>
    <template v-for="post of appStore.posts">
      <div class="post" @click="$router.push(`/posts/${post.id}`)">
        <h3>{{ post.id }}</h3>
        <h3>{{ post.title }}</h3>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";

const appStore = useAppStore();
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
