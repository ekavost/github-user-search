<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container d-flex justify-content-between">
      <a href="https://github.com/ekavost" target="_blank" rel="noopener noreferrer">ekavost</a>
      <span>2025</span>
      <select v-model="$i18n.locale" class="form-select w-25">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </footer>
</template>

<style scoped>
.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}
</style>
