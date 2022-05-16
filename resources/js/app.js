require('./bootstrap');

import { createApp } from 'vue'
import App from './views/app.vue'

createApp({
    components: { App }
}).mount('#app')