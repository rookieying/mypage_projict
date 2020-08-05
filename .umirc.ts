import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/homepage', component: '@/components/homepage' },
    { exact: true, path: '/main', component: '@/pages/mainpage' },
    { exact: true, path: '/contact', component: '@/pages/contactpage' },
    { exact: true, path: '/maintwo', component: '@/pages/maintwopage' },
    { exact: true, path: '/last', component: '@/pages/lastpage' },
    { exact: true, path: '/indexpage', component: '@/pages/indexpagepage' }
  ],
});
