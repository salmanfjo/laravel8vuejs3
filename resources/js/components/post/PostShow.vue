<template>
    <Header />
    <div class="mx-auto max-w-screen-lg">

        <h2 v-text="post.title"></h2>
        <div>
            <p v-text="post.description"></p>
        </div>

    </div>  
</template>

<script>
import usePosts from '../../composable/PostServices';
import Header from '../partials/header';
import { onMounted } from 'vue';

export default {
    components: {
        Header
    },
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {
        const { post, getPost } = usePosts()

        onMounted(() => getPost(props.id))

        return {
            post,
        }
    }
}
</script>