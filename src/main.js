import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(ElementPlus).use(store).use(router)
  // .use(axios)
  // .use(VueAxios)
  .mount('#app');
