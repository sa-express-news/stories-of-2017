import Vue from "vue";
import App from './components/App.vue';

const v = new Vue({
    el: "#root",
    template: `
        <app></app>
    `,
    components: {
        App
    }
});
