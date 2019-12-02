import { RouteConfig } from 'vue-router';
import Index from '../views/index.vue';
import About from '../views/About.vue';
// 无需权限路由
export const commonRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];
