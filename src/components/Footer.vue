<template>
  <footer>
    <span class="logo"/>
    <ul>
        <li>
            <a href="http://www.hearst.com/newspapers/san-antonio-express-news">Our Company</a>
        </li>
        <li>
            <a href="http://www.aboutads.info/choices/">Ad Choices</a>
        </li>
        <li>
            <a href="http://www.mysanantonio.com/careers/">Careers</a>
        </li>
        <li>
            <a href="http://digital.olivesoftware.com/Olive/ODN/SanAntonioExpressNews/Default.aspx">e-edition</a>
        </li>
        <li>
            <a href="http://www.expressnews.com/terms_of_use/">Terms of Use</a>
        </li>
        <li>
            <a href="http://www.hearstmediasa.com/">Advertising</a>
        </li>
        <li>
            <a href="/privacy_policy/">Privacy Policy</a>
        </li>
        <li>
            <a href="/privacy_policy#your_rights">Your Privacy Rights</a>
        </li>
        <li>
            <a href="/privacy_policy/#caprivacyrights">Your California Privacy Rights</a>
        </li>
        <li>
            <span>© 2017 Hearst Corporation</span>
        </li>
    </ul>
</footer>
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
footer {
  background: #000;
  color: #fff;
  float: left;
  font-size: 14px;
  line-height: 19px;
  padding: 36px 18px;
  width: calc(100% - 36px);
}
footer .logo {
  background: url("http://www.expressnews.com/img/logo.svg");
  background-position: 0 -43px;
  background-size: 213px 64px;
  display: block;
  height: 21px;
  width: 213px;
}
footer ul {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
footer ul li:nth-of-type(even):after {
  content: "\A";
  white-space: pre;
}
footer ul li a {
  color: #fff;
  display: inline-block;
  margin: 12px 16px 0 0;
  text-decoration: none;
}
footer ul li a:hover,
footer ul li a:link,
footer ul li a:visited {
  color: #fff;
}
footer ul li span {
  color: #fff;
  display: inline-block;
  margin: 12px 16px 0 0;
}
</style>
