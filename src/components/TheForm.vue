<script setup>
defineProps(['user', 'disableInput']);
const emit = defineEmits(['getUser']);
</script>
<template>
  <div class="card px-4">
    <div class="container card-body d-flex flex-column">
      <h4 class="card-title">{{ $t('form.title') }}</h4>
      <p class="card-text">{{ $t('form.subtitle') }}</p>
      <form @submit.prevent="$emit('getUser')">
        <div class="input-group">
          <span class="input-group-text text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </span>
          <input
            v-model.lazy.trim="user.login"
            :disabled="disableInput"
            type="text"
            class="form-control"
            :placeholder="$t('form.inputPlaceholder')"
          />
        </div>
        <button class="btn mt-4 w-100" type="submit">
          {{ $t('form.btnSearch') }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
p.card-text {
  color: #8c8d8bff;
}
button {
  background-color: #ff9c2bff;
  color: white;
  font-weight: 600;
}
button:hover {
  background-color: #fdaa4b;
  color: white;
}

button:active {
  color: #ff9c2bff !important;
  border: 2px solid #ff9c2bff;
}
</style>
