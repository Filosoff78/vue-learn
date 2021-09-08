import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import index from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

createApp(App).use(store).use(index).mount('#app')
