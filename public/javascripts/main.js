var Vue = require("vue/dist/vue.js");
var router = require("./router.js")
var store = require("./vuex-store")

const app = new Vue({
  router: router,
  store: store,
  el: "#app"
});

