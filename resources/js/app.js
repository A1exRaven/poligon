require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from "vue-axios";
import axios from 'axios'
let AppLayout = require('./components/App')
const Posts = Vue.component('posts',require('./components/Posts'))
const CreatePost = Vue.component('createPost',require('./components/CreatePost'))
const UpdatePost = Vue.component('updatePost',require('./components/UpdatePost'))
const ViewPost = Vue.component('viewPost',require('./components/ViewPost'))

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
