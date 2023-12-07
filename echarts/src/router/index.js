import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from "../views/HelloWorld/HelloWorld.vue"
import HelloTitle from "../views/HelloTitle/HelloTitle.vue"
import HelloTooltip from "../views/HelloTooltip/HelloTooltip.vue"
import HelloLegend from "../views/HelloLegend/HelloLegend.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/hellotitle',
    name: 'hellotitle',
    component: HelloTitle
  },
  {
    path: '/hellotooltip',
    name: 'hellotooltip',
    component: HelloTooltip
  },
  {
    path: '/hellolegend',
    name: 'hellolegend',
    component: HelloLegend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
