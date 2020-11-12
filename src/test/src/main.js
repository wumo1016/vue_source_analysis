import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const A = { template: '<div>A组件</div>' }
const B = { template: '<div>B组件</div>' }

const routes = [
  { path: '/a', component: A },
  { path: '/b', component: B }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
