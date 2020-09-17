import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<div>123456</div>',
  data() {
    return {
      message: '测试'
    }
  },
  render(h) {
    return (
    <div>123</div>
    )
  },
})
