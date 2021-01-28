import Vue from "vue";
import App from "./App.vue";
// import Vuex, { Store } from 'vuex'
// Vue.use(Vuex)

import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

// const moduleA = {
//   namespaced: true,
//   state: {
//     count: 1
//   },
//   getters: {
//     computedCount(state){
//       return state.count + 1
//     }
//   },
//   mutations: {
//     increment(state){
//       state.count++
//     }
//   },
//   actions: {
//     increment({ commit }){
//       commit('increment')
//     }
//   },
// }
// const moduleB = {

// }

// const store = new Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   },
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment(state){
//       state.count++
//     }
//   },
//   actions: {
//     increment({ commit }){
//       commit('increment')
//     }
//   },
//   plugins: debug ? [createLogger()] : []
// })

new Vue({
  el: '#app',
  // store,
  render: h => h(App),
})
