<script setup lang="ts">
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <div v-for="item in blogPostList" :key="item.id">
    <NuxtLink :href="item._path">
      <h2 class="text-3xl bg-ctp-rosewater hover:text-ctp-crust hover:bg-ctp-lavender">{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>