require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from "vue-axios";
import axios from 'axios'
let AppLayout = require('./components/App')
const Posts = Vue.component('Posts', require('./components/Posts.vue').default)
const CreatePost = Vue.component('CreatePost', require('./components/CreatePost.vue').default)
const UpdatePost = Vue.component('UpdatePost', require('./components/UpdatePost.vue').default)
const ViewPost = Vue.component('ViewPost', require('./components/ViewPost.vue').default)


Vue.use(VueRouter, VueAxios, axios);

const routes = [
   {
      name: 'Posts',
      path: '/',
      component: Posts
   },
   {
      name: 'CreatePost',
      path: '/create-post',
      component: CreatePost
   },
   {
      name: 'UpdatePost',
      path: '/update/:id',
      component: UpdatePost
   },
   {
      name: 'ViewPost',
      path: '/view/:id',
      component: ViewPost
   },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app')
