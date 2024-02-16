// import vue and vue-router
import { createApp } from 'vue'
import{createRouter, createWebHistory} from 'vue-router'

//import your components
import App from './App.vue'
import registerComponent from './components/registerComponent.vue'
import signinComponent from './components/signinComponent.vue'
import homeComponent from'./components/homeComponent.vue'
import calculatorComponent from'./components/calculatorComponent'

//define routes
const routes=[
    {path: '/register', component: registerComponent},
    {path:'/signin', component:signinComponent},
    {path:'/home',component: homeComponent},
    {path:'/calculate',component:calculatorComponent}
]

//create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
