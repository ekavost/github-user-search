<script setup>
import GitHub from './components/GitHub.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';

const { t, locale, availableLocales } = useI18n({ useScope: 'global' });
</script>

<template>
  <TheHeader />
  <main class="my-5">
    <GitHub />
  </main>
  <TheFooter />
</template>
