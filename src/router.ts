import Vue from 'vue';
import Router, {Route} from 'vue-router';
import demo from "./components/demo/demo.vue"
import Login from "./components/Login/Login.vue";
import Home from "./views/Home.vue";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout.vue";
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
      name: 'dashboard-layout',
      component: DashboardLayout,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: demo
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
});

export default router;
