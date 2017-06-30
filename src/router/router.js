import Vue from 'vue'
import Router from 'vue-router'
//const About = resolve => require(['VIEW/about'], resolve);

//
import Error404 from '@/views/error404'
import Test from '@/views/tmp/Test' // 测试页面
import Demo from '@/views/tmp/Demo' // demo 页面
import App from '@/App'
import Empty from '@/views/empty';

// 前台模块
import Home from '@/views/home/base'
import HomeIndex from '@/views/home/index'
import About from '@/views/home/About'
import Pilates from '@/views/home/Pilates'
import Course from '@/views/home/Course'
import CourseDetail from '@/views/home/courseDetail'
import Tutor from '@/views/home/Tutor'
import TutorDetail from '@/views/home/tutorDetail'
import Playground from '@/views/home/Playground'
import Order from '@/views/home/Order'
import Contact from '@/views/home/Contact'
import Login from '@/views/login'
// 前台文章模块
import ArticleList from '@/views/home/articleList'
import ArticleDetail from '@/views/home/articleDetail'


// 后台模块
import Admin from '@/views/admin/base'
import AdminIndex from '@/views/admin/index'
// 后台用户模块
import UserSetting from '@/views/user/userSetting'
import UserInfo from '@/views/user/userInfo'

import AdminResource from '@/views/admin/resources'
import AdminBanner from '@/views/admin/banner'
import AdminPlayground from '@/views/admin/playground'
// 后台文章模块
import AdminArticle from '@/views/admin/articleList'
import AdminArticleDetail from '@/views/admin/articleDetail'
import AdminArticleAdd from '@/views/admin/articleAdd'

import AdminCourse from '@/views/admin/courseList'

import AdminTutor from '@/views/admin/tutorList'
import AdminTutorDetail from '@/views/admin/tutorDetail'
import AdminTutorAdd from '@/views/admin/tutorAdd'

import AdminOrder from '@/views/admin/orderList'
import AdminOrderDetail from '@/views/admin/orderDetail'

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

let adminMap = [
    {
        path: '',
        component: AdminIndex,
    },
    // 后台用户模块
    {
        path: 'info',
        component: UserInfo,
    },
    {
        path: 'setting',
        component: UserSetting,
    },
    // 后台素材模块
    {
        path: 'resources',
        //component: AdminResource,
        redirect: 'resources/playground'
    },
    {
        path: 'resources/banner',
        component: AdminBanner,
    },
    {
        path: 'resources/playground',
        component: AdminPlayground,
    },
    // 后台文章模块
    {
        path: 'articles',
        component: AdminArticle,
    },
    {
        path: 'articles/add',
        component: AdminArticleAdd
    },
    {
        path: 'articles/:id',
        component: AdminArticleDetail
    },
    // 后台课程模块
    {
        path: 'courses',
        component: AdminCourse,
    },
    // 后台导师模块
    {
        path: 'tutors',
        component: AdminTutor,
    },
    {
        path: 'tutors/add',
        component: AdminTutorAdd
    },
    {
        path: 'tutors/:id',
        component: AdminTutorDetail
    },
    // 后台预约模块
    {
        path: 'orders',
        component: AdminOrder,
    },
    {
        path: 'orders/:id',
        component: AdminOrderDetail
    },
];

let homeMap = [
    {
        path: '',
        component: HomeIndex
    },
    {
        path: 'courses',
        component: Course
    },
    {
        path: 'courses/:id',
        component: CourseDetail,
    },
    {
        path: 'tutors',
        component: Tutor
    },
    {
        path: 'tutors/:id',
        component: TutorDetail,
    },
    {
        path: 'playground',
        component: Playground
    },
    {
        path: 'order',
        component: Order
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'pilates',
        component: Pilates
    },
    {
        path: 'contact',
        component: Contact
    },
    // 前台文章模块
    {
        path: 'articles',
        component: ArticleList,
    },
    {
        path: 'articles/:id',
        component: ArticleDetail
    },
    {
        path: '404',
        component: Error404
    },

    {
        path: 'admin',
        component: Admin,
        meta: {
            requiresAuth: true
        },
        children: adminMap
    },
    {
        path: 'admin/:branch',
        meta: {
            requiresAuth: true
        },
        component: Admin,
        children: [
            {
                path: '/',
                component: AdminIndex
            }
        ]
    },
];

let routerMap = [
    {
        path: '/',
        redirect: '/cn/home'
        //component: Main,
        //children: homeMap
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/demo',
        components: Demo
    },
    {
        path: '/:lang',
        component: Empty,
        //children: homeMap
        children: [
            {
                path: '/',
                redirect: 'home'
            },
            {
                path: 'home',
                component: Home,
                children: homeMap,
            },
            {
                path: 'admin',
                component: Admin,
                meta: {
                    requiresAuth: true
                },
                children: adminMap
            },
            {
                path: 'about',
                component: About
            },
        ]
    },
    /*{
        path: '/admin',
        redirect: '/cn/admin'
    },
*/
    /*{
        path: '/:lang',
        component: Main,
        children: homeMap
    },*/
    {
        path: '*',
        component: Error404
    }
];


if (process.env.NODE_ENV !== 'production') {
    const testRouter = [
        {
            path: '/test',
            component: Test
        },

    ]
    routerMap = routerMap.concat(testRouter)

    /*routerMap.push({
        path: '*',
        component: Error404
    })*/
}

if (process.env.NODE_ENV === 'production') {

}

let router = new Router({
    mode: 'history',
    hashbang: false,
    //history: true,
    routes: routerMap,
    linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    console.log('直接权限',localStorage.mytoken)

    if (/login/.test(to.path)) {
        if (localStorage.mytoken) {
            router.push('/admin');
            console.log('跳转了')
        } else {
            console.log('继续')
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('权限判断'+localStorage.mytoken)
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        if (localStorage.mytoken) {
            console.log('已获得权限')
            next();
        } else {
            router.push({ path: '/login', query: {redirect: redirect}});
        }
    } else{
        console.log('直接继续')
        next()
    }

});

export default router;
