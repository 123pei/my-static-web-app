import Vue from 'vue';
import App from '@/app.vue';
import * as echarts from 'echarts';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
