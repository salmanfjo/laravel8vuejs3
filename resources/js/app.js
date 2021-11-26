require('./bootstrap');

import { createApp } from "vue";
import router from "./router"
import Postindex from "./components/Postindex.vue";
import '../css/app.css';


createApp({
    components: {
        Postindex
    }
})
.use(router)
.mount('#app');