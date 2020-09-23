import Vue from "vue";
import App from "./App.vue";

import LoadingComp from './components/loading.vue'
import ErrorComp from './components/error.vue'

Vue.config.productionTip = false;

const AsyncComp = () => ({
  // 需要加载的组件，应该是Promise
  component: import('./components/headers.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染loading组件的等待时间，默认200ms
  delay: 0,
  // 最长等待时间，超出等到时间渲染错误组件 默认： Infinity
  // timeout: 1000
})
Vue.component('headers', AsyncComp)

new Vue({
  template: '<App></App>',
  el: '#app',
  render: h => h(App)
})
