// import vue and vue-router
import { createApp } from 'vue'
import{createRouter, createWebHistory} from 'vue-router'

//import your components
import App from './App.vue'
import registerComponent from './components/registerComponent.vue'
import signinComponent from './components/signinComponent.vue'
import homeComponent from'./components/homeComponent.vue'
import calculatorComponent from'./components/calculatorComponent'
import clockComponent from './components/clockComponent'

//define routes
const routes=[
    {path: '/register', 
    component: registerComponent,
        meta:{
            hideSidebar:true
        }
    },
    {path:'/signin',
     component:signinComponent,
        meta:{
            hideSidebar:true
        }
    },
    {path:'/home',
    component: homeComponent,
        meta:{
            hideSidebar:false
        }
    },
    {path:'/calculate',
    component:calculatorComponent,
        meta:{
            hideSidebar:false
        }
    },
    {path:'/clock',
    component:clockComponent,
        meta:{
            hideSidebar:false
        }
    },
]

//create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
