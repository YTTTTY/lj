import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './css/base_px.css';
import axios from 'axios';
import vueCookie from 'vue-cookie';
Vue.use(vueCookie);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
