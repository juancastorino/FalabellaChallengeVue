
<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
    crossorigin="anonymous"
  />

  <router-view />
</template>

<script>
import { provide, reactive } from "@vue/runtime-core";
export default {
  setup() {
    provide(
      "numberList",
      reactive({
        startNumber: 1,
        endNumber: 100,
        firstReplaceNumber: 3,
        firstReplaceText: "Falabella",
        secondReplaceNumber: 5,
        secondReplaceText: "IT",
        commonMultipleNumber: 15,
        commonMultipleText: "Integraciones",
      })
    );
  },
};
</script>

<style>
</style>
