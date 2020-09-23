import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component('headers', function(resolve, reject){
  require(['./components/headers'], function(res) {
    resolve(res)
  })
})

new Vue({
  template: '<App></App>',
  el: '#app',
  render: h => h(App)
})
