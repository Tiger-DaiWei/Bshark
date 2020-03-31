import { RouteConfig } from 'vue-router';
import Index from '../views/index.vue';
// 无需权限路由
export const commonRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];
