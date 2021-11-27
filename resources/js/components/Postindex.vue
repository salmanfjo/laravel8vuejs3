<template>
    <div class="mx-auto max-w-screen-lg">
        <router-link :to="{name: 'posts.create'}" >
            Créer un post
            </router-link>
        <div v-for="post in posts" :key="post.id" class="px-4 border-solid border-gray-400 border-2 rounded w-96 float-left px-4">
            <div class="">
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
                <router-link :to="{ name: 'posts.edit', params: { id: post.id } }" class="mr-2">
                Edit
                </router-link>
            </div>
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