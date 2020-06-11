import { RouteConfig } from 'vue-router';
import Index from '@/views/Manage/index.vue';
// 无需权限路由
export const manageRoutes: RouteConfig[] = [
  {
    path: '/manage',
    name: 'Index',
    component: Index,
  },
];
