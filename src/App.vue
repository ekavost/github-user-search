<script setup>
import GitHub from './components/GitHub.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';

const { t, locale, availableLocales } = useI18n({ useScope: 'global' });
</script>

<template>
  <div class="container d-flex flex-column justify-content-between px-0">
    <header>
      <TheHeader />
    </header>
    <main class="my-5">
      <GitHub />
    </main>
    <footer class="mt-auto">
      <TheFooter />
    </footer>
  </div>
</template>
