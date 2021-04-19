import vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import home from '@/views/Home'
import about from '@/views/About'
import register from '@/views/Auth/Register'
import login from '@/views/Auth/Login'
import dashboard from '@/views/Dashboard'

vue.use(Router)

const router = new Router({
    mode:"history",
    routes:[
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/about",
        name: "about",
        component: about
    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
        meta: {
            requireAuth: true
        }
    }
    ]
})

router.beforeEach((to,from,next) =>{
    if(to.matched.some(routes => routes.meta.requireAuth)){
        const user = firebase.auth().currentUser;
        if(user){
            next();
        }else{
            next({
                name: 'login'
            })
        }
    }else{
        next();
    }
})

export default router;