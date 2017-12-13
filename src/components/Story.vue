<template>
        <div class='story'>
          <div class="photo">
            <img :src="image"/>
          </div>
          <div class="info">
              <h6>{{headline}}</h6>
              <p class="chatter">{{chatter}}</p>
            </div>
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
    chatter: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
.story img {
  width: 100%;
}

.story h6 {
  margin: 0;
}

.story h6 {
  font-size: 18px;
}

.story .chatter {
  line-height: 1.4;
}

@media (max-width: 699px) {
  .story .info {
    margin-left: 0.75em;
  }

  .story h6 {
    margin-top: 0.75em;
  }
}

@media (min-width: 700px) {
  .story {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .story .photo {
    flex-basis: 55%;
  }
  .story .info {
    flex-basis: 40%;
  }
}

@media (min-width: 1000px) {
  .story img {
    /* max-width: 500px; */
  }
}
</style>
