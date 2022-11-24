<template>
  <div class="post">
    <h1>Post</h1>
    <NuxtLink to="/posts">뒤로 가기</NuxtLink>
    <h2>id: {{ $route.params.id }}</h2>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
