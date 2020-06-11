import { RouteConfig } from 'vue-router';
import Index from '@/views/Mall/index.vue';
// 无需权限路由
export const mallRoutes: RouteConfig[] = [
  {
    path: '/mall',
    name: 'Index',
    component: Index,
  },
];
