import axios from "axios"
import router from "../router";

export default function login() {

    const handleLogin = async (data) => {
        try{
            await axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', data);
                router.push({name: 'home'});
            });
            
        } catch (error) {
            const createPostErrors = error.response.data.errors;
            for (const key in createPostErrors) {
                errors.value += createPostErrors[key][0] + ' ';
            }
        }
    }

    const destroyLog = async() => {
        try {
            await axios.get('/sanctum/csrf-cookie').then(response => {
                 axios.post('/logout');
                 router.push({name: 'home'});
                console.log('dd');
            }); 
        } catch (error) {
            const createPostErrors = error.response.data.errors;
            for (const key in createPostErrors) {
                errors.value += createPostErrors[key][0] + ' ';
            }
        
    }
}

    return {
        handleLogin,
        destroyLog
    }
}