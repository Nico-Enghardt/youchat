var Vue = require("vue/dist/vue.js");
var VueRouter = require("vue-router/dist/vue-router.js");
var chat = require("./views/chat.vue");
var anmeldung = require("./views/anmeldung.vue");
var register = require("./views/register.vue");
var mainwindow = require("./views/main.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Anmeldung',
    component: anmeldung,
  },
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/register',
    name: 'Registrierung',
    component: register,
  },
  {
    path: '/main',
    name: 'Hauptmenü',
    component: mainwindow,
  },
  {
    path: '/chat/:chatId',
    name: 'Chat',
    component: chat,
  }
]

const router = new VueRouter({
  routes
})

module.exports = router;