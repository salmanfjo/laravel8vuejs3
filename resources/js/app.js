require('./bootstrap');

import { createApp } from "vue";
import router from "./router"
import Postindex from "./components/Postindex.vue";

createApp({
    components: {
        Postindex
    }
})
.use(router)
.mount('#app');