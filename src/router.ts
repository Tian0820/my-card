import Vue from 'vue'
import Router from 'vue-router'
import CoverPage from './views/CoverPage.vue'
import GreetingPage from './views/GreetingPage.vue'
import EndPage from './views/EndPage.vue'
import About from './views/About.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CoverPage',
            component: CoverPage
        },
        {
            path: '/greeting/:name',
            name: 'GreetingPage',
            component: GreetingPage
        },
        {
            path: '/end',
            name: 'EndPage',
            component: EndPage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
