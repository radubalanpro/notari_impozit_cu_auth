const { createApp } = require('vue');
//import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import 'bootstrap/dist/css/bootstrap.min.css';

//Vue.config.productionTip = false

const app = createApp(App);
app.use(router);
//app.use(store);
app.mount('#app');

