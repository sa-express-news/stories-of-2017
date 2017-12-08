<template>
<div>
  <story v-for="story in stories"
  :image='story.image'
  :headline='story.headline'
  :byline='story.byline'
  :chatter='story.chatter'
  :key='story.id'/>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Story from "./Story.vue";

export default Vue.extend({
  components: {
    Story
  },
  data() {
    return {
      stories: [
        {
          image: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
          headline: "Story A",
          byline: "Kia",
          chatter: "So good",
          id: Math.random()
        },
        {
          image: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
          headline: "Story B",
          byline: "Other dude",
          chatter: "So bad",
          id: Math.random()
        }
      ]
    };
  }
});
</script>