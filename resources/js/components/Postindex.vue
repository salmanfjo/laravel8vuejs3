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
            <button class="ring-0 bg-red-50" v-on:click="deletePost(post.id)">delete</button>
            <td class="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
            <router-link :to="{ name: 'posts.edit', params: { id: post.id } }" class="mr-2">
                Edit
            </router-link>
</td>
        </div>
    </div>
</template>

<script>
import usePosts from '../composable/PostServices';
import { onMounted } from 'vue';
export default {
    setup() {

        const { posts, getPosts, destroyPost } = usePosts();

        const deletePost = async (id) => {
            if (!window.confirm('You sure?')) {
                return
            }
            
            await destroyPost(id)
            await getPosts()
        }

        onMounted(getPosts());

        return {
            posts,
            deletePost
        }
    }
}
</script>