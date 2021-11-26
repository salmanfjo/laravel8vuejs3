import axios from 'axios';
import { ref } from 'vue';
import router from '../router/index.js';

export default function usePosts() {

    const errors = ref([]);
    const posts = ref([]);
    const post = ref([]);

    const getPosts = async () => {
        let response = await axios.get('/api/posts');
        posts.value = response.data.data;
    };

    const getPost = async (id) => {
        let response = await axios.get(`/api/posts/${id}`)
        post.value = response.data.data
    }

    const createPost = async (data) => {
        try {
            await axios.post('/api/posts', data);
            router.push({name: 'home'});
        } catch (error) {
            const createPostErrors = error.response.data.errors;
            console.log(createPostErrors);
            for (const key in createPostErrors) {
                errors.value += createPostErrors[key][0] + ' ';
            }
        }
    };

    const updatePost = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/posts/${id}`, post.value)
            await router.push({ name: 'home' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyPost = async (id) => {
        await axios.delete(`/api/posts/${id}`)
    }

    return {
        posts,
        post,
        getPosts,
        getPost,
        createPost,
        updatePost,
        destroyPost,
        errors
    }
}