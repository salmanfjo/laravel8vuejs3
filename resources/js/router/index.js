import { createRouter, createWebHistory } from "vue-router";
import Postindex from "../components/Postindex.vue";
import PostCreate from "../components/PostCreate.vue";
import PostEdit from "../components/PostEdit.vue";
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
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Login
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})