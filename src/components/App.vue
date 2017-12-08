<template>
  <div class="app">
      <story headline="Best story" image="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg" byline="Yo Mama" chatter="Read this story!"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Story from "./Story.vue";

export default Vue.extend({
  components: {
    story: Story
  }
});
</script>

<style>
.app {
  width: 100%;
}
</style>

