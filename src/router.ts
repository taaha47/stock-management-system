import Vue from 'vue';
import Router from 'vue-router';
import demo from "./components/demo/demo.vue"
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login/Login.vue";

Vue.use(Router);

let router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      props: {
        msg: "It was childish to feel disappointed, but childishness comes almost as naturally to a man as to a child"
      }
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
      path: '/dashboard',
      name: 'dashboard',
      component: demo,
      meta: {
        requiresAuth: true
      }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: demo
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
