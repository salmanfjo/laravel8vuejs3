import axios from 'axios';
import { ref } from 'vue';
import router from '../router/index.js';

export default function usePosts() {

    const errors = ref([]);
    const posts = ref([]);

    const getPosts = async () => {
        let response = await axios.get('/api/posts');
        posts.value = response.data.data;
    };

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

    return {
        posts,
        getPosts,
        createPost,
        errors
    }
}