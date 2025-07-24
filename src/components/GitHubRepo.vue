<template>
  <table class="table table-hover table-responsive table-sm mx-auto my-3">
    <thead>
      <tr>
        <th scope="col">{{ $t('reposTable.reposName') }}</th>
        <th scope="col">{{ $t('reposTable.lastUpdate') }}</th>
        <th scope="col">{{ $t('reposTable.primeLang') }}</th>
        <th scope="col">gh-pages</th>
        <th scope="col">forks</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="repo in repos" :key="repo.id">
        <td>
          <a
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
            :title="repo.description"
            >{{ repo.name }}</a
          >
        </td>
        <td>{{ formattedDate(repo) }}</td>
        <td>{{ repo.language }}</td>
        <td>
          <a :href="ghPagesLink(repo)" target="_blank" rel="noopener noreferrer">{{
            ghPagesLink(repo)
          }}</a>
        </td>
        <td>{{ repo.forks_count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps(['repos']);

const formattedDate = (repo) => {
  const date = new Date(Date.parse(repo.updated_at));
  return date.toLocaleDateString();
};

const ghPagesLink = (repo) => {
  return repo.has_pages ? `https://${repo.owner.login}.github.io/${repo.name}` : '-';
};
</script>
