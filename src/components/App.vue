<template>
  <div class="app">
      <storylist />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StoryList from "./StoryList.vue";

export default Vue.extend({
  components: {
    storylist: StoryList
  }
});
</script>

<style>
.app {
  width: 100%;
}
</style>

