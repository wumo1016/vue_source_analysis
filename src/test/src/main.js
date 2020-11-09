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
    <keep-alive>
      <component :is="currentComp" />
    </keep-alive>
    <button @click="change">切换</button>
  </div>
  `,
  data: {
    currentComp: 'A',
  },
  methods: {
    change(){
      this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
    }
  }
})
