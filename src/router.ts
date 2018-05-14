import Vue from 'vue'
import Router from 'vue-router'
import CoverPage from './views/CoverPage.vue'
import GreetingPage from './views/GreetingPage.vue'
import About from './views/About.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'cover',
            component: CoverPage
        },
        {
            path: '/',
            name: 'greeting',
            component: GreetingPage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
