<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

</script>

<template>
  <div class="flex flex-col min-h-screen bg-ctp-crust text-white">
    <NavBar/>
    <main class="flex-grow">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>