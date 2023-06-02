<script setup lang="ts">

</script>

<template>
  <nav class="bg-ctp-base py-5 justify-center flex text-center">
    <NuxtLink to="/" class="text-ctp-pink flex-1">Home</NuxtLink>
    <NuxtLink to="/about" class="text-ctp-pink flex-1">About</NuxtLink>
    <NuxtLink to="/blog" class="text-ctp-pink flex-1">Blog</NuxtLink>
  </nav>
  <div class="h-10 bg-ctp-base">
    <slot />
  </div>
</template>

<style scoped>

</style>