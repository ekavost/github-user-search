<template>
  <select v-model="$i18n.locale" class="form-select">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<style scoped>
.form-select {
  max-width: 10rem;
}
</style>
