<template>
    <Header />
    <div class="mx-auto max-w-screen-lg">
        <form class="space-y-6" v-on:submit.prevent="savePost">
            <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors != ''">
            {{ errors }}
            </div>
            <div class="space-y-4 rounded-md shadow-sm">
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                    <div class="mt-1">
                        <input type="text" name="title" id="title"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="post.title">
                    </div>
                </div>

                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <div class="mt-1">
                        <textarea  name="description" id="description"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="post.description"></textarea>
                    </div>
                </div>

            </div>

            <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
                Save
            </button>
        </form>
    </div>  
</template>

<script>
import usePosts from '../../composable/PostServices';
import Header from '../partials/header.vue';
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
        const { errors, post, updatePost, getPost } = usePosts()

        onMounted(() => getPost(props.id))

        const savePost = async () => {
            await updatePost(props.id)
        }

        return {
            errors,
            post,
            savePost
        }
    }
}
</script>