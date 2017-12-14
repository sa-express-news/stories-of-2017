<template>
  <div class="story-list">
    <story
      v-for="(story, index) in stories"
      :link="story.link"
      :image="story.image"
      :headline="story.headline"
      :chatter="story.chatter"
      :key="index"/>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import SwipeContainer from "./SwipeContainer.vue";
import Story from "./Story.vue";
import stories from "../stories";

export default Vue.extend({
  components: {
    Story,
    SwipeContainer
  },
  data() {
    return {
      stories: stories,
      currentStoryIndex: 0,
      transition: ""
    };
  },
  methods: {
    incrementStoryIndex: function() {
      this.transition = "forward";
      if (this.currentStoryIndex === this.stories.length - 1) {
        this.currentStoryIndex = 0;
      } else {
        this.currentStoryIndex++;
      }
    },
    decrementStoryIndex: function() {
      this.transition = "back";
      if (this.currentStoryIndex === 0) {
        this.currentStoryIndex = this.stories.length - 1;
      } else {
        this.currentStoryIndex--;
      }
    }
  }
});
</script>

<style>
@media (max-width: 699px) {
}

@media (min-width: 700px) {
  /* .story-list {
    margin: 0 auto;
    width: 96%;
  } */
  .story-container .story {
    left: 2%;
    margin: 0 auto;
    width: 96%;
  }
}

@media (min-width: 1000px) {
  .story-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
}
</style>
