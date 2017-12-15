<template>
  <header>
    <div class="en-share">
      <div class="logo">
        <a href="/">
          <img
            src="https://s3.amazonaws.com/projects.expressnews.com/spurs-nation/img/en-logo-white.svg"
            alt="San Antonio Express-News">
        </a>
      </div>
      <div class="share">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.expressnews.com/stories-of-2017/"
          title="Share the stories of 2017 on Facebook"
          class="facebook"
          target="_blank"/>
        <a
          href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.expressnews.com%2Fstories-of-2017%2F&text=The%20stories%20of%202017&via=expressnews"
          title="Share the stories of 2017 on Twitter"
          class="twitter"
          target="_blank"/>
        <a
          href="mailto:?body=The%20stories%20of%202017%2C%20from%20the%20San%20Antonio%20Express-News&amp;subject=The stories of 2017"
          title="Share the stories of 2017 via email"
          class="mail"/>
      </div>
    </div>
    <div class="title">
      <h2>The stories of 2017</h2>
      <p>By the San Antonio Express-News</p>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  }
});
</script>

<style>
/* header .icon {
  height: 45px;
  width: 45px;
} */

header .logo {
  width: 95%;
}

/* header div {
  margin-left: 0.75em;
} */

.en-share {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  width: 100%;
  background: #111;
  min-height: 40px;
}

.en-share .logo img {
  width: 78%;
  padding-left: 0.5em;
  max-width: 400px;
}
.en-share .share {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.share img {
  height: 23px;
}
.share img {
  -ms-flex-item-align: end;
  align-self: flex-end;
  -ms-flex-preferred-size: 15%;
  flex-basis: 15%;
}
.spurs-nation-header > a,
.spurs-nation-header > a:visited,
.spurs-nation-header > a:hover {
  text-decoration: none;
  color: inherit;
}
.share a {
  background: url("http://ww1.hdnux.com/photos/53/52/26/11445656/8/rawImage.png")
    0 0 no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
  background-size: auto auto;
  background-size: 264px 88px;
  display: block;
  float: left;
  height: 44px;
  margin: 0;
  width: 44px;
}
.share a.facebook {
  background-position: -88px 0;
}
.share a.twitter {
  background-position: -132px 0;
}
.share a.mail {
  background-position: -176px 0;
}
.title p {
  font-size: 17px;
  font-style: italic;
  margin-top: 0.75em;
}

header .title {
  margin: 0.75em auto;
  width: 96%;
}

header h2 {
  letter-spacing: normal;
  text-transform: none;
  font-size: 30px;
}

@media (min-width: 1000px) {
  header .title {
    text-align: center;
  }
  header h2 {
    font-size: 45px;
  }

  .title p {
    font-size: 19px;
  }
}
</style>
