// ./src/router/index.js
// import Vue from 'vue';
// import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
// Admin Components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

// Vue.use(Router);

export const routes = [{
  path: '/',
  component: Home,
  children: [],
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart,
}, {
  path: '/admin',
  name: 'Admin',
  // Parent routes still has a component
  component: Index,
  // Child routes
  children: [{
      path: 'new',
      name: 'New',
      component: New
    },
    {
      path: '',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}];