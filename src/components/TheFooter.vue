<template>
  <div class="d-flex justify-content-between align-items-center py-3 px-3 border-top">
    <div>
      <a href="https://github.com/ekavost" target="_blank" rel="noopener noreferrer">@ekavost</a>
      <span> | 2025</span>
    </div>
    <select v-model="$i18n.locale" class="form-select">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.form-select {
  max-width: 10rem;
}
</style>
