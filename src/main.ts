import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from "./store";
import {registerIpcRendererChannel} from "./IpcRendererChannelManager";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

registerIpcRendererChannel(store);
