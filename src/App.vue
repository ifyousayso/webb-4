<script>
  import ImageButton from "./components/ImageButton.vue";

  export default {
    components: {
      ImageButton
    }
  };
</script>

<template>
  <ImageButton />
  <nav>
    <ul>
      <li>
        <RouterLink to="/">home</RouterLink>
      </li>
      <li>
        <RouterLink to="/away/0">away 0</RouterLink>
      </li>
      <li>
        <RouterLink to="/away/1">away 1</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
