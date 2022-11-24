<template>
  <nav>
    <NuxtLink to="/">home</NuxtLink>
  </nav>
  <slot />
  <div>login footer</div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
#__nuxt {
  display: grid;
  place-content: center;
  grid-template-rows: 1fr 8fr 1fr;
  width: 100vw;
  height: 100vh;
}
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
