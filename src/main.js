// import vue and vue-router
import { createApp } from 'vue'
import{createRouter, createWebHistory} from 'vue-router'

//import your components
import App from './App.vue'
import registerComponent from './components/registerComponent.vue'

//define routes
const routes=[
    {path: '/register', component: registerComponent}
]

//create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
