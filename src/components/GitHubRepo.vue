<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <a :href="urlRepo" target="_blank" :title="description" class="p-3">{{ repoName }}</a>
      </div>
      <span class="badge bg-primary rounded-pill">{{ forksCount }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps(['repoName', 'urlRepo', 'description', 'forksCount']);
</script>
