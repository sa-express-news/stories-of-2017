<template>
    <div
    v-on:touchstart="handleTouchStart"
    v-on:touchend="handleTouchEnd">
        <slot>
        </slot>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    swipeBackFunc: {
      type: Function,
      required: true
    },
    swipeForwardFunc: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      touchStartX: null,
      touchStartY: null,
      lastTouch: new Date()
    };
  },
  methods: {
    handleTouchStart: function(event: TouchEvent) {
      const { screenX, screenY } = event.touches[0];
      this.touchStartX = screenX;
      this.touchStartY = screenY;
    },
    handleTouchEnd: function(event: TouchEvent) {
      const { touchStartX, touchStartY } = this;
      if (touchStartX === null || touchStartY === null) return;

      const { screenX, screenY } = event.changedTouches[0];

      if (touchStartX - screenX >= 75) {
        this.swipeForwardFunc();
      } else if (screenX - touchStartX >= 75) {
        this.swipeBackFunc();
      }
    }
  }
});
</script>
