import {
  createWebHistory,
  createRouter,
} from 'vue-router';

import LoginComponent from "@/views/LoginView.vue"
import SecureComponent from "@/views/SecureView.vue"


//import Vue from 'vue'
//import VueRouter from 'vue-router'
//Vue.use(VueRouter)

//import Home from '@/views/Home.vue';

/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/secure',
    name: 'Secure',
    component: function () {
      return import('../views/Secure.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  }
];
*/
const routes = [
{
  path: '/',
  redirect: {
      name: "login"
  }
},
{
  path: "/login",
  name: "login",
  component: LoginComponent
},
{
  path: "/impozit",
  name: "secure",
  component: SecureComponent
}
];

/*
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
*/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
