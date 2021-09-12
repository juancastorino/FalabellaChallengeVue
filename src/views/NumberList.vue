<template>
  <div class="NumberList">
    <Navbar isWelcome="false" />
    <List />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import List from "@/components/List/";

export default {
  components: {
    Navbar,
    List,
  },
};
</script>
