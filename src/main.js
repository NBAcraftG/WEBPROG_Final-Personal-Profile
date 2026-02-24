import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Global error handler to catch startup errors
app.config.errorHandler = (err, vm, info) => {
  console.error('Global Error:', err)
  console.error('Error Info:', info)
}

app.mount('#app')