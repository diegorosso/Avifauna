import './assets/style.css'
import 'vue-final-modal/style.css'
// import { vfmPlugin } from 'vue-final-modal'
import { createVfm } from 'vue-final-modal'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const vfm = createVfm()
const app = createApp(App)
// app.use(vfmPlugin)
app.use(vfm)
app.use(router)

app.mount('#app')
