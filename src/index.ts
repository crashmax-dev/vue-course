import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/app.vue'
import { router } from './app/router.js'
import './app/app.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
