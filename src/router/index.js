import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    // meta:{title: 'Home', requiresAuth: true}
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta:{title: 'Login'}
  },
  {
    path: '/daftar-ternak',
    name: 'daftar-ternak',
    component: () => import('../views/DaftarTernakView.vue'),
    meta:{title: 'Daftar Ternak'}
  },
  {
    path: '/hewan-baru',
    name: 'hewan-baru',
    component: () => import('../views/HewanBaruView.vue'),
    meta:{title: 'Hewan Baru'}
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title);
  if (to.path === '/' && auth.currentUser) {
    next('/home');
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/')
    return;
  }
  next();
})

export default router
