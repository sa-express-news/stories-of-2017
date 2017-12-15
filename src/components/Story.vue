<template>
  <div class="story-container">
    <div class="story">
      <div class="photo">
        <img :src="image">
      </div>
      <div class="info">
        <a
          :href="link"
          :title="headline">
          <h6>{{ headline }}</h6>
        </a>
        <p class="chatter">{{ chatter }}</p>
      </div>
    </div>
    <div class="border"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true
    },
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
.story {
  font-family: Georgia, serif;
}
.story img {
  width: 100%;
}

.story h6 {
  font-size: 18px;
  margin: 0;
}

.story a {
  color: inherit;
}

.story .chatter {
  line-height: 1.5;
}

@media (max-width: 699px) {
  .story .info {
    /* margin-left: 0.75em; */
    margin: 0 auto;
    width: 96%;
  }

  .story h6 {
    margin-top: 0.75em;
  }
}

@media (min-width: 700px) and (max-width: 999px) {
  .story {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .story .photo {
    flex-basis: 45%;
  }
  .story .info {
    flex-basis: 50%;
  }

  .story-container .border {
    border-bottom: 1px solid #e5e5e5;
    margin: 0 auto;
    padding-top: 2%;
    width: 50%;
  }
}

@media (max-width: 999px) {
  .story-container {
    margin: 4% 0;
  }
}

@media (min-width: 1000px) {
  .story-container {
    flex-basis: 48%;
    padding: 0.75em 0;
  }

  .info {
    margin-top: 0.75em;
  }
}
</style>
