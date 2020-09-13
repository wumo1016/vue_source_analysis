import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data(){
    return {
      message: '测试123'
    }
  },
  render(){
    return (
      <div>
        { this.message }
      </div>
    )
  }
})
