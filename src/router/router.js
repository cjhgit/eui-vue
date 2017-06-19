import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import About from '@/views/home/About'

//const About = resolve => require(['VIEW/about'], resolve);

import Test from '@/components/Test'

import liangchuanUi from '@liangchuan/liangchuan-ui'
import Admin from '@/views/admin/index'
import Main from '@/views/home/index'
import Login from '@/views/login'
import Register from '@/views/register'
import button from '@/views/button'
import UserSetting from '@/views/user/userSetting'
import UserInfo from '@/views/user/userInfo'
import Error404 from '@/views/error404'
import aside from '@/views/aside'
//import User from '@/components/User'

// 文章模块
import Article from '@/views/articles/index'
import ArticleDetail from '@/views/articles/detail'

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
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },

    {
        path: '/admin',
        component: Admin,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/admin/:branch',
        meta: {
            requiresAuth: true
        },
        component: Admin,
        children: [
            {
                path: '/',
                component: Hello
            },
            {
                path: '/admin/about',
                component: About
            },
            {
                path: '/setting',
                component: UserSetting,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/info',
                component: UserInfo,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/articles',
                component: Article,
            },
            {
                path: '/articles/:id',
                component: ArticleDetail
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/404',
        component: Error404
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
    mode: 'history',
    hashbang: false,
    //history: true,
    routes: routerMap
});

router.beforeEach((to, from, next) => {
    next();
    /*
    if (/login/.test(to.path)) {
        console.log(localStorage.token.length);
        console.log(localStorage.token)
        if (localStorage.token !== null) {
            router.push('/home');
            console.log('跳转了')
        } else {
            console.log('继续')
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('权限判断'+localStorage.token)
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        localStorage.token ? next() : router.push({ path: '/login', query: {redirect: redirect}})

        router.push({ path: '/login', query: {redirect: redirect}});
    } else{
        console.log('直接继续')
        next()
    }*/
});

export default router;
