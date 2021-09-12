<template>
  <form class="container" action="./index.php" method="post">
    <div class="h1 mt-5">Numbers</div>
    <div class="d-grid gap-2 col-6 mx-auto mb-2 mt-2">
      <label for="inputStartNumber" class="form-label">Start number</label>
      <input
        type="number"
        min="1"
        name="start"
        class="form-control"
        id="inputStartNumber"
        v-model="numberList.startNumber"
      />
    </div>
    <br />
    <div class="d-grid gap-2 col-6 mx-auto mb-5">
      <label for="inputEndtNumber" class="form-label">End number</label>
      <input
        type="number"
        min="2"
        max="2000"
        name="end"
        class="form-control"
        id="inputEndtNumber"
        v-model="numberList.endNumber"
      />
    </div>
    <div class="h1 mt-5 mb-5">Text Replace Customization</div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Replace for</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="number"
              required="required"
              min="1"
              name="replaceNumber1"
              class="form-control"
              id="inputEndtNumber"
              v-model="numberList.firstReplaceNumber"
            />
          </td>
          <td>
            <input
              type="string"
              required="required"
              name="replaceText1"
              class="form-control"
              id="inputEndtNumber"
              v-model="numberList.firstReplaceText"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              required="required"
              min="1"
              name="replaceNumber2"
              class="form-control"
              id="inputEndtNumber"
              v-model="numberList.secondReplaceNumber"
            />
          </td>
          <td>
            <input
              type="string"
              required="required"
              name="replaceText2"
              class="form-control"
              id="inputEndtNumber"
              v-model="numberList.secondReplaceText"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Common Multiple Text</label>
          </td>
          <td>
            <input
              type="string"
              required="required"
              name="commonMultipleText"
              class="form-control"
              id="inputEndtNumber"
              v-model="numberList.commonMultipleText"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 col-8 mx-auto mt-5">
      <router-link class="btn btn-success mb-5" to="/number_list"
        >Go for it!</router-link
      >
      <!-- <button class="btn btn-success mb-5" type="submit">Go for it!</button> -->
    </div>
  </form>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    let numberList = inject("numberList");

    return {
      numberList,
    };
  },
};
</script>

<style>
</style>