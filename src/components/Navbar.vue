<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <img
        src="localhost/public/images/falabella_logo.svg"
        alt="fallabella"
        width="200"
        height="auto"
      />
      <div v-if="props.isWelcome == 'true'">
        <a
          class="navbar-brand"
          href="https://github.com/juancastorino/FalabellaChallengeVue"
          >by Juan Castorino</a
        >
      </div>
      <div v-else>
        <router-link class="navbar-brand btn btn-light text-secondary" to="/"
          >Go back</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isWelcome: String,
  },
  setup(props) {
    return { props };
  },
};
</script>

<style>
</style>