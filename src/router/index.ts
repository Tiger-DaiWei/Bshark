import Vue from 'vue';
import VueRouter from 'vue-router';
import { portalRoutes } from './portal';
import { manageRoutes } from './manage';
import { mallRoutes } from './mall';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...portalRoutes,
    ...manageRoutes,
    ...mallRoutes,
  ],
});

export default router;
