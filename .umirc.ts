import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/main', component: '@/components/main' },
    { exact: true, path: '/contact', component: '@/components/contact' },
    { exact: true, path: '/maintwo', component: '@/components/maintwo' },
    { exact: true, path: '/last', component: '@/components/last' },
    { exact: true, path: '/indexpage', component: '@/components/indexpage' }
  ],
});
