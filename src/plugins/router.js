import vue from 'vue'

import vueRouter from 'vue-router'
vue.use(vueRouter);

import Index from '../pages/index.vue'
import Bookshelf from '../pages/bookshelf.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'
import Detail from '../pages/detail.vue'
import NoPage from '../pages/no-page.vue'
import Author from '../pages/part/author.vue'
import Activity from '../pages/part/activity.vue'
import Free from '../pages/part/free.vue'


let routes=[
   {path:'/index',component:Index,
    redirect:'/author',
   children:[
    {path:'/author',component:Author},
    {path:'/activity',component:Activity},
    {path:'/free',component:Free},
  ]
},
  {path:'/bookshelf',component: Bookshelf},
  {path:'/user',component:User},
  {path:'/login',component:Login},
   {path:'/register',component:Register},
  //  {path:'/detail',component:Detail,children:[
  //    {path:':id',component:Detail}
  //  ]},
  {path:'/detail/:id',component:Detail,name:'detail'},
  {path:'/',redirect:'/index'},
  {path:'*',component:NoPage},
   
  

]

let router=new  vueRouter({
  routes,
  linkActiveClass:'my-active'
});

export default router