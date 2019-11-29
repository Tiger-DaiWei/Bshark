import Vue from 'vue';
import App from './App.vue';

// 默认样式
import './styles/base.css';

// lodash
import './plugins/lodash';
// moment
import './plugins/moment';
// filter
import './filters/index';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
