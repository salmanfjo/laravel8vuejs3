<template>
    <div>
        <div v-for="post in posts" :key="post.id">  
            <router-link :to="{name: 'posts.create'}" >
            Créer un post
            </router-link>
    
            <div>
                titre
            </div>
            <div v-text="post.title">
            </div>
            <div>
                description
            </div>
            <div v-text="post.description">
            </div>
        </div>
    </div>
</template>

<script>
import usePosts from '../services/PostServices';
import { onMounted } from 'vue';
export default {
    setup() {
        const { posts, getPosts } = usePosts();

        onMounted(getPosts());

        return {
            posts
        }
    }
}
</script>