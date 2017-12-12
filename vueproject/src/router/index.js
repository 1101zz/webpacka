import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from "@/components/header"
import footer from "@/components/footer"
import index from "@/components/index"
import Music from "@/components/Music"
import Book from "@/components/Book"
import Photo from "@/components/Photo"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/header",
      component:header
    },{
      path:"/footer",
      component:footer
    },{
      path:"/index",
      component:index
    },
    {
      path     : '/music',
      component: Music
    },
    {
      path     : '/book',
      component: Book
    },
    {
      path     : '/photo',
      component: Photo
    }
  ]
})
