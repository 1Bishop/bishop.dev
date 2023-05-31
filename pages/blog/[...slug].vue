<script setup lang="ts">
  const { path } = useRoute()
  const { data: contentDoc } = useAsyncData(`content-${path}`, () => {
    return queryContent(path).findOne()
  })
</script>

<template>
  <div class="">
    <h1 class="bg-ctp-base text-ctp-pink">
      Post Page
    </h1>

    <article class="prose lg:prose-xl article">
      <ContentRenderer :value="contentDoc" />
    </article>
  </div>
</template>

<style scoped>

</style>