import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.axios = axios
axios.defaults.baseURL = import.meta.env.DEV ? import.meta.env.VITE_LOCAL_URL : import.meta.env.VITE_PROD_URL
try {
    const token = localStorage.getItem('token') || null
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
} catch (error) {
    console.log(error)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
