import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/views/Hello'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})

export default router
