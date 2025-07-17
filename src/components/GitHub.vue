<script setup>
import GitHubRepo from './GitHubRepo.vue';
import { ref, reactive } from 'vue';

const urlApi = ref('https://api.github.com/users/');
const user = reactive({
  name: '',
  urlAvatar: '',
  urlUser: '',
  userExists: false,
  repos: [],
});

const errorMessage = ref('');
const errorOn = ref(false);
const disableInput = ref(false);
const showRepos = ref(false);

async function getUser() {
  showRepos.value = false;
  disableInput.value = true;
  const response = await fetch(urlApi.value + user.name);
  if (response.ok) {
    let data = await response.json();
    user.name = data.login;
    user.urlAvatar = data.avatar_url;
    user.urlUser = data.html_url;
    errorOn.value = false;
    user.userExists = true;
  } else {
    errorMessage.value = 'El usuario no existe';
    errorOn.value = true;
    user.userExists = false;
  }
  disableInput.value = false;
}

async function getRepos() {
  const response = await fetch(urlApi.value + user.name + '/repos');
  if (response.ok) {
    user.repos = await response.json();
    if (user.repos.length > 0) {
      showRepos.value = true;
    } else {
      errorOn.value = true;
      errorMessage.value = 'El usuario no tiene repositorios';
    }
  }
}

const count = ref(0);
</script>

<template>
  <div class="mx-auto w-50">
    <!-- Input -->
    <form class="input-group mb-3">
      <input
        v-model.trim="user.name"
        @keypress.enter.prevent="getUser"
        :disabled="disableInput"
        type="text"
        class="form-control"
        placeholder="Introduce el nombre de usuario de GitHub"
      />
      <button @click="getUser" class="btn btn-outline-secondary" type="button" id="btn-search">
        Buscar
      </button>
    </form>
    <!-- Error -->
    <div v-if="errorOn" class="alert alert-warning" role="alert">{{ errorMessage }}</div>
  </div>
  <div class="d-flex justify-content-center align-items-start gap-5 mt-5">
    <!-- User Card -->
    <div v-if="user.userExists" class="iserinfo">
      <div class="card row mx-auto">
        <img class="card-img-top" :src="user.urlAvatar" alt="avatar" />
        <div class="card-body">
          <h4 class="card-title">{{ user.name }}</h4>
          <div class="d-flex justify-content-between align-items-end">
            <button @click="getRepos" type="button" class="btn btn-primary">Repositorios</button>
            <a :href="user.urlUser" class="card-text" target="_blank">URL de GitHub</a>
          </div>
        </div>
      </div>
    </div>
    <!-- User repos     -->
    <div v-if="showRepos" class="w-100">
      <GitHubRepo
        v-for="r in user.repos"
        :key="r.id"
        :repo-name="r.full_name"
        :url-repo="r.html_url"
        :description="r.description"
        :forks-count="r.forks_count"
      />
    </div>
  </div>
</template>

<style scoped>
.card.row {
  width: 25rem;
}
</style>
