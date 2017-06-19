import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Test from '@/components/Test'

import liangchuanUi from '@liangchuan/liangchuan-ui'
import Login from '@/views/login'
import button from '@/views/button'
import UserSetting from '@/views/user/userSetting'
import UserInfo from '@/views/user/userInfo'
import Error404 from '@/views/error404'
import aside from '@/views/aside'
//import User from '@/components/User'

Vue.use(Router);

const User = {
    template: `
        <div>{{ $route.params.id }}
            <router-view></router-view>
        </div>
    `
};

const buttonPage = { template: '<div>按钮页面</div>' }
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const ComponentHome = { template: '<div>组件首页Home</div>' }

/*const NotFound = resolve => require(['VIEW/notFound'], resolve);*/

const Components = {
    template: `
        <div>{{ $route.params.id }}
            <router-view></router-view>
        </div>
    `
};

let routerMap = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Hello,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home/setting',
        component: UserSetting,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/home/info',
        component: UserInfo,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/home/:branch',
        meta: {
            requiresAuth: true
        },
        component: Hello,
    },
    {
        path: '/404',
        component: Error404
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/components',
        component: Components,
    },
    {
        path: '/components',
        component: Components,
    },
    {
        path: '/components/button',
        component: button,
    },
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                path: '',
                component: UserHome
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: UserProfile
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: UserPosts
            }
        ]
    }
];


if (process.env.NODE_ENV !== 'production') {
    const testRouter = [{
        path: '/test',
        component: Test
    }]
    routerMap = routerMap.concat(testRouter)

    routerMap.push({
        path: '*',
        component: Error404
    })
}

if (process.env.NODE_ENV === 'production') {

}

let router = new Router({
    hashbang: false,
    //history: true,
    routes: routerMap
});

router.beforeEach((to, from, next) => {
    if (/login/.test(to.path)) {
        console.log(localStorage.token);
        !localStorage.token ? router.push('/home') : next()
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('权限判断'+localStorage.token)
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        localStorage.token ? next() : router.push({ path: '/login', query: {redirect: redirect}})

        router.push({ path: '/login', query: {redirect: redirect}});
    } else{
        next()
    }
});

export default router;
