import { createRouter, createWebHistory } from "vue-router";
import Postindex from "../components/Postindex.vue";
import PostCreate from "../components/PostCreate.vue";

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
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})