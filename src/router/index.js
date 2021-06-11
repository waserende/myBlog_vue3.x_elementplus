import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Blog = () => import('../views/Blog.vue');
const Cover = () => import('../views/Cover.vue');

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Cover,
  },
  {
    path: '/cover',
    name: 'Cover',
    component: Cover,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
