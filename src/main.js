import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import { routes } from "./router/index";

Vue.use(Router);

Vue.config.productionTip = false

const router = new Router({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')