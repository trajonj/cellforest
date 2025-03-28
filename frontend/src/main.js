import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Vue3Marquee from 'vue3-marquee'
import * as THREE from 'three';

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$three = THREE;
app.use(router);
app.mount('#app');
app.use(Vue3Marquee)
