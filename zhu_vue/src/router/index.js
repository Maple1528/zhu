import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home.vue')
const Explore = () => import('@/views/Explore.vue')
const News = () => import('@/views/News.vue')
const Sort = () => import('@/views/Sort.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')

const Project1 = () => import('@/views/Proj/Project1.vue')

const User = () => import('@/views/User.vue')
const MyProj = () => import('@/components/user/MyProj.vue')
const Like = () => import('@/components/user/Like.vue')
const Favorite = () => import('@/components/user/Favorite.vue')
const Edit = () => import('@/components/user/Edit.vue')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort,
    props: true
  },
  {
    path: '/proj/project1',
    name: 'Project1',
    component: Project1
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/User/:id',
    component: User,
    children: [
      {
        path: '/',
        component: MyProj
      },
      {
        path: 'myproj',
        component: MyProj
      },
      {
        path: 'like',
        component: Like
      },
      {
        path: 'favorite',
        component: Favorite
      },
      {
        path: 'edit',
        component: Edit
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// if (sessionStorage.getItem('token')) {
//   store.commit('set_token', sessionStorage.getItem('token'))
// }

export default router
