// ./src/router/index.js
// import Vue from 'vue';
// import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Admin from '@/pages/Admin';

// Vue.use(Router);

export const routes = [{
  path: '/',
  component: Home,
  children: [],
}, {
  path: '/admin',
  name: 'Admin',
  component: Admin,
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart,
}, ];