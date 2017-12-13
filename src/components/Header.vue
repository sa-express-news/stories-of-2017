<template>
  <header>
    <div class="en-share">
        <div class="logo">
            <a href="http://expressnews.com">
                <img src="https://s3.amazonaws.com/projects.expressnews.com/spurs-nation/img/en-logo-white.svg" alt="San Antonio Express-News">
            </a>
        </div>
        <div class="share">
            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.expressnews.com/spurs-nation/" title="Share Spurs Nation on Facebook" class="facebook" target="_blank"></a>
            <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.expressnews.com%2Fspurs-nation%2F&text=Spurs%20Nation&via=expressnews" title="Share Spurs Nation on Twitter" class="twitter" target="_blank"></a>
            <a href="mailto:?body=Spurs%20Nation%20from%20the%20Express-News&amp;subject=Spurs Nation" title="Share Spurs Nation via email" class="mail"></a>
        </div>
    </div>
  <div class="title">
  <h2>The stories of 2017</h2>
  <p>Here is some chatter that not the developer should write. A couple sentences will do.</p>
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
.en-share .logo {
  -ms-flex-preferred-size: 40%;
  flex-basis: 40%;
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
  -ms-flex-preferred-size: 60%;
  flex-basis: 60%;
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
  font-size: 18px;
}

header .title {
  margin-left: 0.75em;
}
</style>
