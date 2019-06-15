import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/user.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue'),
    }, {
      path: '/newFoomNav',
      name: 'newFoomNav',
      component: () => import(/* webpackChunkName: "about" */ './components/newFoomNav.vue'),
    }, {
      path: '/rentRoomNav',
      name: 'rentRoomNav',
      component: () => import(/* webpackChunkName: "about" */ './components/rentRoomNav.vue'),
    }, {
      path: '/secondRoomNav',
      name: 'secondRoomNav',
      component: () => import(/* webpackChunkName: "about" */ './components/secondRoomNav.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "about" */ './views/details.vue'),
    },

  ],
});
