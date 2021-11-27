import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect:'home',
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/register',
        name:'Register',
        component:() => import("@/views/Register/Register") //路由懒加载
      }
    ]
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  }
]



const router = new VueRouter({
  routes
})

export default router
