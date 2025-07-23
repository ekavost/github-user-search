<script setup>
import TheCard from './TheCard.vue';
import TheForm from './TheForm.vue';
import GitHubRepo from './GitHubRepo.vue';
import { ref, reactive } from 'vue';

const urlApi = ref('https://api.github.com/users/');
const user = reactive({
  login: '',
  name: '',
  urlAvatar: '',
  urlUser: '',
  hireable: null,
  createdDate: '',
  email: null,
  twitter: null,
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
  const response = await fetch(urlApi.value + user.login);
  if (response.ok) {
    let data = await response.json();
    user.login = data.login;
    user.name = data.name;
    user.urlAvatar = data.avatar_url;
    user.urlUser = data.html_url;
    user.hireable = data.hireable;
    user.createdDate = data.created_at;
    user.email = data.email;
    user.twitter = data.twitter_username;
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
  const response = await fetch(urlApi.value + user.login + '/repos');
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
  <section>
    <!-- Form -->
    <div class="width-600 mx-auto mb-5">
      <!-- Form -->
      <the-form :user="user" @get-user="getUser"></the-form>
      <!-- Error -->
      <div v-if="errorOn" class="alert alert-warning mt-2" role="alert">{{ errorMessage }}</div>
    </div>
  </section>

  <section>
    <div>
      <!-- User Card -->
      <the-card :user="user" @get-repos="getRepos"></the-card>

      <!-- User repos     -->
      <div v-if="showRepos">
        <git-hub-repo :repos="user.repos"></git-hub-repo>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
