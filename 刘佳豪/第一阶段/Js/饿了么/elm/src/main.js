import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "lib-flexible"

Vue.prototype.axios = axios;
Vue.prototype.VueAxios = VueAxios;
axios.defaults.baseURL = "https://elm.cangdu.org";
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
