<template>
  <div class="app">
    <app-header />
    <storylist />
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./Header.vue";
import StoryList from "./StoryList.vue";
import AppFooter from "./Footer.vue";

export default Vue.extend({
  components: {
    storylist: StoryList,
    appHeader: AppHeader,
    appFooter: AppFooter
  }
});
</script>

<style>
.app {
  width: 100%;
}
</style>

