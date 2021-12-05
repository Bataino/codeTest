import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSkeletonLoader from 'skeleton-loader-vue';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import './styles/style.css'
import './styles/fonts.css'

createApp(App)
.use(router)
.component('vue-skeleton-loader', VueSkeletonLoader)
// .use(BootstrapVue)
// .use(IconsPlugin)
.mount('#app')
