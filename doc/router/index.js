import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/views/Hello'
import Badge from '@/views/Badge'
import Pager from '@/views/Pager'

import Form from '@/views/Form'

import Nav from '@/views/Nav'
import Admin from '@/views/Admin'
// 页面
import DashBoard from '@/views/page/dashBoard'
import Install from '@/views/page/install'
import Usage from '@/views/page/usage'
import Error404 from '@/views/Error404'

import About from '@/views/About'
// 组件
import Button from '@/views/component/button'
import Appbar from '@/views/component/appbar'
import Icon from '@/views/component/icon'
import List from '@/views/component/list'
import Other from '@/views/component/other'

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
                path: '/appbar',
                component: Appbar
            },
            {
                path: '/button',
                component: Button
            },
            {
                path: '/icon',
                component: Icon
            },
            {
                path: '/list',
                component: List
            },
            {
                path: '/other',
                component: Other
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
            },
            {
                path: '*',
                component: Error404
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
