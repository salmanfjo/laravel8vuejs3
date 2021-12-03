<template>
    <Header />
    <div class="mx-auto max-w-screen-lg">
        

        <button @click="logout">Logout</button>


        
        <router-link :to="{name: 'posts.create'}" >
            Créer un post
        </router-link>

        <div class="grid grid-flow-raw grid-cols-3 grid-rows-3 gap-4">
            <div v-for="post in posts" :key="post.id" class="px-4 border-solid border-gray-400 border-2 rounded shadow-md">
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
    </div>
</template>

<script>
import usePosts from '../../composable/PostServices';
import login from '../../composable/AuthServices';
import Header from '../partials/header';
import { onMounted } from 'vue';
export default {
    components: {
        Header
    },
    setup() {

        const { posts, getPosts, destroyPost } = usePosts();
        const { destroyLog } = login();

        const deletePost = async (id) => {
            if (!window.confirm('You sure?')) {
                return
            }
            await destroyPost(id);
            await getPosts();
        }

        const logout = async() => {
            console.log("logout func");
            await destroyLog();
        }

        onMounted(getPosts());

        return {
            posts,
            deletePost,
            logout
        }
    }
}
</script>