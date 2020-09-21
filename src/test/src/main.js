import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  render: h => h(App),
})


// function Test(){

// }
// Test.mixin = function(){
//   console.log(this)
// }
// Test.mixin()