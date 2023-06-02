<script setup lang="ts">

</script>

<template>
    <nav class="bg-ctp-rosewater text-ctp-base py-5 justify-center flex text-center">
    <NuxtLink to="/" class="flex-1">Home</NuxtLink>
    <NuxtLink to="/about" class="flex-1">About</NuxtLink>
    <NuxtLink to="/blog" class="flex-1">Blog</NuxtLink>
  </nav>
  <div class="pt-2 border-2 border-ctp-crust bg-ctp-rosewater">
    <slot />
  </div>

</template>

<style scoped>

</style>