<template>
  <div class="posts">
    <h1>Posts Page</h1>
    <template v-for="post of postItems">
      <div class="post" @click="$router.push(`/posts/${post.id}`)">
        <h3>{{ post.id }}</h3>
        <h3>{{ post.title }}</h3>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
interface Post {
  id: number;
  author: string;
  title: string;
  contents: string;
}

const postItems = ref<Post[]>([
  {
    id: 1,
    author: "foo",
    title: "첫번째 게시글!",
    contents: "첫번째 게시글 내용!",
  },
  {
    id: 2,
    author: "foo",
    title: "세상에서 제일 귀여운 고양이",
    contents: "구라얌",
  },
]);
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
