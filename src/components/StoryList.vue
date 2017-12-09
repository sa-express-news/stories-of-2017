<template>
<div>
  <story
  :image='stories[currentStoryIndex].image'
  :headline='stories[currentStoryIndex].headline'
  :byline='stories[currentStoryIndex].byline'
  :chatter='stories[currentStoryIndex].chatter' />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Story from "./Story.vue";
import stories from "../stories";

export default Vue.extend({
  components: {
    Story
  },
  data() {
    return {
      stories: stories,
      currentStoryIndex: 0
    };
  },
  methods: {
    incrementStoryIndex: function() {
      if (this.currentStoryIndex === this.stories.length) {
        this.currentStoryIndex = 0;
      } else {
        this.currentStoryIndex++;
      }
    },
    decrementStoryIndex: function() {
      if (this.currentStoryIndex === 0) {
        this.currentStoryIndex = this.stories.length;
      } else {
        this.currentStoryIndex--;
      }
    }
  }
});
</script>