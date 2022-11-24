<template>
  <nav>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/posts">posts</NuxtLink>
    <NuxtLink to="/profile">profile</NuxtLink>
    <NuxtLink to="/login">login</NuxtLink>
  </nav>
  <slot />
  <div>footer</div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
nav {
  & > a {
    text-decoration: none;
    color: green;
    &:hover {
      color: blueviolet;
    }
  }
  display: flex;
  gap: 8px;
}
</style>
