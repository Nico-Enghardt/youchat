"use strict";

var Vue = require("vue/dist/vue.js");

var VueRouter = require("vue-router/dist/vue-router.js");

var chat = require("./views/chat.vue");

var anmeldung = require("./views/anmeldung.vue");

var register = require("./views/register.vue");

Vue.use(VueRouter);
var routes = [{
  path: '/',
  name: 'Chat',
  component: chat
}, {
  path: '/login',
  name: 'Anmeldung',
  component: anmeldung
}, {
  path: '/register',
  name: 'Registrierung',
  component: register
}];
var router = new VueRouter({
  routes: routes
});
module.exports = router;