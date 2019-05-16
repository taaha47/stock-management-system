import Vue from 'vue';
import Router, {Route} from 'vue-router';
import demo from "./components/demo/demo.vue"
import Login from "./components/Login/Login.vue";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

function requireAuth(to: Route, from: Route, next: any) {
  if (store.getters.activeUser !== "") {
    store.getters.isAdmin
      ? next()
      : next("/login");
  } else {
    next("/login");
  }
}

let router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: demo
    }
  ]
});

export default router;
