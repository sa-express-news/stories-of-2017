<template>
        <div class='story'>
          <img :src="image"/>
            <h6>{{headline}}</h6>
            <p class="byline">{{byline}}</p>
            <p class="chatter">{{chatter}}</p>
        </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    byline: {
      type: String,
      required: true
    },
    chatter: {
      type: String,
      required: true
    }
  }
});
</script>
