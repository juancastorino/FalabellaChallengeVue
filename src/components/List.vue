<template>
  <div class="container mt-5 mb-5">
    <div class="h1">Numbers</div>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Input number</th>
          <th scope="col">After Replace</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(numberReplaced, number) in list" :key="number">
          <tr v-if="number >= numberList.startNumber">
            <td>{{ number }}</td>
            <td>{{ numberReplaced }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div class="container d-flex justify-content-center">
    <router-link class="col-5 navbar-brand btn btn-success mb-5" to="/"
      >Go back</router-link
    >

    <a
      class="col-5 navbar-brand btn btn-danger mb-5"
      href="https://github.com/juancastorino/FalabellaChallengeVue"
      >Go to Github</a
    >
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

export default {
  name: "List",

  setup() {
    let numberList = inject("numberList");

    const commonMultiple =
      numberList.firstReplaceNumber * numberList.secondReplaceNumber;
    let list = [];
    let stringsToReplace = [];
    stringsToReplace[numberList.firstReplaceNumber] =
      numberList.firstReplaceText;
    stringsToReplace[numberList.secondReplaceNumber] =
      numberList.secondReplaceText;
    stringsToReplace[commonMultiple] = numberList.commonMultipleText;

    let currentNumber = numberList.startNumber;
    for (
      numberList.startNumber;
      currentNumber <= numberList.endNumber;
      currentNumber++
    ) {
      let replace = currentNumber;
      stringsToReplace.forEach((replaceText, replaceNumber) => {
        replace = currentNumber % replaceNumber == 0 ? replaceText : replace;
      });

      list[currentNumber] = replace;
    }

    return {
      numberList,
      list,
    };
  },
};
</script>

<style>
</style>