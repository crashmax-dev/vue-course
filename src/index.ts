import { createApp } from 'vue'
import App from './app/app.vue'
import { router } from './app/router.js'
import './app/app.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
