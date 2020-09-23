import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component('App', App)

new Vue({
  template: '<App></App>',
  el: '#app',
  // render(){
  //   return (
  //     <App />
  //   )
  // },
})
