import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore";
import categoriesStore from "./modules/categoriesStore";
import productsStore from "./modules/productsStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    userStore,
    categoriesStore,
    productsStore
  }
});