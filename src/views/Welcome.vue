<template>
  <div class="home">
    <Navbar isWelcome="true" />
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Navbar,
  },
  setup() {
    return {};
  },
};
</script>
