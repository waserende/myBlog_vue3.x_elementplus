import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Blog = () => import('../views/Blog.vue');
const Cover = () => import('../views/Cover.vue');
const Register = () => import('../views/Register.vue');
const Login = () => import('../views/Login.vue');
const Navbar = () => import('../views/Navbar.vue');
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
    // components: {
    //   default: Home,
    //   Navbar,
    // },
    children: [
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/login',
        component: Login,
      },
    ],

  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register,
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   components: {
  //     default: Login,
  //     Navbar,
  //   },
  // },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
