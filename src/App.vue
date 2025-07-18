<script setup>
import GitHub from './components/GitHub.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <TheHeader />
  <div class="my-5"></div>
  <GitHub />
  <TheFooter />
</template>
