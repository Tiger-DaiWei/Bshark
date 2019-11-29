import Vue from 'vue';
import VueRouter from 'vue-router';
import { commonRoutes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes,
});

export default router;
