import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../pages/main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: mainPage,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router