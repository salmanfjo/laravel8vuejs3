<template>
    <Header />
    <div class="mx-auto max-w-screen-lg">
        <form @submit.prevent="storeLogin">
            <div v-if="errors != ''">
            {{ errors }}
            </div>
            <div>
                <label for="title">Email</label>
                <input type="email" id="email" v-model="form.email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password">
            </div>
            <button type="submit">log in</button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import login from '../../composable/AuthServices';
import Header from '../partials/header';
    export default {
        components: {
        Header
        },
        setup() {
            const form = reactive({
                email: '',
                password: '',
            });
            const { handleLogin, errors } = login();

        const storeLogin = async () => {
            console.log('storeloginfunc');
            await handleLogin({...form});
        };

        return {
            form,
            storeLogin,
            errors
        }
        }

        
    }
</script>