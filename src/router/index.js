import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { auth } from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      title: 'Login to ToDo App'
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    props: true,
    meta: {
      title: 'Edit ToDo'
    }
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue'),
    props: true,
    meta: {
      title: 'New ToDo'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

// Make sure user is logged in before moving
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if(requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router
