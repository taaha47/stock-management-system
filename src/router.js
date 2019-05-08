import Vue from 'vue';
import Router from 'vue-router';
import demo from './components/demo/demo';
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: demo
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
