"use strict";

var Vue = require("vue/dist/vue.js");

Vue.component("chat", require("./components/chat.vue"));
Vue.component("anmelden", require("./components/Anmelden.vue"));
var app = new Vue({
  el: "#app"
});