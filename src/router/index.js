import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/views/Hello'
import Badge from '@/views/Badge'
import Pager from '@/views/Pager'
import Button from '@/views/Button'
import Form from '@/views/Form'
import DashBoard from '@/views/DashBoard'
import Nav from '@/views/Nav'
import Admin from '@/views/Admin'

import Install from '@/views/Install'
import Usage from '@/views/Usage'

import About from '@/views/About'

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'Hello',
        component: Hello,
        children: [
            {
                path: '/',
                component: DashBoard
            },
            {
                path: '/badge',
                component: Badge
            },
            {
                path: '/install',
                component: Install
            },
            {
                path: '/pager',
                component: Pager
            },
            {
                path: '/button',
                component: Button
            },
            {
                path: '/form',
                component: Form
            },
            {
                path: '/nav',
                component: Nav
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/usage',
                component: Usage
            }
        ]
    },
    // 页面
    {
        path: '/admin',
        component: Admin
    }
]
let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
