import Vue from "vue";
import App from "./App.vue";

const child = {
  template: `
    <div>
      <header><slot name="header"></slot></header>
      <slot></slot>
      <footer><slot name="footer"></slot></footer>
    </div>
  `,
}

new Vue({
  el: '#app',
  components: {
    child
  },
  template: `
  <div>
    <child>
      <div slot="header">头部</div>
      <div>中部</div>
      <div slot="footer">尾部</div>
    </child>
  </div>
  `,
  data: {
    message: '123',
  },
  methods: {}
})
