import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Home.vue'
import LoginPage from '../components/Login.vue'
import RegisterPage from '../components/Register.vue'
import LogoutModal from "../components/LogoutModal.vue";
import UserList from "../components/UserList.vue";


const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/logout', name: 'LogoutModal', component: LogoutModal }, // Add the modal route
    {
        path: '/users',
        component: UserList,
         // You can implement a guard based on this
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
