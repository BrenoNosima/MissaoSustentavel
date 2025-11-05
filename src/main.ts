import { createApp } from 'vue'
import App from './App.vue'

// Styles
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Create and mount the app
const app = createApp(App)
app.mount('#app')
