
import { createApp } from 'vue'
import router from '../../router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/pages/fx/app.vue'


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
