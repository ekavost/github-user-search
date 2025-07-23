<script setup>
import { computed } from 'vue';

const props = defineProps(['user']);
defineEmits(['getRepos']);

const formattedDate = computed(() => {
  const date = new Date(Date.parse(props.user.createdDate));
  return date.toLocaleDateString();
});
</script>

<template>
  <Transition :duration="550" name="polaroid">
    <div v-if="user.userExists" class="width-600 card container mx-auto px-2 py-3">
      <div class="row">
        <div class="col-5">
          <img style="max-width: 100%" :src="user.urlAvatar" alt="user-avatar" />
        </div>
        <div class="col-7">
          <div class="d-flex flex-column" style="height: 100%">
            <div class="mb-auto">
              <h3 class="card-title">@{{ user.login }}</h3>
              <p v-show="user.name" class="mb-0">{{ user.name }}</p>
              <span class="font-smaller text-secondary">
                ({{
                  $i18n.locale === 'English'
                    ? 'Since'
                    : $i18n.locale === 'Español'
                    ? 'Desde'
                    : 'Начиная с'
                }}
                <i>{{ formattedDate }}</i
                >)
              </span>
            </div>
            <button @click="$emit('getRepos')" type="button" class="btn btn me-3 mt-auto">
              {{ $t('btnRepos') }}
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div class="row d-flex flex-row text-orange">
        <div class="col">
          <div v-if="user.email">
            <a href="mailto:{{ user.email }}">@ {{ user.email }}</a>
          </div>
          <div v-if="user.twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
            <a
              class="ps-2"
              :href="`http://x.com/${user.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              >{{ user.twitter }}</a
            >
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
            <a class="ps-2" :href="user.urlUser" target="_blank" rel="noopener noreferrer"
              ><b>{{ user.urlUser.slice(8) }}</b></a
            >
          </div>
        </div>

        <div v-show="user.hireable">
          <span class="tag px-2 py-1 me-2 rounded-5">{{ $t('hireable') }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.card.row {
  width: 25rem;
}
.polaroid-enter-active,
.polaroid-leave-active {
  transition: all 2.5s ease-out;
}

.polaroid-enter-from,
.polaroid-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.tag {
  color: white;
  background-color: rgb(151, 197, 87);
  font-size: 0.7rem;
  font-weight: 600;
}

.font-smaller {
  font-size: 0.8rem;
}

.text-orange,
.text-orange a {
  color: #ff9c2bff;
}

button {
  color: #ff9c2bff !important;
  border: 1px solid #ff9c2bff;
}
button:hover {
  font-weight: 600;
  border: 1px solid #ff9c2bff;
}

button:active {
  border: 2px solid #ff9c2bff;
}
a:hover {
  text-decoration: underline;
}
</style>
