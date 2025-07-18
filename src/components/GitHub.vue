<script setup>
import TheCard from './TheCard.vue';
import TheForm from './TheForm.vue';
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
  <div>
    <!-- Form -->
    <the-form :user="user" @get-user="getUser"></the-form>
    <!-- Error -->
    <div v-if="errorOn" class="alert alert-warning" role="alert">{{ errorMessage }}</div>
  </div>

  <div class="d-flex justify-content-center align-items-start gap-5">
    <!-- User Card -->
    <the-card :user="user" @get-repos="getRepos"></the-card>

    <!-- User repos     -->
    <div v-if="showRepos">
      <git-hub-repo
        v-for="r in user.repos"
        :key="r.id"
        :repo-name="r.full_name"
        :url-repo="r.html_url"
        :description="r.description"
        :forks-count="r.forks_count"
      ></git-hub-repo>
    </div>
  </div>
</template>
