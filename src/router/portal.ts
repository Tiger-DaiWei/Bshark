import { RouteConfig } from 'vue-router';
import Index from '@/views/Portal/index.vue';
// 无需权限路由
export const portalRoutes: RouteConfig[] = [
  {
    path: '/portal',
    name: 'index',
    component: Index,
  },
];
