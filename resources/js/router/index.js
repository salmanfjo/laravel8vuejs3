import { createRouter, createWebHistory } from "vue-router";
import Postindex from "../components/Postindex.vue";
import PostCreate from "../components/PostCreate.vue";
import PostEdit from "../components/PostEdit.vue";

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
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})