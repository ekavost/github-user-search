<script setup>
import { defineEmits, defineProps } from 'vue';
defineProps(['user']);
defineEmits(['getRepos']);
</script>

<template>
  <div v-if="user.userExists" class="iserinfo">
    <div class="card row mx-auto">
      <img class="card-img-top" :src="user.urlAvatar" alt="avatar" />
      <div class="card-body">
        <h4 class="card-title">{{ user.name }}</h4>
        <div class="d-flex justify-content-between align-items-end">
          <button @click="$emit('getRepos')" type="button" class="btn btn-primary">
            Repositorios
          </button>
          <a :href="user.urlUser" class="card-text" target="_blank">URL de GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card.row {
  width: 25rem;
}
.card {
  max-width: 1080px;
}
</style>
