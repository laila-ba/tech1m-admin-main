import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import router from './router'
import VueFeather from 'vue-feather'




createApp(App).use(router).component(VueFeather.name,VueFeather).mount('#app')
