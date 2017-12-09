<template>
<div class="story-list">
  <swipe-container :swipe-forward-func="this.incrementStoryIndex" :swipe-back-func="this.decrementStoryIndex">
    <div class="story-container">
    <transition v-bind:name="this.transition">
      <story :key='currentStoryIndex'
      :image='stories[currentStoryIndex].image'
      :headline='stories[currentStoryIndex].headline'
      :byline='stories[currentStoryIndex].byline'
      :chatter='stories[currentStoryIndex].chatter' />
    </transition>
    </div>
  </swipe-container>
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
.story-list {
  position: relative;
}

.story-container .story {
  left: 0;
  position: absolute;
  top: 0;
}

.forward-enter,
.back-enter {
  opacity: 0;
}

.forward-enter-to,
.back-enter-to {
  opacity: 1;
}

.forward-leave,
.back-leave {
  opacity: 1;
}

.forward-enter-active,
.back-enter-active {
  transition: all 0.5s linear;
}

.forward-leave-active,
.back-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.5s, 0.8s;
  transition-timing-function: linear;
}

.forward-leave-to,
.back-leave-to {
  opacity: 0;
}

.forward-leave-to {
  transform: rotate(-330deg);
  transform-origin: top left;
}

.back-leave-to {
  transform: rotate(330deg);
  transform-origin: top left;
}
</style>
