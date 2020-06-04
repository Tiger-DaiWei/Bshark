import Vue from 'vue';
import App from './App.vue';

// element-ui
import ElementUI from 'element-ui';
// echart
import Echart from 'echarts';

// 默认样式
import './styles/base.css';
import 'element-ui/lib/theme-chalk/index.css';

// lodash
import './plugins/lodash';
// moment
import './plugins/moment';
// filter
import './filters/index';
// utils
import './utils/index';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$echarts = Echart;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
