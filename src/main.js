import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';

createApp(App).use(router).mount('#app');

// const app = createApp(App);
// app.use(router);
// app.mount('#app');
