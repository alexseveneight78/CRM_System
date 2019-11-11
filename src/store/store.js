import Vue from "vue";
import Vuex from "vuex";

import companyStructure from "./modules/companyStructure/companyStructure";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    companyStructure
  }
});
