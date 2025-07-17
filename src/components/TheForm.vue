<script setup>
import { defineEmits, defineProps } from 'vue';
defineProps(['user']);
const emit = defineEmits(['getUser']);
</script>
<template>
  <div class="mx-auto mb-3 card">
    <div class="card-body">
      <h4 class="card-title">Find GitHub Users Instantly</h4>
      <p class="card-text">Discover profiles, repositories, and more with a simple search</p>
      <input
        v-model.trim="user.name"
        @keypress.enter.prevent="$emit('getUser')"
        :disabled="disableInput"
        type="text"
        class="form-control"
        placeholder="Introduce el nombre de usuario de GitHub"
      />
      <button @click="getUser" class="btn btn-secondary mt-3 w-100" type="button" id="btn-search">
        Buscar
      </button>
    </div>
  </div>
</template>
