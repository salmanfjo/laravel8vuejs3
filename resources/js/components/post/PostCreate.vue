<template>
    <Header />
    <div class="mx-auto max-w-screen-lg">
        <form @submit.prevent="storePost">
            <div v-if="errors != ''">
            {{ errors }}
            </div>
            <div>
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="form.title">
            </div>
            <div>
                <label for="decription">Description</label>
                <input type="textarea" id="description" v-model="form.description">
            </div>
            <button type="submit">enregistrer</button>
        </form>
    </div>  
</template>

<script>
import { reactive } from 'vue'
import usePosts from '../../composable/PostServices';
import Header from '../partials/header';
    export default {
        components: {
        Header
        },
        setup() {
            const form = reactive({
                title: '',
                description: '',
            });
            const { createPost, errors } = usePosts();

        const storePost = async () => {
            await createPost({...form});
        };

        return {
            form,
            storePost,
            errors
        }
        }

        
    }
</script>