import Vue from 'vue'
import Router from 'vue-router'
// import Top from '@/components/Top'
// import Output from '@/components/Output'
// import Skill from '@/components/Skill'
// import Profile from '@/components/Profile'
import Home from '@/views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
  //   {
  //     path: '/',
  //     name: 'Top',
  //     component: Top
  //   },
  // //Output
  //   {
  //     path: '/outputs',
  //     name: 'Output',
  //     component: Output
  //   },
  // //Skill
  //   {
  //     path: '/skills',
  //     name: 'Skill',
  //     component: Skill
  //   },
  // //Profile
  //   {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: Profile
  // }
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ]
})
