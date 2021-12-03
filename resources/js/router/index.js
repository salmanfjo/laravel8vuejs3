import { createRouter, createWebHistory } from "vue-router";
import Postindex from "../components/post/Postindex.vue";
import PostCreate from "../components/post/PostCreate.vue";
import PostEdit from "../components/post/PostEdit.vue";
import PostShow from "../components/post/PostShow.vue";
import Login from "../components/auth/Login.vue";

const  routes = [
    {
        path: '/',
        name: 'home',
        component: Postindex
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostCreate
    },
    {
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component: PostEdit,
        props: true
    },
    {
        path: '/post/show/:id',
        name: 'post.show',
        component: PostShow,
        props: true
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
    },
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Login
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})