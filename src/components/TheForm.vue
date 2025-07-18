<script setup>
import { defineEmits, defineProps } from 'vue';
defineProps(['user']);
const emit = defineEmits(['getUser']);
</script>
<template>
  <div class="mx-auto mb-3 card">
    <div class="card-body">
      <h4 class="card-title">{{ $t('formTitle') }}</h4>
      <p class="card-text">{{ $t('formSubtitle') }}</p>
      <input
        v-model.trim="user.name"
        @keypress.enter.prevent="$emit('getUser')"
        :disabled="disableInput"
        type="text"
        class="form-control"
        :placeholder="$t('inputPlaceholder')"
      />
      <button @click="getUser" class="btn btn-secondary mt-3 w-100" type="button" id="btn-search">
        {{ $t('btnSearch') }}
      </button>
    </div>
  </div>
</template>
