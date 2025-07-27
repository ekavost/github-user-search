<script setup>
import GitHub from './components/GitHub.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="container d-flex flex-column justify-content-between">
    <header class="mx-auto">
      <TheHeader />
    </header>
    <main class="my-1 my-sm-4">
      <GitHub />
    </main>
    <footer class="mt-auto">
      <TheFooter />
    </footer>
  </div>
</template>
