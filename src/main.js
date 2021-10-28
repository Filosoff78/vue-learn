import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import index from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import 'bootstrap/dist/css/bootstrap.css'

import mitt from 'mitt'
const eventBus = mitt()

const app = createApp(App)

app.config.globalProperties.eventBus = eventBus

app.use(store)
app.use(index)
app.mount('#app')

if(localStorage.items) localStorage.items = 0;