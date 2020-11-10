import Vue from "vue";
import App from "./App.vue";
import A from './views/A'
import B from './views/B'

new Vue({
  el: '#app',
  components: {
    A,
    B
  },
  template: `
  <div>
    <button @click="show=!show">toggle</button>
    <transition :appear="true" name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
  `,
  data: {
    show: true,
  },
})
