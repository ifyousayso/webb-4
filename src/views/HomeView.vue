<script>
  export default {
    created() {
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          this.repos = JSON.parse(xhr.responseText);
        }
      };

      xhr.open("GET", "https://api.github.com/users/hesa/repos", true);
      xhr.send();
    },
    computed: {
      numberOfRepos() {
        return this.repos.length;
      }
    },
    data() {
      return {
        repos: []
      };
    }
  };
</script>

<template>
  <main>
    <h1>Home</h1>

    <ol v-if="repos.length !== 0">
      <li :key="repo.id" v-for="repo in repos">{{ repo.name }}</li>
    </ol>

    <p>Number of repos: {{ numberOfRepos }}.</p>
  </main>
</template>
