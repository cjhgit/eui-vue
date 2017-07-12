import Vue from 'vue'
import Router from 'vue-router'
//const About = resolve => require(['VIEW/about'], resolve);

//
import Error404 from '@/views/error404'
import Home404 from '@/views/home/404'
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
// 前台文章模块
import ArticleList from '@/views/home/articleList'
import ArticleDetail from '@/views/home/articleDetail'


// 后台模块
import Admin from '@/views/admin/base'
import AdminIndex from '@/views/admin/index'
import Admin404 from '@/views/admin/404'

// 后台用户模块
import UserSetting from '@/views/user/userSetting'
import UserInfo from '@/views/user/userInfo'

import Login from '@/views/login'
import Register from '@/views/register'
import FindPwd from '@/views/findPwd'

import AdminResource from '@/views/admin/resources'
import AdminBanner from '@/views/admin/banner'
import AdminPlayground from '@/views/admin/playground'
// 后台文章模块
import AdminArticle from '@/views/admin/articleList'
import AdminArticleAdd from '@/views/admin/articleAdd'
import AdminArticleEdit from '@/views/admin/articleEdit'
// 课程
import AdminCourse from '@/views/admin/courseList'
import AdminCourseAdd from '@/views/admin/courseAdd'
import AdminCourseEdit from '@/views/admin/courseEdit'
// 导师
import AdminTutor from '@/views/admin/tutorList'
import AdminTutorEdit from '@/views/admin/tutorEdit'
import AdminTutorAdd from '@/views/admin/tutorAdd'
// 用户
import AdminUser from '@/views/admin/userList'
import AdminUserAdd from '@/views/admin/userAdd'
import AdminUserEdit from '@/views/admin/userEdit'
import AdminUserEditPwd from '@/views/admin/userEditPwd'
import AdminUserPwd from '@/views/admin/userPwd'

import AdminProfile from '@/views/admin/profile'
//import AdminProfile from '@/views/admin/profile'
import AdminUserProfile from '@/views/admin/userProfile'

import AdminFile from '@/views/admin/file'
import AdminFileDetail from '@/views/admin/fileDetail'
//
import AdminOrder from '@/views/admin/orderList'
import AdminOrderFinished from '@/views/admin/orderFinishedList'
import AdminOrderDetail from '@/views/admin/orderDetail'
import AdminOrderNew from '@/views/admin/orderNew'
import AdminOrderFinish from '@/views/admin/orderFinish'

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
        redirect: 'courses',
    },
    // 后台课程模块
    {
        path: 'courses',
        component: AdminCourse,
    },
    {
        path: 'courses/add',
        component: AdminCourseAdd,
    },
    {
        path: 'courses/:id/edit',
        component: AdminCourseEdit
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
        path: 'articles/:id/edit',
        component: AdminArticleEdit
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
        path: 'tutors/:id/edit',
        component: AdminTutorEdit
    },
    // 后台预约模块
    {
        path: 'orders',
        component: AdminOrder,
    },
    {
        path: 'orders/finished',
        component: AdminOrderFinished,
    },
    {
        path: 'orders/:id',
        component: AdminOrderDetail
    },
    // 后台文件管理模块
    {
        path: 'files',
        component: AdminFile
    },
    {
        path: 'files/:id',
        component: AdminFileDetail
    },
    // 用户管理模块
    {
        path: 'users',
        component: AdminUser
    },
    {
        path: 'users/add',
        component: AdminUserAdd
    },
    {
        path: 'users/:id/edit',
        component: AdminUserEdit
    },
    {
        path: 'users/:id/password',
        component: AdminUserEditPwd
    },
    {
        path: 'profile',
        component: AdminProfile
    },
    {
        path: 'user/profile',
        component: AdminUserProfile
    },
    {
        path: 'user/password',
        component: AdminUserPwd
    },
    {
        path: '*',
        component: Admin404
    }
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
    {
        path: '404',
        component: Home404
    },
    {
        path: '*',
        component: Home404
    }
];

let routerMap = [
    {
        path: '/',
        redirect: '/cn/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/find_password',
        component: FindPwd
    },
    {
        path: '/register',
        component: Register
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
        //component: Home404
        redirect: '/cn/home/404'
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
    //linkActiveClass: 'active'
    //saveScrollPosition: true,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    if (/login/.test(to.path)) {
        if (localStorage.mytoken) {
            router.push('/admin');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        if (localStorage.mytoken) {
            next();
        } else {
            router.push({ path: '/login', query: {redirect: redirect}});
        }
    } else{
        next()
    }

});

export default router;
