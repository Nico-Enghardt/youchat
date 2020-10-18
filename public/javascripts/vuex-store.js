const Vue = require("vue") ;
const Vuex = require("vuex") ;

Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
      message:"Have a nice day!"
  },
  mutations: {},
  actions: {},
  modules: {}
});
