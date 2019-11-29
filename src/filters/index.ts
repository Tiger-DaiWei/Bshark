import Vue from 'vue';
import moment from 'moment';

// 转为日期
Vue.filter('day', (value: any) => {
  if (!value) return '';
  return moment(value).format('YYYY-MM-DD');
});

// 转化为小时
Vue.filter('hour', (value: any) => {
  if (!value) return '';
  return moment(value).format('YYYY-MM-DD HH:mm:ss');
});