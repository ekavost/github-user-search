<template>
  <div class="card px-4" @keydown.enter="handleSubmit">
    <div class="container card-body d-flex flex-column">
      <h4 class="card-title">{{ $t('form.title') }}</h4>
      <p class="card-text">{{ $t('form.subtitle') }}</p>
      <form @submit.prevent="handleSubmit">
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
            ref="inputRef"
            v-model.trim="localLogin"
            @focus="localLogin = ''"
            :disabled="disableInput"
            type="text"
            class="form-control"
            :placeholder="$t('form.inputPlaceholder')"
            list="searched-users"
          />
          <datalist id="searched-users" v-if="localLogin.length > 1">
            <option v-for="username in searchedUsers" :key="username" :value="username"></option>
          </datalist>
        </div>
        <button class="btn mt-4 w-100" type="submit">
          {{ $t('form.btnSearch') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
defineProps(['disableInput']);
const emit = defineEmits(['getUser']);

const inputRef = ref(null);
const localLogin = ref('');
const searchedUsers = ref([]);

onMounted(() => {
  const searches = localStorage.getItem('searchedUsers');
  if (searches) {
    searchedUsers.value = JSON.parse(searches);
  }
});
const handleSubmit = () => {
  emit('getUser', localLogin.value);
  inputRef.value?.blur();
  localLogin.value = '';
};
</script>

<style scoped>
p.card-text {
  color: var(--color-grey);
}
button {
  background-color: var(--color-primary);
  color: white;
  font-weight: var(--font-bolder);
}
button:hover {
  background-color: var(--color-primary-light);
  color: white;
}

button:active {
  color: var(--color-primary) !important;
  border: var(--border-primary-thick);
}
</style>
