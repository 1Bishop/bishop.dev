<script setup lang="ts">
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
 <pre>{{ blogPostList }}</pre>
</template>

<style scoped>

</style>